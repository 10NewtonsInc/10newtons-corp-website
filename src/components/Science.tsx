import { Box, Container, Typography } from '@mui/material'
import SectionHeading from './SectionHeading'
import { cognitive, motor } from '../data'
import { colors } from '../theme'

function Panel({ data, accent }: { data: typeof cognitive; accent: string }) {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: colors.card,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        overflow: 'hidden',
        p: { xs: 3, md: 4 },
        pl: { xs: 3.5, md: 4.5 },
      }}
    >
      <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, bgcolor: accent }} />
      <Typography variant="h5" sx={{ color: accent, mb: 3 }}>
        {data.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {data.rows.map(([name, sub]) => (
          <Box key={name} sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5 }}>
            <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: accent, mt: 0.7, flexShrink: 0 }} />
            <Typography component="span" sx={{ fontFamily: '"Montserrat"', fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography component="span" sx={{ color: colors.cardBody }}>
              {sub}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="body2" sx={{ mt: 3, fontStyle: 'italic', color: colors.charcoal, opacity: 0.6 }}>
        {data.foot}
      </Typography>
    </Box>
  )
}

export default function Science() {
  return (
    <Box id="science" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <SectionHeading
          eyebrow="The science, operationalized"
          title="Objective biomarkers, computed automatically"
          subtitle="Eight per-phase metrics derived from raw signal — versioned, reproducible, and traceable back to the moment they were measured."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          <Panel data={cognitive} accent={colors.teal} />
          <Panel data={motor} accent={colors.purple} />
        </Box>
        <Box
          sx={{
            mt: 4,
            bgcolor: colors.navy,
            color: '#fff',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            A reliable skill read in the first minutes of any procedure
          </Typography>
          <Typography sx={{ color: colors.navyLight, fontWeight: 300 }}>
            Every metric is time-aligned to the procedure video, so a spike in workload maps to the exact maneuver that caused it.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
