# scripts/start-server.ps1
# PowerShell script om server te starten en oude processen te stoppen

Write-Host "🔍 Checking for existing server on port 3001..." -ForegroundColor Yellow

# Find process using port 3001
$port = Get-NetTCPConnection -LocalPort 3001 -ErrorAction SilentlyContinue
if ($port) {
    $pid = $port.OwningProcess
    Write-Host "⚠️  Found process $pid using port 3001. Stopping..." -ForegroundColor Yellow
    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
}

Write-Host "🚀 Starting server..." -ForegroundColor Green
npm run dev
