import React, { memo } from 'react';

interface HeaderProps {
  onNewQuiz: () => void;
  showNewQuizButton: boolean;
}

const Header = memo(({ onNewQuiz, showNewQuizButton }: HeaderProps) => {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Film Quiz</h1>
        {showNewQuizButton && (
          <button
            onClick={onNewQuiz}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Yeni Quiz
          </button>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;