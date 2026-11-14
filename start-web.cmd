@echo off
chcp 65001 >nul
title BHB Market - بوحلوان إخوان
cd /d "%~dp0"
echo.
echo   تشغيل تطبيق بوحلوان إخوان على http://localhost:3000
echo   الحساب: admin / Admin@2026
echo.
start "" http://localhost:3000
node server.js --port=3000
pause
