import { Quiz } from './components/quiz/Quiz'
import { Switch } from './components/ui/button';
import { useEffect, useState } from 'react';

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background transition-colors">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="relative mb-8">
          {/* Theme Toggle in top-right */}
          <div className="absolute right-0 top-0 flex items-center gap-2 z-10">
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              label="Toggle dark mode"
            />
          </div>
          <div className="text-center flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">DSAverse</h1>
            <p className="text-gray-600 mt-2 dark:text-gray-300">
              Interactive DSA Learning Platform with AI Assistance
            </p>
          </div>
        </div>

        {/* Main Quiz Component */}
        <Quiz />
      </div>
    </div>
  )
}

export default App 