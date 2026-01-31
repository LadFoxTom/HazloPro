# 🚀 HazloPro Database Setup Guide

## Stap 1: Installeer Dependencies

```bash
npm install
```

## Stap 2: Setup Database

### 2.1 Genereer Prisma Client

```bash
npm run db:generate
```

### 2.2 Push Schema naar Database

Dit creëert alle tabellen in je Neon.tech database:

```bash
npm run db:push
```

### 2.3 Seed Database met Workshops

Dit vult de database met alle workshops:

```bash
npm run db:seed
```

## Stap 3: Start de Server

```bash
npm run dev
```

De server draait nu op: **http://localhost:3001**

## Stap 4: Test de API

Open in je browser:
- **API Workshops**: http://localhost:3001/api/workshops
- **API Categories**: http://localhost:3001/api/categories

## Stap 5: Update Frontend

De frontend (index.html) moet nu naar de API server wijzen. De `app.js` is al geconfigureerd om automatisch te detecteren of je lokaal draait.

## 📧 Email Setup (Optioneel)

Als je emails wilt verzenden:

1. Maak account op https://resend.com
2. Maak een API key aan
3. Voeg toe aan `.env.local`:
   ```
   RESEND_API_KEY="re_xxxxxxxxxx"
   RESEND_FROM_EMAIL="reservas@tallerbrico.es"
   ```

## ✅ Database Commands

```bash
# Genereer Prisma Client
npm run db:generate

# Push schema naar database
npm run db:push

# Seed database
npm run db:seed

# Open Prisma Studio (database GUI)
npm run db:studio
```

## 🔍 Database Schema

De database bevat:
- **Workshop** - Workshop informatie
- **WorkshopDate** - Beschikbare data voor workshops
- **Booking** - Inschrijvingen
- **Contact** - Contact formulier submissions

## 🐛 Troubleshooting

### Database Connection Error
- Controleer of `DATABASE_URL` correct is in `.env.local`
- Zorg dat je Neon.tech database actief is
- Check of `DIRECT_URL` is ingesteld (voor migrations)

### Prisma Client Error
- Run `npm run db:generate` opnieuw
- Verwijder `node_modules/.prisma` en run opnieuw

### Port Already in Use
- Verander `PORT` in `.env.local` of `server.js`
- Of stop de andere service op poort 3001
