import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { colors } from '../theme'
import { CONTACT_MAILTO, stats } from '../data'

export default function Hero() {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: colors.navy,
        color: '#fff',
        pt: { xs: 9, md: 14 },
        pb: { xs: 9, md: 13 },
      }}
    >
      {/* brand accent glows */}
      <Box
        sx={{
          position: 'absolute',
          top: -160,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.teal}55 0%, transparent 68%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -180,
          left: -140,
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.purple}44 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Container sx={{ position: 'relative' }}>
        <Typography variant="overline" sx={{ color: colors.teal }}>
          Quantifying Surgical Mastery
        </Typography>
        <Typography
          variant="h1"
          sx={{ mt: 2, fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.4rem' }, maxWidth: 1000 }}
        >
          The Quantified Surgeon.
        </Typography>
        <Typography
          sx={{
            mt: 3,
            maxWidth: 720,
            fontWeight: 300,
            fontSize: { xs: '1.1rem', md: '1.35rem' },
            color: colors.navyLight,
          }}
        >
          10 Newtons is the first SaaS platform that turns any recorded procedure into objective,
          comparable measures of surgical skill — from the brain to the hands.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4.5 }}>
          <Button variant="contained" size="large" href={CONTACT_MAILTO}>
            Contact us
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#how"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', '&:hover': { borderColor: '#fff' } }}
          >
            See how it works
          </Button>
        </Stack>

        <Box
          sx={{
            mt: { xs: 6, md: 9 },
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {stats.map((s) => (
            <Box key={s.label}>
              <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 700, fontSize: '2.2rem', color: colors.teal }}>
                {s.value}
              </Typography>
              <Typography sx={{ color: colors.navyLight, fontWeight: 300 }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
