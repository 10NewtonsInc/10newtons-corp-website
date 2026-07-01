import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import CookieConsent from './CookieConsent'
import theme from '../theme'

const WEBSITE_ID = '970d5108-50f4-4d5b-97ff-ad289bf77be7'
const umamiScript = () => document.querySelector(`script[data-website-id="${WEBSITE_ID}"]`)

const renderBanner = () =>
  render(
    <ThemeProvider theme={theme}>
      <CookieConsent />
    </ThemeProvider>,
  )

// jsdom's built-in localStorage is unreliable across versions; use a simple
// Map-backed stub so persistence assertions are deterministic.
beforeEach(() => {
  const store = new Map<string, string>()
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
    setItem: (k: string, v: string) => void store.set(k, String(v)),
    removeItem: (k: string) => void store.delete(k),
    clear: () => store.clear(),
  })
  umamiScript()?.remove()
})

afterEach(() => vi.unstubAllGlobals())

describe('CookieConsent', () => {
  it('shows the consent banner when no choice has been made', () => {
    renderBanner()
    expect(screen.getByRole('region', { name: /cookie consent/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /decline/i })).toBeInTheDocument()
    expect(umamiScript()).toBeNull() // nothing loaded until the user decides
  })

  it('loads Umami and hides the banner on Accept', () => {
    renderBanner()
    fireEvent.click(screen.getByRole('button', { name: /accept/i }))
    expect(localStorage.getItem('10n-analytics-consent')).toBe('accepted')
    const script = umamiScript()
    expect(script).not.toBeNull()
    expect(script).toHaveAttribute('src', 'https://cloud.umami.is/script.js')
    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument()
  })

  it('does NOT load Umami and hides the banner on Decline', () => {
    renderBanner()
    fireEvent.click(screen.getByRole('button', { name: /decline/i }))
    expect(localStorage.getItem('10n-analytics-consent')).toBe('declined')
    expect(umamiScript()).toBeNull()
    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument()
  })

  it('stays hidden and loads Umami when consent was previously accepted', () => {
    localStorage.setItem('10n-analytics-consent', 'accepted')
    renderBanner()
    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument()
    expect(umamiScript()).not.toBeNull()
  })

  it('stays hidden and loads nothing when consent was previously declined', () => {
    localStorage.setItem('10n-analytics-consent', 'declined')
    renderBanner()
    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument()
    expect(umamiScript()).toBeNull()
  })
})
