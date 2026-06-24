import { Box, Typography } from '@mui/material'
import { colors } from '../theme'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1 }}>
      <Box
        component="img"
        src={light ? '/logo-mark-light.svg' : '/logo-mark.svg'}
        alt=""
        aria-hidden
        sx={{ width: 34, height: 34, display: 'block' }}
      />
      <Typography
        sx={{
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
          letterSpacing: '0.14em',
          fontSize: '1rem',
          color: light ? '#fff' : colors.charcoal,
        }}
      >
        10&nbsp;NEWTONS
      </Typography>
    </Box>
  )
}
