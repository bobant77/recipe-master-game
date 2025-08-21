import { forwardRef } from 'react'
import { motion, type HTMLMotionProps, type TargetAndTransition } from 'framer-motion'
import { cn } from '@/lib/utils'



interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, disabled, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary:
        'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25 border-0',
      secondary:
        'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm',
      outline:
        'border-2 border-green-500 text-green-600 hover:bg-green-50 bg-transparent',
      ghost:
        'text-gray-600 hover:text-green-600 hover:bg-green-50 bg-transparent border-0'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3'
    }

    const hoverAnimations: Record<string, TargetAndTransition> = {
      primary: {
        scale: 1.02,
        y: -1,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      },
      secondary: {
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      },
      outline: {
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      },
      ghost: {
        scale: 1.05,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }
    }

    const tapAnimations: TargetAndTransition = {
      scale: 0.98,
      transition: { type: 'spring', stiffness: 400, damping: 25 }
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={!disabled ? hoverAnimations[variant] : undefined}
        whileTap={!disabled ? tapAnimations : undefined}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
