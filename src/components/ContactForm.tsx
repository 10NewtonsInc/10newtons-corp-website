import { useState } from 'react'
import type { FormEvent } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { colors } from '../theme'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FORM_NAME = 'contact'

// Netlify Forms expects a urlencoded POST to the site root with a form-name
// field matching the static form declared in index.html.
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '', 'bot-field': '' })
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: string) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...values }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Box
      sx={{
        mt: 5,
        mx: 'auto',
        maxWidth: 540,
        bgcolor: '#fff',
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        textAlign: 'left',
        boxShadow: '0 18px 50px rgba(0,0,0,0.28)',
      }}
    >
      {status === 'success' ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" sx={{ color: colors.teal }}>
            Thanks — we&rsquo;ll be in touch.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: colors.cardBody }}>
            Your message is on its way to the 10 Newtons team.
          </Typography>
        </Box>
      ) : (
        <Box
          component="form"
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
        >
          {/* Netlify plumbing: form-name matches index.html; bot-field is a honeypot */}
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <Box sx={{ display: 'none' }} aria-hidden="true">
            <input
              name="bot-field"
              tabIndex={-1}
              autoComplete="off"
              value={values['bot-field']}
              onChange={update('bot-field')}
            />
          </Box>

          <TextField
            name="name"
            label="Name"
            required
            value={values.name}
            onChange={update('name')}
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            value={values.email}
            onChange={update('email')}
            fullWidth
          />
          <TextField
            name="message"
            label="Message"
            required
            value={values.message}
            onChange={update('message')}
            fullWidth
            multiline
            minRows={4}
          />
          {status === 'error' && (
            <Typography variant="body2" sx={{ color: '#C0392B' }}>
              Something went wrong — please email us directly at contact@10newtons.com.
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={status === 'submitting'}
            sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' } }}
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </Button>
        </Box>
      )}
    </Box>
  )
}
