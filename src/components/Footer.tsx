import { Box, Container, Typography, Link, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Logo from './Logo'
import { CONTACT_EMAIL } from '../data'
import { colors } from '../theme'

const links = [
  { label: 'How it works', to: '/#how' },
  { label: 'Science', to: '/#science' },
  { label: 'Technology', to: '/technology' },
  { label: 'Team', to: '/#team' },
]

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1a262d', color: '#fff', py: 6 }}>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}
        >
          <Logo light />
          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap' }}>
            {links.map((l) => (
              <Link key={l.to} component={RouterLink} to={l.to} underline="hover" sx={{ color: colors.navyLight }}>
                {l.label}
              </Link>
            ))}
            <Link href={`mailto:${CONTACT_EMAIL}`} underline="hover" sx={{ color: colors.navyLight }}>
              {CONTACT_EMAIL}
            </Link>
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{ mt: 4, color: 'rgba(255,255,255,0.45)' }}>
          © {new Date().getFullYear()} 10 Newtons, Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
