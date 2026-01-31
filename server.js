// server.js
require('dotenv').config({ path: '.env.local' });
const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const prisma = require('./lib/prisma');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// ============================================
// API ROUTES
// ============================================

// GET /api/workshops - Get all workshops
app.get('/api/workshops', async (req, res) => {
  try {
    const { category, level, location, popular } = req.query;
    
    const where = {
      isActive: true,
    };
    
    if (category) where.category = category.toUpperCase();
    if (level) where.level = level.toUpperCase();
    if (location) where.location = location;
    if (popular === 'true') where.isPopular = true;
    
    const workshops = await prisma.workshop.findMany({
      where,
      include: {
        dates: {
          orderBy: { date: 'asc' },
        },
      },
      orderBy: [
        { isPopular: 'desc' },
        { createdAt: 'desc' },
      ],
    });
    
    res.json(workshops);
  } catch (error) {
    console.error('Error fetching workshops:', error);
    res.status(500).json({ error: 'Failed to fetch workshops' });
  }
});

// GET /api/workshops/:slug - Get single workshop
app.get('/api/workshops/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const workshop = await prisma.workshop.findUnique({
      where: { slug },
      include: {
        dates: {
          orderBy: { date: 'asc' },
        },
      },
    });
    
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    
    res.json(workshop);
  } catch (error) {
    console.error('Error fetching workshop:', error);
    res.status(500).json({ error: 'Failed to fetch workshop' });
  }
});

