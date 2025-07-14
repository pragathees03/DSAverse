import { useState, useEffect, useCallback } from "react";
import { Question, getRandomQuestions } from "@/data/dsaQuestions";
import { QuizStart } from "./QuizStart.tsx";
import { QuizCard } from "./QuizCard.tsx";
import { ScoreBoard } from "./ScoreBoard.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft, Bot } from "lucide-react";
import { QuizAI } from "../ai/QuizAI.tsx";

interface Answer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export function Quiz() {
  const { toast } = useToast();
  
  // Quiz state
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  
  // AI Assistant state
  const [showAI, setShowAI] = useState(false);
  
  // Timing state
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  // Initialize quiz
  const startQuiz = useCallback(() => {
    // Get random questions with better distribution
    const newQuestions = getRandomQuestions(10);
    setQuestions(newQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResult(false);
    setTimeLeft(120);
    setQuestionStartTime(Date.now());
    setTotalTimeSpent(0);
    setGameState('playing');
    
    toast({
      title: "Quiz Started!",
      description: "Good luck! You have 2 minutes per question. Questions are randomly selected for variety!",
    });
  }, [toast]);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up - auto submit current answer
          handleNextQuestion();
          return 120;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, showResult, currentQuestionIndex]);

  // Handle answer selection
  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  // Handle next question
  const handleNextQuestion = useCallback(() => {
    if (selectedAnswer === null && timeLeft > 0) {
      toast({
        title: "Please select an answer",
        description: "Choose an option before proceeding.",
        variant: "destructive"
      });
      return;
    }

    // Calculate time spent on this question
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const currentQuestion = questions[currentQuestionIndex];
    
    // Record the answer
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedAnswer ?? -1, // -1 for no answer (timeout)
      isCorrect: selectedAnswer === currentQuestion.correctAnswer,
      timeSpent: timeSpent
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    setTotalTimeSpent(prev => prev + timeSpent);

    if (!showResult) {
      // Show result for current question
      setShowResult(true);
      
      // Auto advance after 3 seconds or wait for user click
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          // Next question
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setShowResult(false);
          setTimeLeft(120);
          setQuestionStartTime(Date.now());
        } else {
          // Finish quiz
          setGameState('finished');
        }
      }, 3000);
    } else {
      // Manual advance
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setTimeLeft(120);
        setQuestionStartTime(Date.now());
      } else {
        setGameState('finished');
      }
    }
  }, [
    selectedAnswer, 
    timeLeft, 
    questionStartTime, 
    questions, 
    currentQuestionIndex, 
    answers, 
    showResult, 
    toast
  ]);

  // Handle previous question (only when showing result)
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0 && showResult) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1]?.selectedAnswer ?? null);
      setShowResult(true); // Keep showing result for previous question
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setGameState('start');
    setShowAI(false);
  };

  // Render based on game state
  if (gameState === 'start') {
    return <QuizStart onStart={startQuiz} questionCount={10} />;
  }

  if (gameState === 'finished') {
    return (
      <ScoreBoard
        questions={questions}
        answers={answers}
        totalTime={totalTimeSpent}
        onRestart={handleRestart}
      />
    );
  }

  // Playing state
  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  return (
    <div className="space-y-6">
      {/* AI Assistant Toggle */}
      <div className="flex justify-end">
        <Button
          onClick={() => setShowAI(!showAI)}
          variant="outline"
          className="flex items-center gap-2 bg-white border-gray-300 hover:bg-gray-50"
        >
          <Bot className="h-4 w-4" />
          {showAI ? 'Hide DSAverse AI' : 'Show DSAverse AI'}
        </Button>
      </div>

      <QuizCard
        question={currentQuestion}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        showResult={showResult}
        timeLeft={timeLeft}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0 || !showResult}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          {showResult ? "Review the explanation above" : `Select your answer`}
        </div>

        <Button
          onClick={handleNextQuestion}
          disabled={!showResult && selectedAnswer === null}
          className="flex items-center gap-2"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* AI Assistant Panel */}
      {showAI && (
        <div className="fixed bottom-4 right-4 w-96 h-96 bg-white rounded-lg shadow-lg border z-50">
          <QuizAI 
            currentQuestion={currentQuestion}
            onClose={() => setShowAI(false)}
          />
        </div>
      )}
    </div>
  );
} 