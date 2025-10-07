import { Zap } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-8 shadow-lg">
          <Zap className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Take this quick quiz and discover
          <span className="block text-emerald-600 mt-2">your perfect workout plan</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Answer just 3 simple questions to get a personalized fitness program tailored to your goals and lifestyle.
        </p>

        <button
          onClick={onStart}
          className="px-12 py-5 bg-emerald-600 text-white text-xl font-semibold rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 transform"
        >
          Start Quiz
        </button>

        <p className="mt-8 text-sm text-gray-500">Takes less than 60 seconds</p>
      </div>
    </div>
  );
}
