# HazloPro - Quick Start

## 🌐 Live URLs

- **Frontend**: https://hazlopro-dev.vercel.app
- **Admin Portal**: https://hazlopro-dev.vercel.app/admin

## 🔐 Admin Login Credentials

```
Email: admin@hazlopro.es
Wachtwoord: Admin123!
```

## 📱 Wat werkt nu

### Frontend (/)
- ✅ Homepage met hero section
- ✅ Features sectie
- ✅ "Coming Soon" voor workshops
- ✅ Footer met contactinformatie
- ✅ Link naar admin portal

### Admin Portal (/admin)
- ✅ Login pagina
- ✅ Dashboard met statistieken
- ✅ Workshops beheer
- ✅ Bookings overzicht
- ✅ Calendar view
- ✅ Instructors beheer
- ✅ Contacts beheer
- ✅ Users management
- ✅ Settings

## 🚀 Volgende Stappen

1. **Test de admin portal**
   - Log in met bovenstaande credentials
   - Maak test workshops aan
   - Voeg instructors toe
   - Test de calendar view

2. **Database setup**
   - Database draait op Neon.tech
   - Environment variabelen zijn ingesteld in Vercel
   - Seed data kan worden toegevoegd via admin portal

3. **Frontend workshops pagina**
   - Momenteel toont homepage "Coming Soon"
   - Workshops worden dynamisch geladen uit database
   - Kan later worden uitgebreid met volledige workshop catalogus

## 🔧 Development

```bash
# Local development
npm run dev

# Access locally
Frontend: http://localhost:3000
Admin: http://localhost:3000/admin
```

## 📝 Notities

- Vercel kan oude cached versies tonen - hard refresh (Ctrl+Shift+R) als je "TallerPro" ziet
- Alle admin pagina's zijn nu "HazloPro" gebranded
- Frontend is volledig responsive
