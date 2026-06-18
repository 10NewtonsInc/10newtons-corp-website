import { Box, Container, Typography } from '@mui/material'
import { affiliations } from '../data'
import { colors } from '../theme'

export default function TrustStrip() {
  return (
    <Box sx={{ bgcolor: colors.card, borderBottom: '1px solid', borderColor: 'divider', py: { xs: 3, md: 3.5 } }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 2, md: 5 },
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: colors.cardBody, whiteSpace: 'nowrap', fontSize: '0.7rem' }}
          >
            Grounded in science
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2.5, md: 5 },
            }}
          >
            {affiliations.map((a) => (
              <Box key={a.name}>
                <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 700, color: colors.charcoal, fontSize: '1rem', lineHeight: 1.1 }}>
                  {a.name}
                </Typography>
                <Typography sx={{ color: colors.cardBody, fontSize: '0.78rem' }}>{a.note}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
