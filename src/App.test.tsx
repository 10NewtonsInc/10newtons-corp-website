import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'
import theme from './theme'

const renderAt = (path = '/') =>
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </ThemeProvider>,
  )

describe('Corporate site', () => {
  it('renders the hero headline on the home page', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: /quantified surgeon/i })).toBeInTheDocument()
  })

  it('shows the brand wordmark and contact email', () => {
    renderAt('/')
    expect(screen.getAllByText(/10\s*NEWTONS/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/hello@10newtons\.com/i).length).toBeGreaterThan(0)
  })

  it('renders the five-step journey and the team', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { name: /from the operating field/i })).toBeInTheDocument()
    expect(screen.getByText(/Carla Pugh/i)).toBeInTheDocument()
    expect(screen.getByText(/Reto Matter/i)).toBeInTheDocument()
  })

  it('renders the dedicated technology page', () => {
    renderAt('/technology')
    expect(screen.getByRole('heading', { level: 1, name: /platform behind objective/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /four production services/i })).toBeInTheDocument()
  })
})
