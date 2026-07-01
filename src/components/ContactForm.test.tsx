import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import ContactForm from './ContactForm'
import theme from '../theme'

const renderForm = () =>
  render(
    <ThemeProvider theme={theme}>
      <ContactForm />
    </ThemeProvider>,
  )

const fill = () => {
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Surgeon' } })
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@hospital.org' } })
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Tell me more.' } })
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({ ok: true } as Response)))
})
afterEach(() => vi.unstubAllGlobals())

describe('ContactForm', () => {
  it('renders the name, email and message fields plus a submit button', () => {
    renderForm()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('posts a Netlify-encoded submission and shows the success state', async () => {
    renderForm()
    fill()
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => expect(screen.getByText(/we.?ll be in touch/i)).toBeInTheDocument())

    const [url, opts] = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(url).toBe('/')
    expect(opts.method).toBe('POST')
    expect(opts.headers['Content-Type']).toBe('application/x-www-form-urlencoded')
    expect(opts.body).toContain('form-name=contact')
    expect(opts.body).toContain('name=Jane%20Surgeon')
    expect(opts.body).toContain('email=jane%40hospital.org')
  })

  it('shows an error message when the submission fails', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({ ok: false, status: 500 } as Response)))
    renderForm()
    fill()
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument())
  })
})
