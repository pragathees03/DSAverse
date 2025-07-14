@echo off
echo 🚀 Setting up DSA Quiz with Lovable AI...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Create .env file if it doesn't exist
if not exist .env (
    echo 🔧 Creating .env file...
    (
        echo # Lovable AI Configuration
        echo VITE_LOVABLE_AI_API_KEY=your-lovable-ai-api-key-here
        echo.
        echo # Add your actual Lovable AI API key here
        echo # Get it from: https://lovable.ai
    ) > .env
    echo ✅ .env file created
    echo ⚠️  Please update .env with your actual Lovable AI API key
)

echo.
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Get your Lovable AI API key from https://lovable.ai
echo 2. Update the API key in src/App.tsx or .env file
echo 3. Run 'npm run dev' to start the development server
echo 4. Open http://localhost:5173 in your browser
echo.
echo Happy coding! 🧠✨
pause 