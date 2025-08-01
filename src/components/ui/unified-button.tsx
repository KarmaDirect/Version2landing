import React from 'react'
import { cn } from '@/lib/utils'

interface UnifiedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function UnifiedButton({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: UnifiedButtonProps) {
  const baseClasses = "font-bold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl focus:ring-gray-500",
    outline: "bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl focus:ring-green-500",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-500"
  }
  
  const sizes = {
    sm: "py-2 px-4 text-sm rounded-lg",
    md: "py-3 px-6 text-base rounded-xl",
    lg: "py-4 px-8 text-lg rounded-2xl"
  }
  
  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 