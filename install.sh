#!/bin/bash

echo "🚀 Setting up DSA Quiz with Lovable AI..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cat > .env << EOF
# Lovable AI Configuration
VITE_LOVABLE_AI_API_KEY=your-lovable-ai-api-key-here

# Add your actual Lovable AI API key here
# Get it from: https://lovable.ai
EOF
    echo "✅ .env file created"
    echo "⚠️  Please update .env with your actual Lovable AI API key"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Get your Lovable AI API key from https://lovable.ai"
echo "2. Update the API key in src/App.tsx or .env file"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Open http://localhost:5173 in your browser"
echo ""
echo "Happy coding! 🧠✨" 