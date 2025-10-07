import { useState } from 'react';
import { ChevronRight, Target, Calendar, TrendingUp } from 'lucide-react';
import { QuizAnswers } from '../types';

interface QuestionsProps {
  onComplete: (answers: QuizAnswers) => void;
}

interface Question {
  id: keyof QuizAnswers;
  question: string;
  icon: React.ReactNode;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 'goal',
    question: 'What is your goal?',
    icon: <Target className="w-8 h-8" />,
    options: [
      { value: 'lose_weight', label: 'Lose weight' },
      { value: 'gain_muscle', label: 'Gain muscle' },
      { value: 'stay_fit', label: 'Stay fit' },
    ],
  },
  {
    id: 'training_frequency',
    question: 'How many times per week can you train?',
    icon: <Calendar className="w-8 h-8" />,
    options: [
      { value: '1-2', label: '1–2 times' },
      { value: '3-4', label: '3–4 times' },
      { value: '5+', label: '5+ times' },
    ],
  },
  {
    id: 'level',
    question: 'What is your fitness level?',
    icon: <TrendingUp className="w-8 h-8" />,
    options: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
    ],
  },
];

export default function Questions({ onComplete }: QuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id;
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => onComplete(newAnswers as QuizAnswers), 300);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const current = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-4">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-orange-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl text-orange-600">
              {current.icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{current.question}</h2>
          </div>

          <div className="space-y-4">
            {current.options.map((option, index) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 hover:scale-[1.02] transform">
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-700">
                    {option.label}
                  </span>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
