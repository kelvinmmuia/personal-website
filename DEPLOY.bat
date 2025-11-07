@echo off
REM Personal Website Deployment Script for Windows CMD
REM This script automates the GitHub Pages deployment process

echo.
echo ========================================
echo Personal Website Deployment Script
echo ========================================
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo Checking project status...
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found
    echo Please run this script from the project root directory
    pause
    exit /b 1
)

echo ✓ Project found
echo.

REM Menu
:menu
echo.
echo What would you like to do?
echo.
echo 1. Install dependencies (npm install)
echo 2. Start development server (npm run dev)
echo 3. Build for production (npm run build)
echo 4. Deploy to GitHub Pages (npm run deploy)
echo 5. Git: Add, commit, and push changes
echo 6. Full deployment (build + deploy + push)
echo 7. Exit
echo.

set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" goto install
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto deploy
if "%choice%"=="5" goto gitpush
if "%choice%"=="6" goto fulldeploy
if "%choice%"=="7" goto end
echo Invalid choice. Please try again.
goto menu

:install
echo.
echo Installing dependencies...
call npm install
if %ERRORLEVEL% EQU 0 (
    echo ✓ Dependencies installed successfully
) else (
    echo ✗ Installation failed
)
pause
goto menu

:dev
echo.
echo Starting development server...
echo.
echo Your website will open at: http://localhost:5173
echo Press Ctrl+C to stop the server
echo.
call npm run dev
goto menu

:build
echo.
echo Building for production...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo ✓ Build successful
    echo Files are in the 'dist' folder
) else (
    echo ✗ Build failed
)
pause
goto menu

:deploy
echo.
echo Deploying to GitHub Pages...
echo.
call npm run deploy
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Deployment successful!
    echo.
    echo Your website will be live at:
    echo https://kelvinmwakamuia-cell.github.io/personal-website
    echo.
    echo Note: It may take 1-2 minutes for changes to appear
) else (
    echo ✗ Deployment failed
)
pause
goto menu

:gitpush
echo.
set /p message="Enter commit message: "
echo.
echo Adding files...
call git add .
echo Committing...
call git commit -m "%message%"
echo Pushing to GitHub...
call git push
if %ERRORLEVEL% EQU 0 (
    echo ✓ Changes pushed to GitHub
) else (
    echo ✗ Git push failed
)
pause
goto menu

:fulldeploy
echo.
echo ========================================
echo FULL DEPLOYMENT PROCESS
echo ========================================
echo.
set /p message="Enter commit message (default: 'Update website'): "
if "%message%"=="" set message=Update website
echo.
echo Step 1: Adding files to git...
call git add .
echo ✓ Files added
echo.
echo Step 2: Committing changes...
call git commit -m "%message%"
echo ✓ Changes committed
echo.
echo Step 3: Pushing to GitHub...
call git push
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Git push failed
    pause
    goto menu
)
echo ✓ Changes pushed to GitHub
echo.
echo Step 4: Building for production...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Build failed
    pause
    goto menu
)
echo ✓ Build successful
echo.
echo Step 5: Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo ✓ DEPLOYMENT COMPLETE!
    echo ========================================
    echo.
    echo Your website is live at:
    echo https://kelvinmwakamuia-cell.github.io/personal-website
    echo.
    echo Changes may take 1-2 minutes to appear
    echo.
) else (
    echo ✗ Deployment failed
)
pause
goto menu

:end
echo.
echo Thank you for using the deployment script!
echo.
pause
exit /b 0
