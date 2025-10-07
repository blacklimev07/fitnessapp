import { useState } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { QuizAnswers, QuizResult } from '../types';

interface OfferProps {
  result: QuizResult;
  answers: QuizAnswers;
  onSubmit: (name: string, contact: string) => void;
}

export default function Offer({ result, onSubmit }: OfferProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState<'telegram' | 'phone'>('telegram');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    onSubmit(name, contact);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{result.icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Get Your {result.title}
            </h2>
            <p className="text-lg text-gray-600">
              Enter your details and we'll send you the complete program
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              What you'll get:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Complete workout plan tailored to your goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Exercise demonstrations and technique tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Nutrition guidelines to support your training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">•</span>
                <span>Progress tracking tools and expert support</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                How should we contact you?
              </label>
              <div className="flex gap-3 mb-3">
                <button
                  type="button"
                  onClick={() => setContactType('telegram')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    contactType === 'telegram'
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  Telegram
                </button>
                <button
                  type="button"
                  onClick={() => setContactType('phone')}
                  className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                    contactType === 'phone'
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Phone
                </button>
              </div>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={contactType === 'telegram' ? '@username or phone' : 'Your phone number'}
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-lg"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !contact.trim()}
              className="w-full px-8 py-5 bg-emerald-600 text-white text-xl font-semibold rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transform"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Plan Now'}
            </button>

            <p className="text-center text-sm text-gray-500">
              We respect your privacy and will never share your information
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
