'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import Link from 'next/link'

import { shuffleArray, getRandomElements, calculateScore, getScoreGrade } from '@/lib/utils'
import type { GameQuestion, GameState, PlayerAnswer } from '@/lib/types'
import { recipes } from '@/data/receipe'

const TOTAL_QUESTIONS = 5

export function GameBoard() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: TOTAL_QUESTIONS,
    questions: [],
    gameStatus: 'playing',
    streak: 0,
    hintsUsed: 0
  })

  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [playerAnswers, setPlayerAnswers] = useState<PlayerAnswer[]>([])
  const [timeRemaining, setTimeRemaining] = useState(30)
  const [showHint, setShowHint] = useState(false)

  // Generate game questions on component mount
  useEffect(() => {
    const generateQuestions = (): GameQuestion[] => {
      const selectedRecipes = getRandomElements(recipes, TOTAL_QUESTIONS)

      return selectedRecipes.map(recipe => {
        const wrongAnswers = getRandomElements(
          recipes.filter(r => r.id !== recipe.id).map(r => r.name),
          3
        )

        const allOptions = shuffleArray([recipe.name, ...wrongAnswers])

        return {
          recipe,
          options: allOptions,
          correctAnswer: recipe.name,
          hint: `This ${recipe.cuisine} dish is ${recipe.difficulty} to make and serves ${recipe.servings || 'multiple'} people.`
        }
      })
    }

    setGameState(prev => ({
      ...prev,
      questions: generateQuestions()
    }))
  }, [])




  useEffect(() => {
    if (!showResult) {
      setTimeRemaining(30)
    }
  }, [gameState.currentQuestion, showResult])

  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00a651', '#ffd23f', '#ff6b35']
    })
  }, [])

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return
    setSelectedAnswer(answer)
  }

  const handleAnswerSubmit = useCallback((answer: string = selectedAnswer) => {
    if (showResult) return

    const currentQuestion = gameState.questions[gameState.currentQuestion]
    if (!currentQuestion) return

    const isCorrect = answer === currentQuestion.correctAnswer
    const newAnswer: PlayerAnswer = {
      questionId: currentQuestion.recipe.id,
      selectedAnswer: answer,
      isCorrect,
      timeToAnswer: 30 - timeRemaining,
      hintsUsed: showHint ? 1 : 0
    }

    setPlayerAnswers(prev => [...prev, newAnswer])

    if (isCorrect) {
      triggerConfetti()
      setGameState(prev => ({
        ...prev,
        score: prev.score + 1,
        streak: prev.streak + 1
      }))
    } else {
      setGameState(prev => ({
        ...prev,
        streak: 0
      }))
    }

    setShowResult(true)

    setTimeout(() => {
      if (gameState.currentQuestion + 1 >= TOTAL_QUESTIONS) {
        setGameState(prev => ({ ...prev, gameStatus: 'completed' }))
      } else {
        setGameState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1
        }))
        setSelectedAnswer('')
        setShowResult(false)
        setShowHint(false)
      }
    }, 2000)
  }, [gameState, showResult, timeRemaining, showHint, triggerConfetti,selectedAnswer])

  useEffect(() => {
    if (gameState.gameStatus === 'playing' && timeRemaining > 0 && !showResult) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeRemaining === 0 && !showResult) {
      handleAnswerSubmit('')
    }
  }, [timeRemaining, gameState.gameStatus, showResult, handleAnswerSubmit])

  const handleHint = () => {
    setShowHint(true)
    setGameState(prev => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1
    }))
  }

  const restartGame = useCallback(() => {
    const generateQuestions = (): GameQuestion[] => {
      const selectedRecipes = getRandomElements(recipes, TOTAL_QUESTIONS)

      return selectedRecipes.map(recipe => {
        const wrongAnswers = getRandomElements(
          recipes.filter(r => r.id !== recipe.id).map(r => r.name),
          3
        )

        const allOptions = shuffleArray([recipe.name, ...wrongAnswers])

        return {
          recipe,
          options: allOptions,
          correctAnswer: recipe.name,
          hint: `This ${recipe.cuisine} dish is ${recipe.difficulty} to make and serves ${recipe.servings || 'multiple'} people.`
        }
      })
    }

    setGameState({
      currentQuestion: 0,
      score: 0,
      totalQuestions: TOTAL_QUESTIONS,
      questions: generateQuestions(),
      gameStatus: 'playing',
      streak: 0,
      hintsUsed: 0
    })
    setSelectedAnswer('')
    setShowResult(false)
    setPlayerAnswers([])
    setShowHint(false)
  }, [])

  if (gameState.questions.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-sobeys-green via-sobeys-blue to-sobeys-dark-green">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="relative w-16 h-16 mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sobeys-yellow to-sobeys-orange rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-xl">🍳</span>
              </div>
            </div>
          </motion.div>
          <motion.h2
            className="text-lg font-bold text-white"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Preparing your challenge...
          </motion.h2>
        </motion.div>
      </div>
    )
  }

  // Replace the completion screen section in your GameBoard.tsx
  // This is the entire completion screen with better Sobeys branding

  if (gameState.gameStatus === 'completed') {
    const finalScore = calculateScore(
      gameState.score,
      TOTAL_QUESTIONS,
      Math.max(...playerAnswers.map((_, i) => {
        let streak = 0
        for (let j = i; j < playerAnswers.length && playerAnswers[j].isCorrect; j++) {
          streak++
        }
        return streak
      })),
      gameState.hintsUsed
    )
    const grade = getScoreGrade(finalScore)

    return (
      <div className="h-screen bg-gradient-to-br from-sobeys-light-green via-gray-50 to-white flex items-center justify-center px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative">
            {/* Clean white background with subtle shadow instead of gradient blur */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-sobeys-green/20">

              {/* Compact trophy */}
              <motion.div
                className="relative mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="w-20 h-20 mx-auto relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sobeys-yellow to-sobeys-orange rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏆</span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                className="text-3xl lg:text-4xl font-black mb-4 text-sobeys-green"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Game Complete!
              </motion.h1>

              <motion.p
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {grade.message}
              </motion.p>

              {/* Clean score grid with better contrast */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { label: 'Correct', value: `${gameState.score}/${TOTAL_QUESTIONS}`, icon: '✅', color: 'border-sobeys-green bg-sobeys-light-green' },
                  { label: 'Grade', value: grade.grade, icon: '📊', color: 'border-sobeys-blue bg-blue-50' },
                  { label: 'Score', value: finalScore, icon: '⭐', color: 'border-sobeys-yellow bg-yellow-50' },
                  { label: 'Hints', value: gameState.hintsUsed, icon: '💡', color: 'border-sobeys-orange bg-orange-50' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ scale: 1.03, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <div className={`bg-white rounded-xl p-4 border-2 ${stat.color} shadow-md hover:shadow-lg transition-all`}>
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-black text-gray-800 mb-1">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Clean action buttons */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.button
                    onClick={restartGame}
                    className="bg-gradient-to-r from-sobeys-green to-sobeys-dark-green text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">🎮</span>
                    Play Again
                  </motion.button>

                  <Link href="/">
                    <motion.button
                      className="bg-white text-sobeys-green font-bold px-8 py-3 rounded-full border-2 border-sobeys-green hover:bg-sobeys-light-green transition-all flex items-center gap-3 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">🏠</span>
                      Home
                    </motion.button>
                  </Link>
                </div>

                <motion.button
                  onClick={() => {
                    const shareText = `I just scored ${finalScore} points (${grade.grade}) in Recipe Master! 🍳 Can you beat my score?`
                    if (navigator.share) {
                      navigator.share({ text: shareText })
                    } else {
                      navigator.clipboard.writeText(shareText)
                    }
                  }}
                  className="bg-gradient-to-r from-sobeys-orange to-sobeys-red text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">📤</span>
                  Share Your Score
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  const currentQuestion = gameState.questions[gameState.currentQuestion]
  const progress = ((gameState.currentQuestion + 1) / TOTAL_QUESTIONS) * 100

  return (

    <div className="h-screen bg-gradient-to-br from-sobeys-light-green via-white to-sobeys-blue/10 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, ${['var(--sobeys-green)', 'var(--sobeys-orange)'][i]} 0%, transparent 70%)`,
              left: `${30 + i * 40}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-3 py-2 h-full">
        <div className="max-w-3xl mx-auto h-full flex flex-col">

          {/* Ultra-compact header */}
          <motion.div
            className="flex items-center justify-between mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/">
              <motion.button
                className="bg-sobeys-green/20 backdrop-blur-sm text-sobeys-green px-3 py-1 rounded-full font-semibold hover:bg-sobeys-green/30 transition-all border border-sobeys-green/30 text-xs"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ← Back
              </motion.button>
            </Link>

            <div className="text-center">
              <div className="text-sobeys-green/80 text-xs font-medium">Q{gameState.currentQuestion + 1}/{TOTAL_QUESTIONS}</div>
              <div className="text-base font-bold text-sobeys-green">Score: {gameState.score}</div>
            </div>

            <div className="text-right">
              <div className="text-sobeys-green/80 text-xs font-medium">Time</div>
              <motion.div
                className={`text-base font-bold ${timeRemaining <= 10 ? 'text-sobeys-red' : 'text-sobeys-green'}`}
                animate={timeRemaining <= 10 ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                {timeRemaining}s
              </motion.div>
            </div>
          </motion.div>

          {/* Ultra-compact progress bar */}
          <motion.div
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-full bg-sobeys-green/20 rounded-full h-1">
              <motion.div
                className="bg-gradient-to-r from-sobeys-green to-sobeys-blue h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Hint modal overlay */}
          {showHint && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <div className="bg-white rounded-xl p-6 max-w-md mx-4 shadow-2xl border-2 border-sobeys-green">
                <div className="text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="text-lg font-bold text-sobeys-green mb-3">Special Hint</h3>
                  <p className="text-gray-700 mb-4">{currentQuestion.hint}</p>
                  <motion.button
                    onClick={() => setShowHint(false)}
                    className="bg-sobeys-green text-white px-4 py-2 rounded-full font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Got it! 👍
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Ultra-compact game content */}
          <div className="flex-1 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={gameState.currentQuestion}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <div className="relative h-full">
                  <div className="glass rounded-xl p-4 shadow-xl border border-white/20 h-full flex flex-col">

                    {/* Ultra-compact question header with hint button */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1"></div>
                        <motion.div
                          className="text-3xl"
                          animate={{
                            rotate: [0, 2, -2, 0],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {currentQuestion.recipe.emoji}
                        </motion.div>
                        <div className="flex-1 flex justify-end">
                          {!showHint && !showResult && (
                            <motion.button
                              onClick={handleHint}
                              className="bg-gradient-to-r from-sobeys-yellow to-sobeys-orange text-white px-3 py-1 rounded-full font-bold hover:shadow-lg transition-all text-xs"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              💡 Hint
                            </motion.button>
                          )}
                        </div>
                      </div>

                      <motion.h2
                        className="text-lg font-black text-gray-800 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        🔍 Decode this recipe
                      </motion.h2>

                      <motion.div
                        className="text-xs text-gray-600 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="text-sobeys-green font-bold capitalize">{currentQuestion.recipe.cuisine}</span> •
                        <span className="text-sobeys-orange font-bold capitalize">{currentQuestion.recipe.difficulty}</span>
                      </motion.div>
                    </div>

                    {/* Ultra-compact ingredients */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-sm font-bold text-gray-700 mb-2 text-center">🥘 Ingredients:</h3>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {currentQuestion.recipe.ingredients.slice(0, 6).map((ingredient, index) => (
                          <motion.span
                            key={index}
                            className="px-2 py-1 bg-gradient-to-r from-sobeys-yellow to-sobeys-orange text-gray-800 rounded-full text-xs font-semibold shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {ingredient}
                          </motion.span>
                        ))}
                        {currentQuestion.recipe.ingredients.length > 6 && (
                          <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-semibold">
                            +{currentQuestion.recipe.ingredients.length - 6}
                          </span>
                        )}
                      </div>
                    </motion.div>

                    {/* Ultra-compact cooking method */}
                    <motion.div
                      className="mb-4 flex-shrink-0"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="bg-gradient-to-r from-sobeys-light-green to-blue-50 rounded-lg p-3 border border-sobeys-green/20">
                        <h3 className="text-sm font-bold text-gray-700 mb-1 text-center">🔥 Method:</h3>
                        <p className="text-gray-700 text-center text-xs leading-tight line-clamp-2">{currentQuestion.recipe.cookingMethod}</p>
                      </div>
                    </motion.div>

                    {/* Ultra-compact answer options */}
                    <motion.div
                      className="space-y-2 mb-4 flex-1 min-h-0 overflow-y-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswer === option
                        const isCorrect = option === currentQuestion.correctAnswer
                        const showCorrectAnswer = showResult && isCorrect
                        const showWrongAnswer = showResult && isSelected && !isCorrect

                        return (
                          <motion.button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full p-3 text-left rounded-lg border-2 transition-all font-semibold text-sm ${showCorrectAnswer
                              ? 'bg-gradient-to-r from-green-100 to-sobeys-light-green border-sobeys-green text-sobeys-green shadow-md'
                              : showWrongAnswer
                                ? 'bg-gradient-to-r from-red-100 to-pink-100 border-sobeys-red text-sobeys-red shadow-md'
                                : isSelected
                                  ? 'bg-gradient-to-r from-sobeys-light-green to-blue-100 border-sobeys-blue text-sobeys-blue shadow-md'
                                  : 'bg-white border-gray-200 hover:border-sobeys-green hover:bg-sobeys-light-green/30 hover:shadow-md'
                              }`}
                            disabled={showResult}
                            whileHover={!showResult ? { scale: 1.01, y: -1 } : {}}
                            whileTap={!showResult ? { scale: 0.99 } : {}}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.03 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="line-clamp-1">{option}</span>
                              <div className="text-base ml-2">
                                {showCorrectAnswer && '🎉'}
                                {showWrongAnswer && '❌'}
                                {!showResult && isSelected && '👈'}
                              </div>
                            </div>
                          </motion.button>
                        )
                      })}
                    </motion.div>

                    {/* Ultra-compact submit button */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      {!showResult && (
                        <motion.button
                          onClick={() => handleAnswerSubmit()}
                          disabled={!selectedAnswer}
                          className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${selectedAnswer
                            ? 'bg-gradient-to-r from-sobeys-green to-sobeys-dark-green text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          whileHover={selectedAnswer ? { scale: 1.03 } : {}}
                          whileTap={selectedAnswer ? { scale: 0.97 } : {}}
                        >
                          Submit Answer 🚀
                        </motion.button>
                      )}
                    </motion.div>

                    {/* Ultra-compact result message */}
                    {showResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                      >
                        {selectedAnswer === currentQuestion.correctAnswer ? (
                          <div className="bg-gradient-to-r from-green-100 to-sobeys-light-green rounded-lg p-4 border border-sobeys-green">
                            <div className="text-3xl mb-1">🎉</div>
                            <div className="text-lg font-black text-sobeys-green mb-1">Incredible!</div>
                            <div className="text-xs text-sobeys-green">You&apos;re a culinary detective!</div>
                          </div>
                        ) : (
                          <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-4 border border-sobeys-red">
                            <div className="text-3xl mb-1">🤔</div>
                            <div className="text-lg font-black text-sobeys-red mb-1">So close!</div>
                            <div className="text-xs text-sobeys-red">Answer: <span className="font-bold">{currentQuestion.correctAnswer}</span></div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}