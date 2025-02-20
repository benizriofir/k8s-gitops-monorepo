import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

describe('Home Page', () => {
  it('renders deploy section', () => {
    render(<Page />)
    expect(screen.getByText('Deploy now')).toBeDefined()
  })
}) 