import React, { memo, useCallback } from 'react';
import { Question } from '../types/quiz';

interface QuestionListProps {
  questions: Question[];
  currentQuestionId: number;
  answeredQuestions: Set<number>;
  onQuestionSelect: (id: number) => void;
}

const QuestionList = memo(({
  questions,
  currentQuestionId,
  answeredQuestions,
  onQuestionSelect
}: QuestionListProps) => {
  const getQuestionClassName = useCallback((questionId: number) => {
    if (currentQuestionId === questionId) {
      return 'bg-green-600 text-white';
    }
    if (answeredQuestions.has(questionId)) {
      return 'bg-gray-200';
    }
    return 'bg-gray-50 hover:bg-gray-100';
  }, [currentQuestionId, answeredQuestions]);

  const renderQuestion = useCallback((question: Question) => {
    const handleClick = () => onQuestionSelect(question.id);

    return (
      <button
        key={question.id}
        onClick={handleClick}
        className={`w-full p-2 text-left rounded ${getQuestionClassName(question.id)}`}
      >
        Quiz question {question.id + 1}
      </button>
    );
  }, [onQuestionSelect, getQuestionClassName]);

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Quiz Questions List</h3>
      <div className="space-y-2">
        {questions.map(renderQuestion)}
      </div>
    </div>
  );
});

QuestionList.displayName = 'QuestionList';
export default QuestionList;