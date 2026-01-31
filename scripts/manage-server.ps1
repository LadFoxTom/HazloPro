# TallerBrico Server Management Script
# Usage: .\scripts\manage-server.ps1 [start|stop|restart|status]

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet('start','stop','restart','status')]
    [string]$Action = 'start'
)

$Port = 3001
$ServerPath = "C:\workshopSpanje"

function Get-ServerStatus {
    $process = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    if ($process) {
        $pid = $process.OwningProcess | Select-Object -First 1
        $nodeProcess = Get-Process -Id $pid -ErrorAction SilentlyContinue
        if ($nodeProcess) {
            Write-Host "✅ Server is running on port $Port (PID: $pid)" -ForegroundColor Green
            return $true
        }
    }
    Write-Host "❌ Server is not running" -ForegroundColor Red
    return $false
}

function Stop-Server {
    Write-Host "🛑 Stopping server..." -ForegroundColor Yellow
    
    # Stop by port
    $connections = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    if ($connections) {
        $connections | ForEach-Object {
            $pid = $_.OwningProcess
            if ($pid -gt 0) {
                Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
                Write-Host "   Stopped process $pid" -ForegroundColor Gray
            }
        }
    }
    
    # Also stop all node processes in workspace
    Get-Process node -ErrorAction SilentlyContinue | Where-Object {
        $_.Path -like "*workshopSpanje*"
    } | Stop-Process -Force -ErrorAction SilentlyContinue
    
    Start-Sleep -Seconds 1
    
    if (-not (Get-ServerStatus)) {
        Write-Host "✅ Server stopped successfully" -ForegroundColor Green
    }
}

function Start-Server {
    if (Get-ServerStatus) {
        Write-Host "⚠️  Server is already running!" -ForegroundColor Yellow
        Write-Host "   Use 'restart' to restart the server" -ForegroundColor Gray
        return
    }
    
    Write-Host "🚀 Starting server..." -ForegroundColor Cyan
    Write-Host "   Running: npm run dev" -ForegroundColor Gray
    Write-Host "   URL: http://localhost:$Port" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
    Write-Host ""
    
    Set-Location $ServerPath
    npm run dev
}

function Restart-Server {
    Write-Host "🔄 Restarting server..." -ForegroundColor Cyan
    Stop-Server
    Start-Sleep -Seconds 2
    Start-Server
}

# Main execution
switch ($Action) {
    'start' {
        Start-Server
    }
    'stop' {
        Stop-Server
    }
    'restart' {
        Restart-Server
    }
    'status' {
        Get-ServerStatus
    }
}
