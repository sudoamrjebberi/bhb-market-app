@echo off
chcp 65001 >nul
title BHB Market Desktop - Electron + Realm
cd /d "%~dp0desktop"
if not exist node_modules (
  echo.
  echo   تثبيت الحزم لأول مرة: electron + realm ...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo   تعذّر التثبيت. تحقق من اتصال الإنترنت ثم أعد المحاولة.
    pause
    exit /b 1
  )
)
call npm start
pause
