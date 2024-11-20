'use client';

import { useState, useCallback } from 'react';
import { Toaster } from 'sonner';
import Header from '../components/Header';
import QuizContainer from '../components/QuizContainer';
import { quizData } from '../data/quiz-data';

export default function Home() {
  const [quizKey, setQuizKey] = useState(0);

  const handleNewQuiz = useCallback(() => {
    setQuizKey(prev => prev + 1);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header onNewQuiz={handleNewQuiz} showNewQuizButton={quizKey > 0} />
      <div className="container mx-auto py-8">
        <QuizContainer
          key={quizKey}
          questions={quizData}
          onNewQuiz={handleNewQuiz}
        />
      </div>
    </main>
  );
}