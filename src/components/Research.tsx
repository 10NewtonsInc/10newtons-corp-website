import { Box, Container, Typography, Link, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import SectionHeading from './SectionHeading'
import { research, researchGroups } from '../data'
import { colors } from '../theme'

export default function Research() {
  return (
    <Box id="research" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.card }}>
      <Container>
        <SectionHeading
          eyebrow="Backed by the science"
          title="Two decades of peer-reviewed research"
          subtitle="Objective, sensor-based measurement of clinical skill isn't a hunch — it's a field our founder, Dr. Carla Pugh, helped build. From complex operative procedures to physical exams at the bedside, the work spans the specialty boards. Recognized by election to the National Academy of Medicine."
        />
        {researchGroups.map((group) => {
          const papers = research.filter((p) => p.category === group.category)
          if (papers.length === 0) return null
          return (
            <Box key={group.category} sx={{ mb: { xs: 5, md: 6 }, '&:last-of-type': { mb: 0 } }}>
              <Typography
                sx={{ fontFamily: '"Montserrat"', fontWeight: 700, fontSize: '1.25rem', color: colors.charcoal, mb: 0.5 }}
              >
                {group.category}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.cardBody, mb: 2.5, maxWidth: 760 }}>
                {group.blurb}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                  gap: 3,
                }}
              >
                {papers.map((p) => (
                  <Box
                    key={p.url}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: '#fff',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      p: 3,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                      <Chip
                        label={p.journal}
                        size="small"
                        sx={{ fontFamily: '"Montserrat"', fontWeight: 600, fontSize: '0.7rem', color: colors.teal, bgcolor: colors.tealTint }}
                      />
                      <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 600, fontSize: '0.8rem', color: colors.cardBody }}>
                        {p.year}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 600, fontSize: '1rem', lineHeight: 1.25, mb: 1 }}>
                      {p.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.cardBody, mb: 2, flexGrow: 1 }}>
                      {p.note}
                    </Typography>
                    <Link
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: colors.teal, fontFamily: '"Montserrat"', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      View on PubMed
                      <ArrowForwardIcon sx={{ fontSize: '0.95rem' }} />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          )
        })}
        <Typography variant="body2" sx={{ mt: 4, color: colors.cardBody, fontStyle: 'italic' }}>
          Selected publications. Citations verified against PubMed; full author lists on each linked record.
        </Typography>
      </Container>
    </Box>
  )
}
