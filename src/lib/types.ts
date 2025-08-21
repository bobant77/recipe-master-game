export interface Recipe {
  id: string
  name: string
  ingredients: string[]
  cookingMethod: string
  cuisine: string
  difficulty: 'easy' | 'medium' | 'hard'
  emoji: string
  description?: string
  cookingTime?: number
  servings?: number
}

export interface GameQuestion {
  recipe: Recipe
  options: string[]
  correctAnswer: string
  hint?: string
}

export interface GameState {
  currentQuestion: number
  score: number
  totalQuestions: number
  questions: GameQuestion[]
  gameStatus: 'playing' | 'completed' | 'paused'
  timeRemaining?: number
  streak: number
  hintsUsed: number
}

export interface GameStats {
  totalGamesPlayed: number
  totalScore: number
  averageScore: number
  bestStreak: number
  favoriteCategories: string[]
  accuracy: number
}

export interface PlayerAnswer {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
  timeToAnswer: number
  hintsUsed: number
}

export type Difficulty = 'easy' | 'medium' | 'hard'
export type GameMode = 'classic' | 'timed' | 'endless'
export type CuisineType = 'italian' | 'chinese' | 'mexican' | 'indian' | 'french' | 'american' | 'japanese' | 'mediterranean' | 'thai' | 'greek'