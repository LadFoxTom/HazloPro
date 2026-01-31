# HazloPro - Technical Specification

## 📋 Project Overview

**Name:** HazloPro  
**Purpose:** Workshop platform for DIY/construction workshops in Spain  
**Languages:** Spanish (primary), English (secondary)  
**Target Audience:** Individuals and businesses

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.x | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| Lucide React | latest | Icons |
| React Hook Form | 7.x | Form handling |
| Zod | 3.x | Schema validation |
| date-fns | 3.x | Date formatting |

### Backend & Database
| Technology | Purpose |
|------------|---------|
| **Neon.tech** | PostgreSQL database (serverless) |
| **Prisma** | ORM for database queries |
| **Next.js API Routes** | Backend endpoints |

### Email & Communication
| Technology | Purpose |
|------------|---------|
| **Resend** | Transactional emails |
| **React Email** | Email templates |

### Deployment & CI/CD
| Technology | Purpose |
|------------|---------|
| **Vercel** | Hosting & deployment |
| **GitHub** | Version control |
| **GitHub Actions** | CI/CD pipelines |

### Payments (Future)
| Technology | Purpose |
|------------|---------|
| **Stripe** | International payments |
| **Redsys** | Spanish banks (optional) |

---

## 📁 Project Structure

```
tallerbrico/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── sobre-nosotros/
│   │   │   └── page.tsx             # About page
│   │   ├── contacto/
│   │   │   └── page.tsx             # Contact page
│   │   └── trabaja-con-nosotros/
│   │       └── page.tsx             # Vacancies page
│   │
│   ├── talleres/
│   │   ├── page.tsx                 # Workshops overview (with filters)
│   │   └── [slug]/
│   │       ├── page.tsx             # Workshop detail page
│   │       └── inscripcion/
│   │           └── page.tsx         # Sign-up form
│   │
│   ├── confirmacion/
│   │   └── page.tsx                 # Confirmation page
│   │
│   ├── api/
│   │   ├── workshops/
│   │   │   ├── route.ts             # GET all workshops
│   │   │   └── [id]/
│   │   │       └── route.ts         # GET single workshop
│   │   ├── bookings/
│   │   │   └── route.ts             # POST create booking
│   │   ├── contact/
│   │   │   └── route.ts             # POST contact form
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts         # Stripe webhooks
│   │
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
│
├── components/
│   ├── ui/                          # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── calendar.tsx
│   │
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── mobile-menu.tsx
│   │   └── language-switcher.tsx
│   │
│   ├── workshops/
│   │   ├── workshop-card.tsx
│   │   ├── workshop-grid.tsx
│   │   ├── workshop-filters.tsx
│   │   ├── date-selector.tsx
│   │   └── booking-sidebar.tsx
│   │
│   └── forms/
│       ├── signup-form.tsx
│       └── contact-form.tsx
│
├── lib/
│   ├── db.ts                        # Prisma client
│   ├── resend.ts                    # Resend client
│   ├── validations/
│   │   ├── booking.ts               # Booking schema
│   │   └── contact.ts               # Contact schema
│   └── utils.ts                     # Utility functions
│
├── emails/
│   ├── booking-confirmation.tsx     # Booking confirmation email
│   ├── booking-reminder.tsx         # Reminder email
│   └── contact-received.tsx         # Contact form email
│
├── prisma/
│   ├── schema.prisma                # Database schema
│   └── seed.ts                      # Seed data
│
├── public/
│   ├── images/
│   └── fonts/
│
├── i18n/
│   ├── es.json                      # Spanish translations
│   └── en.json                      # English translations
│
├── .env.local                       # Environment variables
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🗄️ Database Schema (Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Workshop {
  id          String   @id @default(cuid())
  slug        String   @unique
  
  // Spanish content
  title       String
  description String
  fullDescription String @db.Text
  
  // English content
  titleEn     String
  descriptionEn String
  fullDescriptionEn String @db.Text
  
  // Details
  price       Decimal  @db.Decimal(10, 2)
  lessons     Int
  duration    String   // e.g., "18 hours"
  level       Level
  category    Category
  location    String
  imageUrl    String
  
  // Flags
  isPopular   Boolean  @default(false)
  isActive    Boolean  @default(true)
  
  // Relations
  dates       WorkshopDate[]
  bookings    Booking[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model WorkshopDate {
  id          String   @id @default(cuid())
  workshopId  String
  workshop    Workshop @relation(fields: [workshopId], references: [id], onDelete: Cascade)
  
  date        DateTime
  maxSpots    Int      @default(10)
  bookedSpots Int      @default(0)
  
  bookings    Booking[]
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([workshopId, date])
}

model Booking {
  id              String   @id @default(cuid())
  bookingNumber   String   @unique @default(cuid())
  
  // Workshop info
  workshopId      String
  workshop        Workshop @relation(fields: [workshopId], references: [id])
  workshopDateId  String
  workshopDate    WorkshopDate @relation(fields: [workshopDateId], references: [id])
  
  // Personal info
  firstName       String
  lastName        String
  email           String
  phone           String
  birthdate       DateTime
  
  // Address
  street          String
  city            String
  postalCode      String
  
  // Company info (optional)
  isCompany       Boolean  @default(false)
  companyName     String?
  companyCif      String?
  companyAddress  String?
  
  // Additional
  comments        String?  @db.Text
  
  // Status
  status          BookingStatus @default(PENDING)
  paymentStatus   PaymentStatus @default(UNPAID)
  
  // Payment
  paymentIntentId String?
  paidAt          DateTime?
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  @@index([email])
  @@index([workshopId])
}

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String   @db.Text
  isRead    Boolean  @default(false)
  createdAt DateTime @default(now())
}

enum Level {
  APRENDE     // Learn - Beginners
  CONSTRUYE   // Build - Intermediate
  DOMINA      // Master - Advanced
  TODOS       // All levels
}

enum Category {
  FONTANERIA    // Plumbing
  ELECTRICIDAD  // Electrical
  ALICATADO     // Tiling
  CARPINTERIA   // Carpentry
  PINTURA       // Painting
  ESTUCADO      // Plastering
  ALBANILERIA   // Masonry
  BRICOLAJE     // DIY
  SOLDADURA     // Welding
  SUELOS        // Flooring
  CLIMATIZACION // HVAC
}

enum BookingStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}

enum PaymentStatus {
  UNPAID
  PAID
  REFUNDED
}
```

