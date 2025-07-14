import { Quiz } from './components/quiz/Quiz'

function App() {
  return (
          <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">DSAverse</h1>
            <p className="text-gray-600 mt-2">
              Interactive DSA Learning Platform with AI Assistance
            </p>
          </div>

        {/* Main Quiz Component */}
        <Quiz />
      </div>
    </div>
  )
}

export default App 