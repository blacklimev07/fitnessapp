import { Sparkles, ArrowRight } from 'lucide-react';
import { QuizResult } from '../types';

interface ResultProps {
  result: QuizResult;
  onGetPlan: () => void;
}

export default function Result({ result, onGetPlan }: ResultProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Your Result is Ready
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="text-7xl mb-6">{result.icon}</div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{result.title}</h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-12">{result.description}</p>

          <div className="space-y-4">
            <button
              onClick={onGetPlan}
              className="w-full px-8 py-5 bg-emerald-600 text-white text-xl font-semibold rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform flex items-center justify-center gap-3"
            >
              Get Your Personalized Plan
              <ArrowRight className="w-6 h-6" />
            </button>

            <p className="text-sm text-gray-500">Unlock your full program with expert guidance</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Personalized for you
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Expert-designed
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Proven results
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
