import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { 
  Brain, 
  Clock, 
  Target, 
  Trophy, 
  Play, 
  BookOpen,
  Lightbulb,
  TrendingUp
} from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
  questionCount: number;
}

export function QuizStart({ onStart, questionCount }: QuizStartProps) {
  const features = [
    {
      icon: Brain,
      title: "10 Random Questions",
      description: "Carefully selected DSA problems covering all major topics"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "2 minutes per question with real-time countdown"
    },
    {
      icon: Target,
      title: "Instant Feedback",
      description: "Detailed explanations for every answer"
    },
    {
      icon: TrendingUp,
      title: "Performance Analysis",
      description: "Get insights on areas to improve"
    }
  ];

  const topics = [
    "Arrays & Strings",
    "Linked Lists", 
    "Stacks & Queues",
    "Trees & Graphs",
    "Sorting & Searching",
    "Dynamic Programming",
    "Hash Tables",
    "Heaps & Priority Queues"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Hero Section */}
      <Card className="text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Brain className="h-12 w-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
            DSAverse
          </CardTitle>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master Data Structures and Algorithms with our interactive learning platform. 
            Get personalized feedback and track your progress with AI assistance!
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <Button 
            onClick={onStart} 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
          >
            <Play className="mr-2 h-5 w-5" />
            Start Quiz ({questionCount} Questions)
          </Button>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Topics Covered */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Topics Covered
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {topics.map((topic, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="justify-center p-2 text-center"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 