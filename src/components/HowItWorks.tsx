import { Box, Container, Typography } from '@mui/material'
import SectionHeading from './SectionHeading'
import { steps } from '../data'
import { colors } from '../theme'

export default function HowItWorks() {
  return (
    <Box id="how" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.card }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: { xs: 3, md: 6 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <SectionHeading
              eyebrow="How it works"
              title="From the operating room to better surgeons"
              subtitle="One continuous workflow turns any recorded session into objective, comparable performance feedback."
            />
          </Box>
          <Box
            component="img"
            src="/surgeon-gear.png"
            alt="A surgeon wearing the 10 Newtons EEG headband and wrist motion sensor"
            sx={{
              width: { xs: 200, sm: 240, md: 300 },
              height: 'auto',
              flexShrink: 0,
              alignSelf: 'center',
              mb: { md: 4 },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
            gap: 2.5,
          }}
        >
          {steps.map((s) => (
            <Box
              key={s.n}
              sx={{
                position: 'relative',
                bgcolor: '#fff',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: colors.teal,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Montserrat"',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {s.n}
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontSize: '1.15rem' }}>
                {s.title}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.cardBody }}>
                {s.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
