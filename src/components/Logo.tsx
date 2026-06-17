import { Box, Typography } from '@mui/material'
import { colors } from '../theme'

export default function Logo({ light = false }: { light?: boolean }) {
  const dot = (c: string) => (
    <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: c }} />
  )
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ display: 'flex', gap: 0.6 }}>
        {dot(colors.teal)}
        {dot(colors.purple)}
        {dot(colors.blue)}
      </Box>
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
