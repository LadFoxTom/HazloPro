# 🚀 Server Management Gids

## Quick Start

### Optie 1: Direct met npm (eenvoudig)
```bash
# Start de server
npm run dev

# Stop met Ctrl+C in de terminal
```

### Optie 2: Met management script (handig)
```powershell
# Start server
.\scripts\manage-server.ps1 start

# Stop server
.\scripts\manage-server.ps1 stop

# Restart server
.\scripts\manage-server.ps1 restart

# Check status
.\scripts\manage-server.ps1 status
```

---

## 🔧 Problemen Oplossen

### ❌ Fout: "EADDRINUSE: address already in use :::3001"

**Probleem:** De poort 3001 is al in gebruik.

**Oplossingen:**

#### Optie A: Stop met script (Makkelijkst)
```powershell
.\scripts\manage-server.ps1 stop
```

#### Optie B: Stop handmatig
```powershell
# Vind en stop alle Node processen
Get-Process node | Stop-Process -Force
```

#### Optie C: Stop specifiek proces op poort 3001
```powershell
# Vind het proces
Get-NetTCPConnection -LocalPort 3001 | Select-Object -ExpandProperty OwningProcess

# Stop het proces (vervang XXXX met het proces ID)
Stop-Process -Id XXXX -Force
```

---

## 📋 Verschillende Manieren om de Server te Runnen

### 1. **Foreground (Standaard)**
```bash
npm run dev
```
- ✅ Je ziet direct alle logs
- ✅ Makkelijk te stoppen (Ctrl+C)
- ❌ Terminal blijft bezet
- ❌ Stopt als je terminal sluit

### 2. **Background met PowerShell**
```powershell
# Start in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd C:\workshopSpanje; npm run dev" -WindowStyle Minimized

# Of met het script:
.\scripts\manage-server.ps1 start &
```
- ✅ Terminal blijft vrij
- ❌ Moeilijker te monitoren
- ❌ Moet handmatig gestopt worden

### 3. **Met nodemon (Auto-restart bij wijzigingen)**
```bash
# Installeer nodemon (eenmalig)
npm install -g nodemon

# Start met nodemon
nodemon server.js
```
- ✅ Automatisch restart bij code wijzigingen
- ✅ Ideaal voor development
- ✅ Makkelijk te stoppen (Ctrl+C)

---

## 🔍 Server Monitoring

### Check of server draait
```powershell
# Met script
.\scripts\manage-server.ps1 status

# Handmatig
Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
```

### Check logs
Als de server in foreground draait, zie je logs direct in de terminal.

Voor background processen:
```powershell
# Vind het proces
$process = Get-Process node | Where-Object { $_.MainWindowTitle -match 'node' }
$process | Format-List *
```

### Test of server reageert
```powershell
# Test homepage
Invoke-WebRequest -Uri "http://localhost:3001" -UseBasicParsing

# Test API
Invoke-WebRequest -Uri "http://localhost:3001/api/workshops" -UseBasicParsing
```

---

## 🐛 Debug Mode

Start de server met extra logging:
```bash
# Met debug output
$env:DEBUG="*"; npm run dev

# Met Prisma query logging
$env:DEBUG="prisma:*"; npm run dev
```

---

## 🔄 Development Workflow

### Normale workflow (zonder auto-restart):
```bash
# 1. Start server
npm run dev

# 2. Maak wijzigingen in code
# 3. Stop server (Ctrl+C)
# 4. Start opnieuw
npm run dev
```

### Met nodemon (auto-restart):
```bash
# Eenmalig installeren
npm install -D nodemon

# Add script to package.json:
# "dev:watch": "nodemon server.js"

# Dan gebruik je:
npm run dev:watch

# Nu restart de server automatisch bij elke wijziging!
```

---

## 🚨 Emergency Stop

Als niets anders werkt:

```powershell
# Nuclear option: stop ALLE Node processen
Get-Process node | Stop-Process -Force

# Of alleen processen die poort 3001 gebruiken
Get-NetTCPConnection -LocalPort 3001 | ForEach-Object { 
    Stop-Process -Id $_.OwningProcess -Force 
}
```

---

## 💡 Tips

### 1. **Gebruik een aparte terminal voor de server**
Open twee PowerShell terminals:
- Terminal 1: Voor de server (`npm run dev`)
- Terminal 2: Voor andere commando's (git, npm install, etc.)

### 2. **Add alias voor snel stoppen**
Voeg toe aan je PowerShell profile:
```powershell
# Open profile
notepad $PROFILE

# Voeg toe:
function Stop-DevServer { 
    Get-Process node | Stop-Process -Force 
}
Set-Alias -Name kn -Value Stop-DevServer

# Nu kun je typen: kn (kill node)
```

### 3. **Check status in browser**
Bookmark deze URLs:
- Homepage: http://localhost:3001
- API Status: http://localhost:3001/api/workshops
- Health check: http://localhost:3001/

### 4. **Gebruik het management script**
Het is speciaal gemaakt om het makkelijk te maken:
```powershell
# Maak een alias
Set-Alias -Name server -Value "C:\workshopSpanje\scripts\manage-server.ps1"

# Nu kun je typen:
server start
server stop
server restart
server status
```

---

## 📖 Veelgebruikte Commando's

```powershell
# Start
npm run dev

# Stop (in dezelfde terminal)
Ctrl+C

# Stop (vanuit andere terminal)
.\scripts\manage-server.ps1 stop

# Restart
.\scripts\manage-server.ps1 restart

# Status check
.\scripts\manage-server.ps1 status

# Test API
curl http://localhost:3001/api/workshops
```

---

## 🆘 Hulp Nodig?

Zie ook:
- `README.md` - Algemene project info
- `QUICK_START.md` - Snelle start gids
- `DEBUG.md` - Debug instructies
- `DEPLOYMENT.md` - Deployment info

---

*Laatste update: 30 Januari 2026*
