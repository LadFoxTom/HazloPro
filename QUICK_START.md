# 🚀 Quick Start Guide

## Server Starten

### Optie 1: Normale start
```bash
npm run dev
```

### Optie 2: Als poort 3001 bezet is
```powershell
# Stop het proces op poort 3001
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Start dan opnieuw
npm run dev
```

### Optie 3: Gebruik PowerShell script
```powershell
.\scripts\start-server.ps1
```

## Server URL's

- **API Server**: http://localhost:3001
- **API Workshops**: http://localhost:3001/api/workshops
- **API Categories**: http://localhost:3001/api/categories

## Frontend Gebruik

De frontend (`index.html`) maakt automatisch API calls naar de server.

Je kunt de frontend op twee manieren gebruiken:

### Optie 1: Via Express server (aanbevolen)
De Express server serveert ook de static files. Open:
- http://localhost:3001

### Optie 2: Aparte static server
```bash
# In een andere terminal
npx serve . -p 3000
```
Open dan: http://localhost:3000

## Troubleshooting

### Poort 3001 al in gebruik
```powershell
# Vind het proces
netstat -ano | findstr :3001

# Stop het proces (vervang <PID> met het nummer)
taskkill /PID <PID> /F
```

### Database errors
- Check of DATABASE_URL en DIRECT_URL correct zijn in `.env.local`
- Run `npm run db:push` opnieuw

### API werkt niet
- Check of de server draait: http://localhost:3001/api/workshops
- Check server logs voor errors
