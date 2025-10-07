import { useState } from 'react';
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import Result from './components/Result';
import Offer from './components/Offer';
import Success from './components/Success';
import { QuizAnswers, QuizResult, QuizStep } from './types';
import { calculateResult } from './utils/resultLogic';

function App() {
  const [currentStep, setCurrentStep] = useState<QuizStep>('welcome');
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleStart = () => {
    setCurrentStep('questions');
  };

  const handleQuestionsComplete = (quizAnswers: QuizAnswers) => {
    setAnswers(quizAnswers);
    const quizResult = calculateResult(quizAnswers);
    setResult(quizResult);
    setCurrentStep('result');
  };

  const handleGetPlan = () => {
    setCurrentStep('offer');
  };

  const handleOfferSubmit = (name: string, contact: string) => {
    const submissionData = {
      ...answers,
      result_type: result?.type,
      name,
      contact,
      timestamp: new Date().toISOString(),
    };

    console.log('Quiz submission:', submissionData);

    const existingData = localStorage.getItem('quizSubmissions');
    const submissions = existingData ? JSON.parse(existingData) : [];
    submissions.push(submissionData);
    localStorage.setItem('quizSubmissions', JSON.stringify(submissions));

    setCurrentStep('success');
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setAnswers(null);
    setResult(null);
  };

  return (
    <>
      {currentStep === 'welcome' && <Welcome onStart={handleStart} />}
      {currentStep === 'questions' && <Questions onComplete={handleQuestionsComplete} />}
      {currentStep === 'result' && result && <Result result={result} onGetPlan={handleGetPlan} />}
      {currentStep === 'offer' && result && answers && (
        <Offer result={result} answers={answers} onSubmit={handleOfferSubmit} />
      )}
      {currentStep === 'success' && <Success onRestart={handleRestart} />}
    </>
  );
}

export default App;
