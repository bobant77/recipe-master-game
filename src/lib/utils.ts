import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export function calculateScore(
  correctAnswers: number,
  totalQuestions: number,
  streak: number,
  hintsUsed: number,
  timeBonus: number = 0
): number {
  const baseScore = (correctAnswers / totalQuestions) * 100
  const streakBonus = Math.min(streak * 2, 20) 
  const hintPenalty = hintsUsed * 5 
  
  return Math.max(0, Math.round(baseScore + streakBonus - hintPenalty + timeBonus))
}

export function getScoreGrade(score: number): {
  grade: string
  color: string
  message: string
} {
  if (score >= 90) return { grade: 'A+', color: 'text-green-600', message: 'Outstanding! You\'re a Recipe Master!' }
  if (score >= 80) return { grade: 'A', color: 'text-green-500', message: 'Excellent culinary knowledge!' }
  if (score >= 70) return { grade: 'B+', color: 'text-blue-500', message: 'Great job! Keep cooking!' }
  if (score >= 60) return { grade: 'B', color: 'text-blue-400', message: 'Good work! Practice makes perfect.' }
  if (score >= 50) return { grade: 'C', color: 'text-yellow-500', message: 'Not bad! Time to explore more recipes.' }
  return { grade: 'D', color: 'text-red-500', message: 'Keep trying! Every chef starts somewhere.' }
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getRandomElements<T>(array: T[], count: number): T[] {
  return shuffleArray(array).slice(0, count)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}

export function getRandomRecipeEmoji(): string {
  const emojis = ['🍝', '🍕', '🥘', '🍲', '🥗', '🍛', '🍜', '🌮', '🥙', '🍱', '🍣', '🍤', '🥟', '🍳', '🥞']
  return emojis[Math.floor(Math.random() * emojis.length)]
}

// Local storage helpers with error handling
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(key)
    } catch {

    }
  }
}