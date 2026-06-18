import { Box, Container, Typography, Button } from '@mui/material'
import SectionHeading from './SectionHeading'
import { productShots, DEMO_MAILTO } from '../data'
import { colors } from '../theme'

export default function ProductShowcase() {
  return (
    <Box id="product" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.navy }}>
      <Container>
        <SectionHeading
          light
          eyebrow="See it in action"
          title="The product, running today"
          subtitle="Not a concept render — the live 10 Newtons portal, turning captured sessions into objective, comparable performance feedback."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 4 }, alignItems: 'start' }}>
          {productShots.map((shot) => (
            <Box key={shot.src}>
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
                  bgcolor: '#fff',
                }}
              >
                <Box component="img" src={shot.src} alt={shot.title} sx={{ width: '100%', display: 'block' }} />
              </Box>
              <Typography sx={{ mt: 2, fontFamily: '"Montserrat"', fontWeight: 600, color: '#fff' }}>
                {shot.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, color: colors.navyLight }}>
                {shot.caption}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Button variant="contained" size="large" href={DEMO_MAILTO}>
            Request a demo
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
