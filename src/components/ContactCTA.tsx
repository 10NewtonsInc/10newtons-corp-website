import { Box, Container, Typography, Button } from '@mui/material'
import { colors } from '../theme'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../data'

export default function ContactCTA() {
  return (
    <Box id="contact" sx={{ py: { xs: 9, md: 13 }, bgcolor: colors.navy, color: '#fff' }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: colors.teal }}>
          Get in touch
        </Typography>
        <Typography variant="h3" sx={{ mt: 2, fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 760, mx: 'auto' }}>
          Quantifying surgical mastery.
        </Typography>
        <Typography sx={{ mt: 2.5, color: colors.navyLight, fontWeight: 300, fontSize: '1.15rem', maxWidth: 600, mx: 'auto' }}>
          For institutions, investors and partners who want to put objective skill measurement in front of surgeons.
        </Typography>
        <Button variant="contained" size="large" href={CONTACT_MAILTO} sx={{ mt: 4 }}>
          Contact us
        </Button>
        <Typography sx={{ mt: 2.5, color: colors.navyLight }}>
          or email us at{' '}
          <Box component="a" href={`mailto:${CONTACT_EMAIL}`} sx={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
            {CONTACT_EMAIL}
          </Box>
        </Typography>
      </Container>
    </Box>
  )
}
