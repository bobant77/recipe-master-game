'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HowToPlay } from '../Rules/HowToPlay'

const heroFeatures = [
  { icon: '🎯', label: '5 Questions', color: 'from-red-400 to-pink-500' },
  { icon: '⏱️', label: '30 Seconds Each', color: 'from-blue-400 to-cyan-500' },
  { icon: '🌍', label: '10+ Cuisines', color: 'from-green-400 to-emerald-500' },
  { icon: '🏆', label: 'Score & Share', color: 'from-purple-400 to-violet-500' }
]

export function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showHowToPlay, setShowHowToPlay] = useState(false)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const heroY = useTransform(scrollY, [0, 300], [0, 50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative overflow-hidden h-screen">
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-300/20 to-green-300/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -0.015,
              y: mousePosition.y * -0.015,
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {['🍅', '🧄', '🌶️', '🧅', '🥕', '🥬'].map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl lg:text-3xl opacity-5 lg:opacity-10"
              style={{
                left: `${15 + (index * 15)}%`,
                top: `${20 + (index * 12)}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                rotate: [-3, 3, -3],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 h-full">

        <section className="h-full flex items-center justify-center px-4 py-8">
          <motion.div
            style={{ y: heroY }}
            className="max-w-6xl mx-auto text-center"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="mb-6"
            >

              <div className="relative mb-4">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 p-1"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-xl">
                      <motion.div
                        className="text-3xl lg:text-4xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🍳
                      </motion.div>
                    </div>
                  </motion.div>

                  {[0, 90, 180, 270].map((angle, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-xs"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '50% 50px',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.3
                      }}
                      initial={{ rotate: angle }}
                    >
                      {['🌟', '✨', '💫', '⭐'][index]}
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Recipe Master
                </span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700">
                  Culinary Detective Challenge
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed"
              >
                Decode mysterious recipes, discover exotic ingredients, and become the ultimate food detective.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-6"
            >
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-4 border border-white/20 hover:border-purple-200 transition-all group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-2 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-lg lg:text-xl shadow-lg`}
                    whileHover={{ rotate: 15 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="text-xs lg:text-sm font-bold text-gray-800">{feature.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-4"
            >
              <Link href="/game/">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <button className="relative bg-gradient-to-r from-green-600 to-green-700 text-white text-lg lg:text-xl font-bold px-8 py-4 lg:px-10 lg:py-5 rounded-full shadow-2xl flex items-center gap-3 hover:shadow-green-500/25 transition-all">
                      <span className="text-xl lg:text-2xl">🚀</span>
                      Start Your Culinary Adventure
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </button>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center mb-6"
            >
              <motion.button
                onClick={() => setShowHowToPlay(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-green-700 font-medium shadow-md hover:shadow-lg transition-all text-sm lg:text-base"
              >
                <span className="text-lg">📖</span>
                How to Play
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center justify-center space-x-4 lg:space-x-6 text-gray-500"
            >
              {[
                { icon: '🎮', text: 'Free to Play' },
                { icon: '⚡', text: 'Instant Start' },
                { icon: '🌟', text: 'No Registration' },
                { icon: '📱', text: 'Mobile Friendly' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-1 text-xs lg:text-sm font-medium">
                  <span className="text-sm lg:text-base">{feature.icon}</span>
                  <span className="hidden sm:block">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>


        {showHowToPlay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowHowToPlay(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:text-gray-700 transition-colors"
              >
                ×
              </button>
              <HowToPlay />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}