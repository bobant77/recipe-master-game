'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const gameSteps = [
  {
    step: 1,
    title: 'Analyze the Clues',
    description: 'Study the mystery ingredients and cooking method carefully',
    icon: '🔍',
    details: [
      'Look at the list of ingredients provided',
      'Read the cooking method description',
      'Consider the cuisine type and difficulty level',
      'Think about combinations that make sense'
    ]
  },
  {
    step: 2,
    title: 'Make Your Guess',
    description: 'Choose from 4 multiple choice options within 30 seconds',
    icon: '🎯',
    details: [
      'You have 30 seconds per question',
      'Select from 4 possible recipe names',
      'Use hints if you need extra help',
      'Trust your culinary instincts!'
    ]
  },
  {
    step: 3,
    title: 'Learn & Score',
    description: 'Get instant feedback and build your streak',
    icon: '🏆',
    details: [
      'Correct answers earn points and extend your streak',
      'Wrong answers reveal the correct recipe',
      'Learn about new dishes and cuisines',
      'Aim for the highest score possible!'
    ]
  },
  {
    step: 4,
    title: 'Master the Kitchen',
    description: 'Complete 5 questions and see your final results',
    icon: '👨‍🍳',
    details: [
      'Answer all 5 recipe challenges',
      'Get graded from D to A+ based on performance',
      'Share your score with friends',
      'Play again to improve your skills!'
    ]
  }
]

export function HowToPlay() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="py-6 px-6 max-h-[85vh] overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-black mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            How to Play
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Master the art of recipe recognition in 4 simple steps. Become a culinary detective!
          </p>
        </motion.div>

        {/* Compact Game Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Step Cards - More compact */}
          <div className="space-y-3">
            {gameSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'scale-102' 
                    : 'hover:scale-101'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`glass rounded-xl p-4 border-2 transition-all ${
                  activeStep === index 
                    ? 'border-purple-400 bg-purple-50/50' 
                    : 'border-white/20 hover:border-purple-200'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                      activeStep === index 
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className={`text-xs font-semibold ${
                        activeStep === index ? 'text-purple-600' : 'text-gray-500'
                      }`}>
                        Step {step.step}
                      </div>
                      <h3 className="text-base font-bold text-gray-800">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details - More compact */}
          <div className="lg:sticky lg:top-4">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 border border-white/20"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl">
                  {gameSteps[activeStep].icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {gameSteps[activeStep].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {gameSteps[activeStep].description}
                </p>
              </div>

              <div className="space-y-2">
                {gameSteps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-white/50 rounded-lg"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Compact Scoring System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6 border border-white/20"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
              🏆 Scoring System
            </h3>
            <p className="text-sm text-gray-600">
              Your final score depends on accuracy, speed, and hint usage
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { grade: 'A+', score: '90-100', color: 'from-green-500 to-emerald-500', message: 'Recipe Master!' },
              { grade: 'A', score: '80-89', color: 'from-blue-500 to-cyan-500', message: 'Excellent!' },
              { grade: 'B+', score: '70-79', color: 'from-purple-500 to-violet-500', message: 'Great Job!' },
              { grade: 'B', score: '60-69', color: 'from-yellow-500 to-orange-500', message: 'Good Work!' },
              { grade: 'C', score: '50-59', color: 'from-red-500 to-pink-500', message: 'Keep Trying!' }
            ].map((grade, index) => (
              <motion.div
                key={index}
                className="text-center p-3 bg-white/50 rounded-lg"
                whileHover={{ scale: 1.03, y: -1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${grade.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                  <span className="text-white font-bold text-base">{grade.grade}</span>
                </div>
                <div className="text-xs font-bold text-gray-800">{grade.score}%</div>
                <div className="text-xs text-gray-600 mt-1">{grade.message}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}