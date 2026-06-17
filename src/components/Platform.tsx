import { Box, Container, Typography } from '@mui/material'
import SectionHeading from './SectionHeading'
import { platform } from '../data'
import { colors } from '../theme'

const accents = [colors.teal, colors.blue, colors.purple, colors.teal]

export default function Platform() {
  return (
    <Box id="platform" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.card }}>
      <Container>
        <SectionHeading
          eyebrow="Built to scale & pass diligence"
          title="An enterprise platform, not a demo"
          subtitle="The full 10 Newtons stack is engineered, tested and running today — sensor capture, an automated scoring pipeline and a multi-tenant clinical portal, end to end."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {platform.map((p, i) => (
            <Box
              key={p.title}
              sx={{ display: 'flex', gap: 2.5, bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 3 }}
            >
              <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: accents[i], mt: 0.8, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.cardBody }}>
                  {p.body}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
