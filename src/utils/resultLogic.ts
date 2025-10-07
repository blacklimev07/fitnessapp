import { QuizAnswers, QuizResult } from '../types';

export function calculateResult(answers: QuizAnswers): QuizResult {
  const { goal, training_frequency, level } = answers;

  if (goal === 'lose_weight') {
    if (training_frequency === '5+' && level !== 'beginner') {
      return {
        type: 'intensive_fat_loss',
        title: 'Intensive Fat Loss Program',
        description: 'A high-frequency program combining strength training and cardio to maximize fat loss while preserving muscle. Perfect for experienced individuals ready to commit.',
        icon: '🔥',
      };
    }
    return {
      type: 'sustainable_weight_loss',
      title: 'Sustainable Weight Loss Plan',
      description: 'A balanced approach focusing on consistent progress through moderate training and sustainable lifestyle changes. Ideal for building long-term healthy habits.',
      icon: '⚖️',
    };
  }

  if (goal === 'gain_muscle') {
    if (level === 'beginner') {
      return {
        type: 'beginner_muscle_builder',
        title: 'Beginner Muscle Builder',
        description: 'A foundation-focused program teaching proper form and progressive overload. Build strength and muscle with a sustainable approach designed for newcomers.',
        icon: '💪',
      };
    }
    if (training_frequency === '5+') {
      return {
        type: 'advanced_hypertrophy',
        title: 'Advanced Hypertrophy Program',
        description: 'High-volume training split optimized for maximum muscle growth. Includes advanced techniques and periodization for experienced lifters.',
        icon: '🏆',
      };
    }
    return {
      type: 'muscle_gain_classic',
      title: 'Classic Muscle Gain Program',
      description: 'A proven approach to building muscle through compound movements and progressive overload. Balanced frequency for steady gains.',
      icon: '💪',
    };
  }

  if (training_frequency === '1-2') {
    return {
      type: 'minimal_maintenance',
      title: 'Minimal Maintenance Plan',
      description: 'Efficient full-body workouts designed to maintain fitness with minimal time commitment. Perfect for busy schedules.',
      icon: '⏱️',
    };
  }

  if (level === 'advanced') {
    return {
      type: 'performance_optimization',
      title: 'Performance Optimization',
      description: 'Advanced programming focusing on athletic performance, mobility, and injury prevention. Maintain peak fitness year-round.',
      icon: '🎯',
    };
  }

  return {
    type: 'balanced_fitness',
    title: 'Balanced Fitness Program',
    description: 'A well-rounded approach combining strength, cardio, and flexibility. Perfect for maintaining overall health and fitness.',
    icon: '🌟',
  };
}