---

## 📧 Email Templates (Resend + React Email)

### Booking Confirmation Email

```tsx
// emails/booking-confirmation.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface BookingConfirmationProps {
  firstName: string;
  workshopTitle: string;
  workshopDate: string;
  location: string;
  price: number;
  bookingNumber: string;
}

export default function BookingConfirmation({
  firstName,
  workshopTitle,
  workshopDate,
  location,
  price,
  bookingNumber,
}: BookingConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Your registration for {workshopTitle} has been confirmed</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={logoSection}>
            <Img
              src="https://tallerbrico.es/logo.png"
              width="120"
              height="40"
              alt="HazloPro"
            />
          </Section>

          {/* Header */}
          <Heading style={heading}>
            Hello {firstName}!
          </Heading>

          <Text style={text}>
            Your registration has been received successfully. Below you will
            find the details of your booking.
          </Text>

          {/* Booking Details */}
          <Section style={detailsBox}>
            <Text style={detailsTitle}>Booking Details</Text>
            <Text style={detailsItem}>
              <strong>Course:</strong> {workshopTitle}
            </Text>
            <Text style={detailsItem}>
              <strong>Date:</strong> {workshopDate}
            </Text>
            <Text style={detailsItem}>
              <strong>Location:</strong> {location}
            </Text>
            <Text style={detailsItem}>
              <strong>Price:</strong> €{price}
            </Text>
            <Text style={detailsItem}>
              <strong>Booking No.:</strong> {bookingNumber}
            </Text>
          </Section>

          {/* Next Steps */}
          <Text style={text}>
            <strong>Next steps:</strong>
          </Text>
          <Text style={text}>
            1. You will receive the invoice by email shortly
          </Text>
          <Text style={text}>
            2. Complete payment within the next 7 days
          </Text>
          <Text style={text}>
            3. You will receive detailed information 3 days before the course
          </Text>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Have any questions?{' '}
              <Link href="mailto:info@tallerbrico.es" style={link}>
                Contact us
              </Link>
            </Text>
            <Text style={footerText}>
              © 2026 HazloPro. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const heading = {
  color: '#2d7a7a',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const text = {
  color: '#2c3e50',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
};

const detailsBox = {
  backgroundColor: '#f8fafa',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '24px',
};

const detailsTitle = {
  color: '#2d7a7a',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const detailsItem = {
  color: '#2c3e50',
  fontSize: '14px',
  marginBottom: '8px',
};

const footer = {
  borderTop: '1px solid #e1e8ed',
  marginTop: '32px',
  paddingTop: '24px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#6b7c8a',
  fontSize: '12px',
  marginBottom: '8px',
};

const link = {
  color: '#2d7a7a',
};
```

