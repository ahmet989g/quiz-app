import React, { memo, useMemo } from 'react';
import { Question, UserAnswer } from '../types/quiz';

interface QuizResultProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  onNewQuiz: () => void;
}

const QuizResult = memo(({ questions, userAnswers, onNewQuiz }: QuizResultProps) => {
  const results = useMemo(() => {
    let correct = 0;
    userAnswers.forEach((userAnswer) => {
      const question = questions.find((q) => q.id === userAnswer.questionId);
      const answer = question?.answers.find((a) => a.id === userAnswer.answerId);
      if (answer?.correct_answer) {
        correct++;
      }
    });
    return {
      correct,
      wrong: questions.length - correct
    };
  }, [questions, userAnswers]);

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-sm text-center">
      <h2 className="text-2xl font-bold mb-6">Quiz Tamamlandı!</h2>
      <div className="space-y-4 mb-8">
        <p className="text-lg">
          <span className="font-semibold text-green-600">{results.correct}</span> doğru
        </p>
        <p className="text-lg">
          <span className="font-semibold text-red-600">{results.wrong}</span> yanlış
        </p>
      </div>
      <button
        onClick={onNewQuiz}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Yeni Quiz Başlat
      </button>
    </div>
  );
});

QuizResult.displayName = 'QuizResult';
export default QuizResult;