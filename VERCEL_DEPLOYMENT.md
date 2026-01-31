# HazloPro - Vercel Deployment Guide

## 🌐 Live URLs

- **Frontend**: https://hazlopro-dev.vercel.app/index.html
- **Admin Portal**: https://hazlopro-dev.vercel.app/admin

## 🔐 Admin Login Credentials

```
Email: admin@hazlopro.es
Wachtwoord: Admin123!
```

## 📱 Wat werkt nu

### Frontend (/index.html)
- ✅ Originele HazloPro website (volledig werkend)
- ✅ Single-page application met routing
- ✅ Meertalig (Spaans/Engels)
- ✅ Workshops overzicht met filters
- ✅ Workshop detail pagina's
- ✅ Inschrijfformulier
- ✅ Over Ons pagina
- ✅ Vacatures pagina
- ✅ Contact formulier
- ✅ Responsive design

### Admin Portal (/admin)
- ✅ Login pagina
- ✅ Dashboard met statistieken
- ✅ Workshops beheer (CRUD)
- ✅ Bookings overzicht
- ✅ Calendar view
- ✅ Instructors beheer
- ✅ Contacts beheer
- ✅ Users management
- ✅ Settings pagina

## 🔧 Hoe het werkt

De applicatie combineert:
1. **Static Frontend**: Originele HTML/CSS/JS website in `public/` folder
2. **Next.js Admin**: Server-side rendered admin portal in `app/admin/`
3. **API Routes**: Backend API's voor admin functionaliteit in `app/api/`

De root `/` redirect naar `/index.html` waar de originele website staat.

## 🚀 Lokaal Testen

```bash
# Start development server
npm run dev

# URLs:
Frontend: http://localhost:3000/index.html
Admin: http://localhost:3000/admin
```

## 🐛 Troubleshooting

### Zie je nog "TallerPro"?
- Dit is een cache probleem
- Doe een hard refresh: `Ctrl + Shift + R` (Windows) of `Cmd + Shift + R` (Mac)

### Frontend niet zichtbaar?
- Ga naar `/index.html` niet naar `/`
- De root `/` redirect naar `/index.html`

### Admin login werkt niet?
- Email: `admin@hazlopro.es`
- Wachtwoord: `Admin123!` (let op hoofdletters en uitroepteken!)
