import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Progress } from "@/components/ui/progress.tsx";
import { Question } from "@/data/dsaQuestions";
import { Trophy, Target, BookOpen, TrendingUp, RotateCcw, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

interface ScoreBoardProps {
  questions: Question[];
  answers: Answer[];
  totalTime: number;
  onRestart: () => void;
}

export function ScoreBoard({ questions, answers, totalTime, onRestart }: ScoreBoardProps) {
  const { toast } = useToast();
  
  const correctAnswers = answers.filter(a => a.isCorrect).length;
  const score = (correctAnswers / questions.length) * 100;
  const averageTime = totalTime / questions.length;

  // Analyze performance by category
  const categoryAnalysis = questions.reduce((acc, question, index) => {
    const category = question.category;
    const answer = answers[index];
    
    if (!acc[category]) {
      acc[category] = { total: 0, correct: 0, questions: [] };
    }
    
    acc[category].total++;
    if (answer?.isCorrect) acc[category].correct++;
    acc[category].questions.push({ question, answer });
    
    return acc;
  }, {} as Record<string, { total: number; correct: number; questions: any[] }>);

  const getScoreColor = () => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getPerformanceLevel = () => {
    if (score >= 90) return "Excellent!";
    if (score >= 80) return "Great Job!";
    if (score >= 70) return "Good Work!";
    if (score >= 60) return "Keep Practicing!";
    return "Needs Improvement";
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleShare = () => {
    const text = `I scored ${score.toFixed(0)}% on a DSA quiz! ${correctAnswers}/${questions.length} correct answers.`;
    if (navigator.share) {
      navigator.share({
        title: 'My DSA Quiz Score',
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast({
        title: "Score copied!",
        description: "Your score has been copied to clipboard.",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Score Card */}
      <Card className="text-center">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl">Quiz Complete!</CardTitle>
          <p className="text-muted-foreground">{getPerformanceLevel()}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor()}`}>
                {score.toFixed(0)}%
              </div>
              <p className="text-sm text-muted-foreground">Overall Score</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">
                {correctAnswers}/{questions.length}
              </div>
              <p className="text-sm text-muted-foreground">Correct Answers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">
                {formatTime(totalTime)}
              </div>
              <p className="text-sm text-muted-foreground">Total Time</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onRestart} className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Take Another Quiz
            </Button>
            <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share Score
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Performance Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Category Performance */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              By Category
            </h3>
            <div className="space-y-3">
              {Object.entries(categoryAnalysis).map(([category, stats]) => {
                const accuracy = (stats.correct / stats.total) * 100;
                return (
                  <div key={category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{category}</span>
                      <span className="text-sm text-muted-foreground">
                        {stats.correct}/{stats.total} ({accuracy.toFixed(0)}%)
                      </span>
                    </div>
                    <Progress value={accuracy} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 