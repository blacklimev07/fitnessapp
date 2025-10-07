export interface QuizAnswers {
  goal: string;
  training_frequency: string;
  level: string;
}

export interface QuizResult {
  type: string;
  title: string;
  description: string;
  icon: string;
}

export type QuizStep = 'welcome' | 'questions' | 'result' | 'offer' | 'success';
