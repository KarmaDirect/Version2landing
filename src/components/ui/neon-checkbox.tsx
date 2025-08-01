import React from 'react'

interface NeonCheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

export function NeonCheckbox({ id, label, checked, onChange, className = '' }: NeonCheckboxProps) {
  return (
    <label className={`checkbox-wrapper ${className}`}>
      <input 
        type="checkbox" 
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="checkmark">
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
            d="M20 6L9 17L4 12"
          ></path>
        </svg>
      </div>
      <span className="label">{label}</span>
    </label>
  )
} 