---

## 🔌 API Routes

### POST /api/bookings

```typescript
// app/api/bookings/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { resend } from '@/lib/resend';
import BookingConfirmation from '@/emails/booking-confirmation';

const bookingSchema = z.object({
  workshopId: z.string(),
  workshopDateId: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(9),
  birthdate: z.string(),
  street: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(5),
  isCompany: z.boolean().default(false),
  companyName: z.string().optional(),
  companyCif: z.string().optional(),
  companyAddress: z.string().optional(),
  comments: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    // Check if spots are available
    const workshopDate = await prisma.workshopDate.findUnique({
      where: { id: data.workshopDateId },
      include: { workshop: true },
    });

    if (!workshopDate) {
      return NextResponse.json(
        { error: 'Workshop date not found' },
        { status: 404 }
      );
    }

    const availableSpots = workshopDate.maxSpots - workshopDate.bookedSpots;
    if (availableSpots <= 0) {
      return NextResponse.json(
        { error: 'No spots available' },
        { status: 400 }
      );
    }

    // Create booking in transaction
    const booking = await prisma.$transaction(async (tx) => {
      // Update booked spots
      await tx.workshopDate.update({
        where: { id: data.workshopDateId },
        data: { bookedSpots: { increment: 1 } },
      });

      // Create booking
      return tx.booking.create({
        data: {
          workshopId: data.workshopId,
          workshopDateId: data.workshopDateId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          birthdate: new Date(data.birthdate),
          street: data.street,
          city: data.city,
          postalCode: data.postalCode,
          isCompany: data.isCompany,
          companyName: data.companyName,
          companyCif: data.companyCif,
          companyAddress: data.companyAddress,
          comments: data.comments,
        },
      });
    });

    // Send confirmation email
    await resend.emails.send({
      from: 'HazloPro <reservas@tallerbrico.es>',
      to: data.email,
      subject: `Registration Confirmation - ${workshopDate.workshop.title}`,
      react: BookingConfirmation({
        firstName: data.firstName,
        workshopTitle: workshopDate.workshop.title,
        workshopDate: workshopDate.date.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        location: workshopDate.workshop.location,
        price: Number(workshopDate.workshop.price),
        bookingNumber: booking.bookingNumber,
      }),
    });

    return NextResponse.json({ 
      success: true, 
      bookingNumber: booking.bookingNumber 
    });

  } catch (error) {
    console.error('Booking error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## 🌐 Internationalization (i18n)

### Setup with next-intl

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed', // Only add prefix for non-default locale
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### Translation Files

```json
// i18n/es.json
{
  "nav": {
    "workshops": "Talleres",
    "about": "Sobre Nosotros",
    "vacancies": "Trabaja con Nosotros",
    "contact": "Contacto"
  },
  "hero": {
    "title": "Aprende un oficio con tus propias manos",
    "subtitle": "Cursos prácticos de bricolaje y construcción impartidos por profesionales con años de experiencia",
    "cta": "Ver todos los cursos"
  }
  // ... more translations
}
```

```json
// i18n/en.json
{
  "nav": {
    "workshops": "Workshops",
    "about": "About Us",
    "vacancies": "Careers",
    "contact": "Contact"
  },
  "hero": {
    "title": "Learn a trade with your own hands",
    "subtitle": "Practical DIY and construction courses taught by professionals with years of experience",
    "cta": "View all courses"
  }
  // ... more translations
}
```

---

## 🚀 Deployment (Vercel)

### Environment Variables

```env
# .env.local

# Database (Neon)
DATABASE_URL="postgresql://user:password@ep-xxx.eu-central-1.aws.neon.tech/tallerbrico?sslmode=require"
DIRECT_URL="postgresql://user:password@ep-xxx.eu-central-1.aws.neon.tech/tallerbrico?sslmode=require"

# Resend
RESEND_API_KEY="re_xxxxxxxxxx"

# App
NEXT_PUBLIC_APP_URL="https://tallerbrico.es"

