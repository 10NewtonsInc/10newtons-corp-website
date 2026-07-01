import { Box, Container, Typography } from '@mui/material'
import { colors } from '../theme'
import { CONTACT_EMAIL } from '../data'
import ContactForm from './ContactForm'

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
          For institutions, investors and partners who know that you cannot improve what you cannot measure.
        </Typography>
        <ContactForm />
        <Typography sx={{ mt: 3, color: colors.navyLight }}>
          or email us directly at{' '}
          <Box component="a" href={`mailto:${CONTACT_EMAIL}`} sx={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>
            {CONTACT_EMAIL}
          </Box>
        </Typography>
      </Container>
    </Box>
  )
}
