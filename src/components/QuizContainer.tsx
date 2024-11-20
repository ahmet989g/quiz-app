import React, { useState, useCallback, useMemo } from 'react';
import { Question as QuestionType, UserAnswer } from '../types/quiz';
import { toast } from 'sonner';
import QuestionList from './QuestionList';
import Question from './Question';
import QuizResult from './QuizResult';

interface QuizContainerProps {
  questions: QuestionType[];
  onNewQuiz: () => void;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ questions, onNewQuiz }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const answeredQuestions = useMemo(() =>
    new Set(userAnswers.map((a) => a.questionId)),
    [userAnswers]
  );

  const currentQuestion = useMemo(() =>
    questions[currentQuestionId],
    [questions, currentQuestionId]
  );

  const selectedAnswer = useMemo(() =>
    userAnswers.find((a) => a.questionId === currentQuestionId)?.answerId,
    [userAnswers, currentQuestionId]
  );

  const handleAnswerSelect = useCallback((answerId: number) => {
    setUserAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== currentQuestionId);
      return [...filtered, { questionId: currentQuestionId, answerId }];
    });
  }, [currentQuestionId]);

  const handleSubmit = useCallback(() => {
    if (selectedAnswer === undefined) {
      toast.error('Lütfen bir cevap seçiniz');
      return;
    }

    if (currentQuestionId < questions.length - 1) {
      setCurrentQuestionId(prev => prev + 1);
    }
  }, [selectedAnswer, currentQuestionId, questions.length]);

  const handleFinish = useCallback(() => {
    const unansweredQuestion = questions.find(
      (q) => !answeredQuestions.has(q.id)
    );

    if (unansweredQuestion) {
      toast.error(`${unansweredQuestion.id + 1}. soruyu cevaplayınız`);
      setCurrentQuestionId(unansweredQuestion.id);
      return;
    }

    setIsFinished(true);
  }, [questions, answeredQuestions]);

  const handleQuestionSelect = useCallback((id: number) => {
    setCurrentQuestionId(id);
  }, []);

  if (isFinished) {
    return (
      <QuizResult
        questions={questions}
        userAnswers={userAnswers}
        onNewQuiz={onNewQuiz}
      />
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="md:w-3/4">
        <Question
          question={currentQuestion}
          selectedAnswerId={selectedAnswer ?? null}
          onAnswerSelect={handleAnswerSelect}
        />
        <div className="w-full max-w-2xl mx-auto p-6 flex justify-end">
          {currentQuestionId === questions.length - 1 ? (
            <button
              onClick={handleFinish}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Quizi Bitir
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Cevapla
            </button>
          )}
        </div>
      </div>
      <div className="md:w-1/4">
        <QuestionList
          questions={questions}
          currentQuestionId={currentQuestionId}
          answeredQuestions={answeredQuestions}
          onQuestionSelect={handleQuestionSelect}
        />
      </div>
    </div>
  );
};

export default QuizContainer;