// POST /api/bookings - Create booking
app.post('/api/bookings', async (req, res) => {
  try {
    const {
      workshopId,
      workshopDateId,
      firstName,
      lastName,
      email,
      emailConfirm,
      phone,
      birthdate,
      street,
      city,
      postalCode,
      isCompany,
      companyName,
      companyCif,
      companyAddress,
      comments,
    } = req.body;
    
    // Validation
    if (email !== emailConfirm) {
      return res.status(400).json({ error: 'Emails do not match' });
    }
    
    // Check if spots are available
    const workshopDate = await prisma.workshopDate.findUnique({
      where: { id: workshopDateId },
      include: { workshop: true },
    });
    
    if (!workshopDate) {
      return res.status(404).json({ error: 'Workshop date not found' });
    }
    
    const availableSpots = workshopDate.maxSpots - workshopDate.bookedSpots;
    if (availableSpots <= 0) {
      return res.status(400).json({ error: 'No spots available' });
    }
    
    // Create booking in transaction
    const booking = await prisma.$transaction(async (tx) => {
      // Update booked spots
      await tx.workshopDate.update({
        where: { id: workshopDateId },
        data: { bookedSpots: { increment: 1 } },
      });
      
      // Create booking
      return tx.booking.create({
        data: {
          workshopId,
          workshopDateId,
          firstName,
          lastName,
          email,
          phone,
          birthdate: new Date(birthdate),
          street,
          city,
          postalCode,
          isCompany: isCompany || false,
          companyName: isCompany ? companyName : null,
          companyCif: isCompany ? companyCif : null,
          companyAddress: isCompany ? companyAddress : null,
          comments: comments || null,
        },
        include: {
          workshop: true,
          workshopDate: true,
        },
      });
    });
    
    // Send confirmation email (if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = require('./lib/resend');
        const emailHtml = `
          <h1>¡Inscripción confirmada!</h1>
          <p>Hola ${firstName},</p>
          <p>Tu inscripción para <strong>${booking.workshop.title}</strong> ha sido recibida correctamente.</p>
          <h2>Detalles de la reserva:</h2>
          <ul>
            <li><strong>Curso:</strong> ${booking.workshop.title}</li>
            <li><strong>Fecha:</strong> ${new Date(booking.workshopDate.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</li>
            <li><strong>Ubicación:</strong> ${booking.workshop.location}</li>
            <li><strong>Precio:</strong> €${booking.workshop.price}</li>
            <li><strong>Número de reserva:</strong> ${booking.bookingNumber}</li>
          </ul>
          <h3>Próximos pasos:</h3>
          <ol>
            <li>Recibirás la factura por correo electrónico</li>
            <li>Realiza el pago en los próximos 7 días</li>
            <li>Recibirás información detallada antes del curso</li>
          </ol>
          <p>Si tienes alguna pregunta, contáctanos en info@tallerbrico.es</p>
          <p>¡Nos vemos en el curso!</p>
        `;
        
        // Resend requires 'from' field - use configured email or default
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        
        const emailData = {
          from: fromEmail,
          to: email,
          subject: `Inscripción confirmada - ${booking.workshop.title}`,
          html: emailHtml,
        };
        
        const result = await resend.emails.send(emailData);
        
        console.log(`✅ Confirmation email sent to ${email}`, result);
      } catch (emailError) {
        console.error('❌ Error sending confirmation email:', emailError);
        console.error('Error details:', JSON.stringify(emailError, null, 2));
        // Don't fail the booking if email fails
      }
    } else {
      console.warn('⚠️  RESEND_API_KEY not configured - skipping email');
    }
    
    res.json({
      success: true,
      booking: {
        id: booking.id,
        bookingNumber: booking.bookingNumber,
        email: booking.email,
      },
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// POST /api/contact - Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    
    // Send email notification (if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = require('./lib/resend');
        // Resend requires 'from' field - use configured email or default
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        
        const emailData = {
          from: fromEmail,
          to: process.env.RESEND_CONTACT_EMAIL || 'info@tallerbrico.es',
          replyTo: email,
          subject: `Contacto: ${subject}`,
          html: `
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        };
        
        const result = await resend.emails.send(emailData);
        
        console.log(`✅ Contact form email sent`, result);
      } catch (emailError) {
        console.error('❌ Error sending contact email:', emailError);
        console.error('Error details:', JSON.stringify(emailError, null, 2));
      }
    } else {
      console.warn('⚠️  RESEND_API_KEY not configured - skipping email');
    }
    
    res.json({ success: true, id: contact.id });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// GET /api/categories - Get all categories
app.get('/api/categories', (req, res) => {
  const categories = [
    { id: 'FONTANERIA', name: 'Fontanería', nameEn: 'Plumbing', image: 'img/waldemar-brandt-LXDwUbmPDQo-unsplash.jpg' },
    { id: 'ELECTRICIDAD', name: 'Electricidad', nameEn: 'Electrical', image: 'img/planimetrica-rvNkkzPGJQE-unsplash.jpg' },
    { id: 'ALICATADO', name: 'Alicatado', nameEn: 'Tiling', image: 'img/etienne-girardet-1fDq8DMtxJg-unsplash.jpg' },
    { id: 'CARPINTERIA', name: 'Carpintería', nameEn: 'Carpentry', image: 'img/tekton-YhKP9j4-5FQ-unsplash.jpg' },
    { id: 'PINTURA', name: 'Pintura', nameEn: 'Painting', image: 'img/ernys-cDw2cA9bbYs-unsplash.jpg' },
    { id: 'ESTUCADO', name: 'Estucado', nameEn: 'Plastering', image: 'img/erik-mclean-w2bzXCx7Y3g-unsplash.jpg' },
    { id: 'ALBANILERIA', name: 'Albañilería', nameEn: 'Masonry', image: 'img/james-kovin-qqLxF3M-MA8-unsplash.jpg' },
    { id: 'BRICOLAJE', name: 'Bricolaje', nameEn: 'DIY', image: 'img/bob-van-aubel-KIJBRWBfhvM-unsplash.jpg' },
    { id: 'SOLDADURA', name: 'Soldadura', nameEn: 'Welding', image: 'img/ali-mkumbwa-1iho4gvI4-g-unsplash.jpg' },
    { id: 'SUELOS', name: 'Suelos', nameEn: 'Flooring', image: 'img/valentina-giarre-jdriGWcZZKo-unsplash.jpg' },
    { id: 'CLIMATIZACION', name: 'Climatización', nameEn: 'HVAC', image: 'img/ryno-marais-dhFpe7CTI5Y-unsplash.jpg' },
  ];
  res.json(categories);
});

// Configure multer for CV uploads
const uploadsDir = 'uploads/cv';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed'));
    }
  }
});

// POST /api/vacancies/cv - Submit CV for vacancies
app.post('/api/vacancies/cv', upload.single('cvFile'), async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;
    const file = req.file;
    
    if (!name || !email || !file) {
      // Clean up uploaded file if validation fails
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      return res.status(400).json({ error: 'Name, email, and CV file are required' });
    }
    
    // Send email notification (if Resend is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = require('./lib/resend');
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        
        // Read file for attachment
        const fileBuffer = fs.readFileSync(file.path);
        
        const emailData = {
          from: fromEmail,
          to: process.env.RESEND_CONTACT_EMAIL || 'info@tallerbrico.es',
          replyTo: email,
          subject: `Nueva solicitud de empleo: ${position || 'General'}`,
          html: `
            <h2>Nueva solicitud de empleo</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Posición:</strong> ${position || 'General'}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message ? message.replace(/\n/g, '<br>') : 'No hay mensaje'}</p>
            <p><strong>CV adjunto:</strong> ${file.originalname}</p>
          `,
          attachments: [
            {
              filename: file.originalname,
              content: fileBuffer,
            }
          ]
        };
        
        const result = await resend.emails.send(emailData);
        console.log(`✅ CV submission email sent`, result);
        
        // Clean up uploaded file after sending email
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      } catch (emailError) {
        console.error('❌ Error sending CV email:', emailError);
        // Clean up uploaded file on error
        if (file && fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      }
    } else {
      console.warn('⚠️  RESEND_API_KEY not configured - skipping email');
      // Clean up uploaded file if email not configured
      if (file && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    }
    
    res.json({ success: true, message: 'CV submitted successfully' });
  } catch (error) {
    console.error('Error processing CV submission:', error);
    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: 'Failed to submit CV' });
  }
});

// Serve index.html for all other routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${process.env.DATABASE_URL ? 'Connected' : 'Not configured'}`);
  console.log(`📧 Email: ${process.env.RESEND_API_KEY ? 'Configured' : 'Not configured'}`);
});
