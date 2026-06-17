import { Box, Typography } from '@mui/material'
import { colors } from '../theme'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <Box sx={{ maxWidth: 760, mx: center ? 'auto' : 0, textAlign: center ? 'center' : 'left', mb: { xs: 4, md: 6 } }}>
      <Typography variant="overline" sx={{ color: colors.teal, display: 'block', mb: 1.5 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.4rem' }, color: light ? '#fff' : colors.charcoal }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, fontWeight: 300, fontSize: { xs: '1.05rem', md: '1.2rem' }, color: light ? colors.navyLight : colors.cardBody }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
