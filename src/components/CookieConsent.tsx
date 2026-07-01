import { useEffect, useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { colors } from '../theme'

// Privacy-first, cookieless analytics. The Umami script is only injected once
// the visitor explicitly accepts — declining (or ignoring) means no tracking
// script is ever loaded. Choice is remembered in localStorage.
const CONSENT_KEY = '10n-analytics-consent'
const UMAMI_SRC = 'https://cloud.umami.is/script.js'
const UMAMI_WEBSITE_ID = '970d5108-50f4-4d5b-97ff-ad289bf77be7'

export function loadUmami() {
  if (typeof document === 'undefined') return
  if (document.querySelector(`script[data-website-id="${UMAMI_WEBSITE_ID}"]`)) return
  const s = document.createElement('script')
  s.defer = true
  s.src = UMAMI_SRC
  s.setAttribute('data-website-id', UMAMI_WEBSITE_ID)
  document.head.appendChild(s)
}

function readConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null // localStorage blocked (private mode, etc.) — treat as undecided
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const choice = readConsent()
    if (choice === 'accepted') {
      loadUmami()
    } else if (choice !== 'declined') {
      setVisible(true)
    }
  }, [])

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_KEY, choice)
    } catch {
      // ignore write failures — the banner still dismisses for this session
    }
    if (choice === 'accepted') loadUmami()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Paper
      role="region"
      aria-label="Cookie consent"
      elevation={6}
      sx={{
        position: 'fixed',
        zIndex: (t) => t.zIndex.snackbar,
        left: { xs: 16, md: 24 },
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        mx: 'auto',
        maxWidth: 720,
        p: { xs: 2.5, md: 3 },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { md: 'center' },
        gap: 2,
      }}
    >
      <Typography variant="body2" sx={{ color: colors.cardBody, flex: 1 }}>
        We use privacy-first, cookieless analytics to understand how our site is
        used. No personal data is collected and you are never tracked across
        other sites. The site works exactly the same whichever you choose.
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.25, flexShrink: 0 }}>
        <Button variant="outlined" color="primary" onClick={() => decide('declined')}>
          Decline
        </Button>
        <Button variant="contained" color="primary" onClick={() => decide('accepted')}>
          Accept
        </Button>
      </Box>
    </Paper>
  )
}
