export interface Answer {
  id: number;
  answer: string;
  correct_answer: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface UserAnswer {
  questionId: number;
  answerId: number;
}