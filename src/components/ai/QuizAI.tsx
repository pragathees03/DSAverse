import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Input } from '@/components/ui/input.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { 
  Send, 
  X, 
  Brain, 
  Lightbulb, 
  BookOpen, 
  Target,
  MessageCircle,
  Bot
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface QuizAIProps {
  currentQuestion?: any
  onClose?: () => void
}

export function QuizAI({ currentQuestion, onClose }: QuizAIProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your DSAverse AI assistant. I can help you with:\n\n• Understanding concepts\n• Explaining solutions\n• Providing hints\n• Practice problems\n\nWhat would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Quick action buttons for common queries
  const quickActions = [
    {
      label: "Explain current topic",
      icon: BookOpen,
      action: () => handleQuickAction("Can you explain the current topic in detail?")
    },
    {
      label: "Give me a hint",
      icon: Lightbulb,
      action: () => handleQuickAction("I need a hint for this question.")
    },
    {
      label: "Show similar problems",
      icon: Target,
      action: () => handleQuickAction("Can you show me similar problems to practice?")
    },
    {
      label: "Study tips",
      icon: Brain,
      action: () => handleQuickAction("What are some study tips for this topic?")
    }
  ]

  const handleQuickAction = (query: string) => {
    setInputValue(query)
    handleSendMessage(query)
  }

  const handleSendMessage = async (message: string = inputValue) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate AI response (replace with actual Lovable AI API call)
    setTimeout(() => {
      const aiResponse = generateAIResponse(message, currentQuestion)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  const generateAIResponse = (userMessage: string, question: any): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Context-aware responses based on current question
    if (question && lowerMessage.includes('hint')) {
      return `Here's a hint for the current question about ${question.category}:\n\n${getHintForQuestion(question)}`
    }
    
    if (lowerMessage.includes('explain') || lowerMessage.includes('topic')) {
      return `Let me explain ${question?.category || 'this topic'}:\n\n${getExplanationForTopic(question?.category)}`
    }
    
    if (lowerMessage.includes('similar') || lowerMessage.includes('practice')) {
      return `Here are some similar problems to practice:\n\n${getSimilarProblems(question?.category)}`
    }
    
    if (lowerMessage.includes('study') || lowerMessage.includes('tip')) {
      return `Here are some study tips for ${question?.category || 'DSA'}:\n\n${getStudyTips(question?.category)}`
    }
    
    // Default response
    return "I'm here to help you with your DSA studies! You can ask me for explanations, hints, practice problems, or study tips. What specific topic would you like to focus on?"
  }

  const getHintForQuestion = (question: any): string => {
    const hints = {
      'Binary Search Tree': 'Think about the properties of BST and how traversal works.',
      'Stack': 'Remember LIFO principle and common applications like function calls.',
      'Sorting Algorithms': 'Consider time complexity and when each algorithm is most efficient.',
      'Hash Table': 'Think about collision resolution and hash function properties.',
      'Graph Algorithms': 'Consider the graph representation and traversal strategies.',
      'Dynamic Programming': 'Look for overlapping subproblems and optimal substructure.'
    }
    return hints[question.category] || 'Focus on the key concepts and properties of the data structure or algorithm.'
  }

  const getExplanationForTopic = (category: string): string => {
    const explanations = {
      'Binary Search Tree': 'A BST is a tree data structure where each node has at most two children, and the left subtree contains nodes with values less than the parent, while the right subtree contains nodes with values greater than the parent.',
      'Stack': 'A stack is a LIFO (Last In, First Out) data structure. Think of it like a stack of plates - you can only add or remove from the top.',
      'Sorting Algorithms': 'Sorting algorithms arrange elements in a specific order. Different algorithms have different time complexities and use cases.',
      'Hash Table': 'A hash table uses a hash function to map keys to values, providing average O(1) time complexity for search, insert, and delete operations.'
    }
    return explanations[category] || 'This topic involves fundamental computer science concepts. Would you like me to explain a specific aspect?'
  }

  const getSimilarProblems = (category: string): string => {
    return `Here are some practice problems for ${category}:\n\n• Basic implementation\n• Time complexity analysis\n• Real-world applications\n• Optimization techniques\n\nWould you like me to provide specific problem examples?`
  }

  const getStudyTips = (category: string): string => {
    return `Study tips for ${category}:\n\n• Understand the fundamental concepts first\n• Practice implementation from scratch\n• Analyze time and space complexity\n• Solve problems on coding platforms\n• Review and understand solutions\n\nConsistent practice is key to mastery!`
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bot className="h-5 w-5 text-primary" />
            DSAverse AI
          </CardTitle>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        {currentQuestion && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">{currentQuestion.category}</Badge>
            <Badge variant="outline">{currentQuestion.difficulty}</Badge>
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Quick Actions */}
        <div className="px-4 pb-3">
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={action.action}
                className="text-xs h-auto py-2"
                disabled={isLoading}
              >
                <action.icon className="h-3 w-3 mr-1" />
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 space-y-3 max-h-48">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about DSA..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              size="sm"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 