# Stripe (future)
STRIPE_SECRET_KEY="sk_live_xxxxxxxxxx"
STRIPE_WEBHOOK_SECRET="whsec_xxxxxxxxxx"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_xxxxxxxxxx"
```

### vercel.json

```json
{
  "buildCommand": "prisma generate && next build",
  "framework": "nextjs",
  "regions": ["cdg1"]
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Use Case |
|------------|-------|----------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large screens |

---

## ✅ Implementation Checklist

### Phase 1: MVP (Week 1-2)
- [ ] Project setup (Next.js, Tailwind, TypeScript)
- [ ] Database setup (Neon + Prisma)
- [ ] Homepage
- [ ] Workshop overview page with filters
- [ ] Workshop detail page
- [ ] Booking form
- [ ] Confirmation page
- [ ] Email integration (Resend)
- [ ] Deploy to Vercel

### Phase 2: Enhancements (Week 3-4)
- [ ] About page
- [ ] Contact page with form
- [ ] Vacancies page
- [ ] Language switcher (ES/EN)
- [ ] Mobile optimization
- [ ] SEO meta tags
- [ ] Sitemap generation

### Phase 3: Admin & Payments (Week 5-6)
- [ ] Admin dashboard
- [ ] Workshop management CRUD
- [ ] Booking management
- [ ] Stripe payment integration
- [ ] Invoice generation
- [ ] Email reminders (3 days before course)

### Phase 4: Growth (Week 7+)
- [ ] Review system
- [ ] Gift cards
- [ ] Newsletter integration
- [ ] Google Analytics
- [ ] Social media login
- [ ] Referral program

---

## 🔒 Security Considerations

1. **Input Validation**: All inputs validated with Zod
2. **SQL Injection**: Prevented by Prisma ORM
3. **XSS**: React auto-escapes content
4. **CSRF**: Next.js built-in protection
5. **Rate Limiting**: Implement on API routes
6. **Data Privacy**: GDPR/LOPD compliant forms
7. **SSL**: Enforced by Vercel

---

## 📊 Analytics Events to Track

```typescript
// lib/analytics.ts
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  // Google Analytics / Plausible / etc.
};

// Events to track:
// - page_view
// - workshop_viewed
// - date_selected
// - booking_started
// - booking_completed
// - contact_form_submitted
// - language_changed
// - filter_applied
```

---

## 💰 Cost Estimation (Monthly)

| Service | Free Tier | Paid Estimate |
|---------|-----------|---------------|
| Vercel | Hobby (free) | Pro €20/mo |
| Neon | 0.5GB free | €19/mo (10GB) |
| Resend | 3,000 emails/mo | €20/mo |
| Domain | - | €15/year |
| **Total** | **~€0** | **~€60/mo** |

---

## 📞 Support & Maintenance

- **Monitoring**: Vercel Analytics + Sentry
- **Backups**: Neon automatic daily backups
- **Updates**: Monthly dependency updates
- **Support**: Contact form + WhatsApp integration

---

## 🗂️ Page Structure Summary

### Homepage
| Section | Description |
|---------|-------------|
| Header | Logo (left) + Navigation + Language switcher (right) |
| Hero | 60/40 split: Info + CTA (left), 2x2 Popular grid (right) |
| Other Courses | 4-column grid with 8 workshop cards |
| CTA Button | "View all courses" → links to workshops page |
| Trust Section | Statistics (students, courses, rating, locations) |
| Footer | Brand info, quick links, contact, social media |

### Workshop Card
| Element | Description |
|---------|-------------|
| Image | Top, with hover zoom effect |
| Badge | Level indicator (top right) |
| Popular Badge | Orange star badge (if applicable) |
| Title | Workshop name |
| Description | 2-line truncated description |
| Info Table | 3 columns: Price / Lessons / Location |
| Button | "View course" with arrow |

### Workshop Detail Page
| Section | Description |
|---------|-------------|
| Breadcrumb | Home > Workshops > [Course name] |
| Hero Image | Full-width course image |
| Badges | Level + Location |
| Title | Course name |
| Description | Full description |
| Info Cards | Price, Duration, Lessons, Group size |
| Includes | Checklist of what's included |
| Sidebar (sticky) | Date selector + booking button |

### Sign-up Form
| Section | Fields |
|---------|--------|
| Course Summary | Image, title, date, location, price |
| Personal Data | First name, Last name, Email (x2), Phone, Birthdate |
| Address | Street, City, Postal code |
| Company (optional) | Company name, Tax ID, Billing address |
| Comments | Text area |
| Terms | Checkbox with payment obligation notice |
| Submit | "Confirm registration" button |

### Confirmation Page
| Element | Description |
|---------|-------------|
| Success Icon | Green checkmark |
| Title | "Registration confirmed!" |
| Email Notice | Confirmation sent to [email] |
| Next Steps | Numbered list of what happens next |
| Button | "Back to home" |

---

*Document version: 1.0*  
*Last updated: January 2026*
