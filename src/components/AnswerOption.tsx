import React, { memo } from 'react';
import { Answer } from '../types/quiz';

interface AnswerOptionProps {
  answer: Answer;
  isSelected: boolean;
  onSelect: () => void;
}

const AnswerOption = memo(({ answer, isSelected, onSelect }: AnswerOptionProps) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full p-4 text-left rounded-lg transition-colors ${isSelected
        ? 'bg-green-600 text-white'
        : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
        }`}
    >
      {answer.answer}
    </button>
  );
});

AnswerOption.displayName = 'AnswerOption';
export default AnswerOption;