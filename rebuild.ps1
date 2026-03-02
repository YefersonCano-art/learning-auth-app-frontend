$ErrorActionPreference = "Stop"

Write-Host "[1/4] Verificando Docker..."
docker version | Out-Null

Write-Host "[2/4] Bajando servicios del compose actual (si existen)..."
docker compose down

Write-Host "[3/4] Eliminando contenedor legado que ocupa el puerto 3301 (si existe)..."
$legacyContainer = "frontend-login-jwt"
$exists = docker ps -aq -f "name=^${legacyContainer}$"
if ($exists) {
    docker rm -f $legacyContainer | Out-Null
    Write-Host "   - Eliminado: $legacyContainer"
} else {
    Write-Host "   - No existe contenedor legado"
}

Write-Host "[4/4] Reconstruyendo imagen y levantando contenedor..."
docker compose up -d --build

Write-Host "Listo. Estado actual:"
docker compose ps
