import { Box, Container, Card, CardContent, Typography } from '@mui/material'
import SectionHeading from './SectionHeading'
import { pillars } from '../data'
import { colors } from '../theme'

const accents = [colors.teal, colors.blue, colors.purple, colors.teal]

export default function Pillars() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <SectionHeading
          eyebrow="Discover the Power of Data"
          title="Objective metrics for better surgeons"
          subtitle="Our validated sensor suite integrates with the simulations surgeons already use — delivering performance data that is objective, actionable, mobile and scalable."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {pillars.map((p, i) => (
            <Card key={p.title}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: accents[i], mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.cardBody }}>
                  {p.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
