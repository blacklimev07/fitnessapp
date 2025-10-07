import { CheckCircle, RotateCcw } from 'lucide-react';

interface SuccessProps {
  onRestart: () => void;
}

export default function Success({ onRestart }: SuccessProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-500 rounded-full mb-8 shadow-xl animate-bounce">
          <CheckCircle className="w-14 h-14 text-white" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Thank You!
        </h1>

        <p className="text-xl text-gray-600 mb-4 leading-relaxed">
          Your personalized workout plan is being prepared.
        </p>

        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          We'll contact you shortly with all the details you need to start your fitness journey.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 inline-block">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">What happens next?</h3>
          <div className="text-left space-y-3 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-orange-100 text-orange-700 rounded-full text-sm font-bold flex-shrink-0">1</span>
              <p>You'll receive your personalized plan within 24 hours</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-orange-100 text-orange-700 rounded-full text-sm font-bold flex-shrink-0">2</span>
              <p>Our expert will reach out to answer any questions</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 bg-orange-100 text-orange-700 rounded-full text-sm font-bold flex-shrink-0">3</span>
              <p>Start your transformation with full support</p>
            </div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-full hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
        >
          <RotateCcw className="w-5 h-5" />
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}
