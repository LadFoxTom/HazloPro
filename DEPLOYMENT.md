# 🚀 Deployment Guide

## ✅ Database Setup Voltooid!

De database is succesvol opgezet:
- ✅ Prisma schema gepusht naar Neon.tech database
- ✅ 12 workshops geseed in de database
- ✅ Backend API server klaar

## 📋 Quick Start

### 1. Start de Server

```bash
npm run dev
```

De server draait op: **http://localhost:3001**

### 2. Test de API

Open in je browser:
- **Workshops**: http://localhost:3001/api/workshops
- **Categories**: http://localhost:3001/api/categories

### 3. Frontend Gebruik

De frontend (`index.html`) maakt automatisch API calls naar:
- Lokaal: `http://localhost:3001/api`
- Productie: `/api` (relatief pad)

## 🔧 Database Commands

```bash
# Push schema naar database
npm run db:push

# Seed database met workshops
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio

# Genereer Prisma Client
npm run db:generate
```

## 📧 Email Setup (Optioneel)

Voeg toe aan `.env.local`:
```env
RESEND_API_KEY="re_xxxxxxxxxx"
RESEND_FROM_EMAIL="reservas@tallerbrico.es"
```

Zonder Resend API key werkt de website nog steeds, maar worden er geen emails verzonden.

## 🌐 Productie Deployment

### Vercel (Aanbevolen)

1. Push code naar GitHub
2. Import project in Vercel
3. Voeg environment variables toe:
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `RESEND_API_KEY` (optioneel)
4. Deploy!

### Andere Platforms

Zorg dat:
- Node.js 18+ beschikbaar is
- Environment variables zijn ingesteld
- Database connectie werkt
- Static files worden geserveerd

## 🐛 Troubleshooting

### Server start niet
- Check of poort 3001 vrij is
- Check of DATABASE_URL correct is

### Database errors
- Check DATABASE_URL en DIRECT_URL in .env.local
- Run `npm run db:push` opnieuw

### API errors
- Check server logs
- Test database connectie met `npm run db:studio`

## 📊 Database Schema

- **Workshop** - Workshop informatie
- **WorkshopDate** - Beschikbare datums
- **Booking** - Inschrijvingen
- **Contact** - Contact formulier submissions
