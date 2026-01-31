# HazloPro - Workshop Platform

Functionele website voor een bedrijf dat workshops aanbiedt gefocust op alles wat met klussen te maken heeft.

## 🚀 Quick Start

### Lokale ontwikkeling

1. **Open de website**
   ```bash
   # Start een lokale server (bijvoorbeeld met Python)
   python -m http.server 3000
   
   # Of met Node.js serve
   npx serve . -p 3000
   ```

2. **Open in browser**
   - Ga naar: http://localhost:3000

## 📁 Project Structuur

```
workshopSpanje/
├── index.html          # Hoofdpagina met alle pagina's
├── styles.css          # Complete CSS styling
├── app.js             # JavaScript functionaliteit
├── .env.local         # Environment variables (API keys)
├── .gitignore         # Git ignore bestand
├── img/               # Workshop afbeeldingen
└── design-lookandfeel/ # Design referenties
```

## 🔑 API Keys Setup

### Huidige Status
De website is momenteel **statisch** (frontend only) en heeft **geen API keys nodig** om te werken.

### Toekomstige Backend Functionaliteit
Wanneer je backend functionaliteit toevoegt, heb je de volgende services nodig:

#### 1. Database (Neon.tech)
- **Waarom**: Opslag van workshops, boekingen, gebruikers
- **Hoe**: 
  1. Maak account op https://neon.tech
  2. Maak nieuw project aan
  3. Kopieer connection string naar `.env.local`

#### 2. Email Service (Resend)
- **Waarom**: Bevestigingsemails, facturen, herinneringen
- **Hoe**:
  1. Maak account op https://resend.com
  2. Ga naar API Keys
  3. Maak nieuwe key aan
  4. Kopieer naar `.env.local`

#### 3. Payment Processing (Stripe) - Optioneel
- **Waarom**: Online betalingen voor workshops
- **Hoe**:
  1. Maak account op https://stripe.com
  2. Ga naar Developers > API keys
  3. Gebruik test keys voor development
  4. Kopieer naar `.env.local`

## 📝 Environment Variables

Kopieer `.env.local` en vul de waarden in:

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Email
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="reservas@tallerbrico.es"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Payments (optioneel)
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

## 🌍 Features

- ✅ **Meertalig** - Spaans (ES) en Engels (EN)
- ✅ **Mobile Responsive** - Werkt op alle apparaten
- ✅ **Workshop Overzicht** - Met filters (categorie, niveau, locatie)
- ✅ **Workshop Details** - Met datum selectie
- ✅ **Inschrijfformulier** - Compleet met bedrijfsopties
- ✅ **Contact Pagina** - Met contactformulier
- ✅ **Over Ons** - Missie en waarden
- ✅ **Vacatures** - Open posities

## 🎨 Design

De website volgt het design uit `design-lookandfeel/react-app.js`:
- Groen kleurenpalet (#3E5C43, #558B55)
- DM Serif Display voor titels
- Inter voor body tekst
- Clean, moderne UI

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security

- **NOOIT** commit `.env.local` naar Git
- Gebruik verschillende keys voor development en productie
- Test keys voor development, live keys alleen voor productie

## 📞 Support

Voor vragen over de implementatie, zie `TECHNICAL_SPEC_EN.md` voor volledige technische specificaties.
