import React, { memo, useCallback } from 'react';
import { Question as QuestionType, Answer } from '../types/quiz';
import AnswerOption from './AnswerOption';

interface QuestionProps {
  question: QuestionType;
  selectedAnswerId: number | null;
  onAnswerSelect: (answerId: number) => void;
}

const Question = memo(({ question, selectedAnswerId, onAnswerSelect }: QuestionProps) => {
  const renderAnswerOption = useCallback((answer: Answer) => {
    const handleSelect = () => onAnswerSelect(answer.id);

    return (
      <AnswerOption
        key={answer.id}
        answer={answer}
        isSelected={selectedAnswerId === answer.id}
        onSelect={handleSelect}
      />
    );
  }, [selectedAnswerId, onAnswerSelect]);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.answers.map(renderAnswerOption)}
      </div>
    </div>
  );
});

Question.displayName = 'Question';
export default Question;