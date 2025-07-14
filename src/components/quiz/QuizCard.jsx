import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { CheckCircle, XCircle, Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  showResult,
  timeLeft
}) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getOptionClassName = (index) => {
    if (!showResult) {
      return cn(
        "w-full text-left p-4 rounded-lg border transition-all duration-200",
        "hover:bg-accent hover:border-primary",
        selectedAnswer === index
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card border-border"
      );
    }

    // Show results
    if (index === question.correctAnswer) {
      return "w-full text-left p-4 rounded-lg border bg-success text-success-foreground border-success";
    }
    
    if (selectedAnswer === index && index !== question.correctAnswer) {
      return "w-full text-left p-4 rounded-lg border bg-destructive text-destructive-foreground border-destructive";
    }

    return "w-full text-left p-4 rounded-lg border bg-muted text-muted-foreground border-border opacity-60";
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-sm">
              Question {currentQuestion} of {totalQuestions}
            </Badge>
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{question.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span className={cn(
                "font-medium",
                timeLeft <= 10 ? "text-destructive" : "text-foreground"
              )}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-8">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold leading-relaxed mb-4">
            {question.question}
          </h2>
          
          {/* Topics */}
          <div className="flex flex-wrap gap-2">
            {question.topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              className={getOptionClassName(index)}
              onClick={() => !showResult && onAnswerSelect(index)}
              disabled={showResult}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-left">{option}</span>
                {showResult && (
                  <span className="ml-2 flex-shrink-0">
                    {index === question.correctAnswer ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : selectedAnswer === index ? (
                      <XCircle className="h-5 w-5" />
                    ) : null}
                  </span>
                )}
              </div>
            </Button>
          ))}
        </div>

        {/* Explanation (shown after answer) */}
        {showResult && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Explanation
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 