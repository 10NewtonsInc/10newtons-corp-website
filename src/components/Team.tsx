import { Box, Container, Typography, Avatar } from '@mui/material'
import SectionHeading from './SectionHeading'
import { team } from '../data'
import { colors } from '../theme'

const palette = [colors.teal, colors.purple, colors.blue, colors.navy]

function initials(name: string) {
  return name
    .replace(/,.*$/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <Box id="team" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <SectionHeading
          eyebrow="Meet the team"
          title="Built by clinicians, scientists and operators"
          subtitle="Precision learning and data sharing through wearable technology — led by people who have defined the science and scaled regulated medtech before."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {team.map((m, i) => (
            <Box
              key={m.name}
              sx={{
                display: 'flex',
                gap: 2.5,
                bgcolor: colors.card,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                p: 3,
                alignItems: 'flex-start',
              }}
            >
              <Avatar
                src={m.photo}
                alt={m.name}
                sx={{
                  width: 96,
                  height: 96,
                  flexShrink: 0,
                  bgcolor: palette[i % palette.length],
                  fontFamily: '"Montserrat"',
                  fontWeight: 700,
                  fontSize: '1.4rem',
                }}
              >
                {initials(m.name)}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontSize: '1.2rem', lineHeight: 1.2 }}>
                  {m.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Montserrat"',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: colors.teal,
                    mt: 0.5,
                    mb: 1.25,
                  }}
                >
                  {m.role}
                  {m.org ? ` · ${m.org}` : ''}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.cardBody }}>
                  {m.bio}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
