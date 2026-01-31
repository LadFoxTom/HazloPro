# 🔑 Environment Variables Setup

## Vereiste Variabelen

Voeg deze toe aan je `.env.local` bestand:

```env
# Database (Neon.tech)
DATABASE_URL="postgresql://neondb_owner:npg_QWbKofmO8CF9@ep-empty-frost-agrhhk4m-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# DIRECT_URL is hetzelfde als DATABASE_URL maar zonder "-pooler" in de hostname
# Voor Neon.tech: vervang "-pooler" met een lege string of gebruik de direct connection string
DIRECT_URL="postgresql://neondb_owner:npg_QWbKofmO8CF9@ep-empty-frost-agrhhk4m.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
```

## DIRECT_URL uitleg

Voor Neon.tech databases:
- **DATABASE_URL**: Gebruikt de pooler (eindigt op `-pooler`)
- **DIRECT_URL**: Directe connectie (zonder `-pooler`)

Als je DIRECT_URL niet hebt, kun je hetzelfde als DATABASE_URL gebruiken, maar vervang `-pooler` met een lege string in de hostname.

## Optionele Variabelen

```env
# Email Service (Resend) - Optioneel
RESEND_API_KEY="re_xxxxxxxxxx"
RESEND_FROM_EMAIL="reservas@tallerbrico.es"

# Server Port
PORT=3001
```

## Quick Fix

Als je DIRECT_URL niet hebt, voeg deze regel toe aan `.env.local`:

```env
DIRECT_URL="postgresql://neondb_owner:npg_QWbKofmO8CF9@ep-empty-frost-agrhhk4m.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
```

**Let op**: Vervang `-pooler` met een lege string in de hostname van je DATABASE_URL.
