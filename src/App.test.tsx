import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { describe, it, expect } from 'vitest'
import App from './App'
import theme from './theme'

const renderApp = () =>
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  )

describe('Corporate site', () => {
  it('renders the hero headline', () => {
    renderApp()
    expect(screen.getByRole('heading', { level: 1, name: /quantified surgeon/i })).toBeInTheDocument()
  })

  it('shows the brand wordmark and contact email', () => {
    renderApp()
    expect(screen.getAllByText(/10\s*NEWTONS/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/hello@10newtons\.com/i).length).toBeGreaterThan(0)
  })

  it('renders the five-step journey and the team', () => {
    renderApp()
    expect(screen.getByRole('heading', { name: /from the operating field/i })).toBeInTheDocument()
    expect(screen.getByText(/Carla Pugh/i)).toBeInTheDocument()
    expect(screen.getByText(/Erwan Rivet/i)).toBeInTheDocument()
  })
})
