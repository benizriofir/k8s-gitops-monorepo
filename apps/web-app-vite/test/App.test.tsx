import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'
import React from 'react'

describe('App', () => {
  it('renders the logos', () => {
    render(<App />)
    
    const viteLogoImg = screen.getByRole('img', { name: 'Vite logo' })
    const reactLogoImg = screen.getByRole('img', { name: 'React logo' })
    
    expect(viteLogoImg).toBeInTheDocument()
    expect(reactLogoImg).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<App />)
    
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('updates count when button is clicked', () => {
    render(<App />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('count is !!!1120')
    
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is !!!1121')
    
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is !!!1122')
  })

  it('renders help text', () => {
    render(<App />)
    
    expect(screen.getByText(/Edit.*and save to test HMR/)).toBeInTheDocument()
    expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument()
  })
})