import { Box, Container, Typography } from '@mui/material'
import { colors } from '../theme'
import SectionHeading from '../components/SectionHeading'
import ContactCTA from '../components/ContactCTA'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import { techStats, services, security, cloud, dataJourney, differentiators } from '../data'

function TechHero() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: colors.navy, color: '#fff', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 11 } }}>
      <Box
        sx={{
          position: 'absolute',
          top: -160,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.teal}4d 0%, transparent 68%)`,
          pointerEvents: 'none',
        }}
      />
      <Container sx={{ position: 'relative' }}>
        <Typography variant="overline" sx={{ color: colors.teal }}>
          Technology
        </Typography>
        <Typography variant="h1" sx={{ mt: 2, fontSize: { xs: '2.3rem', sm: '3rem', md: '3.6rem' }, maxWidth: 900 }}>
          The platform behind objective surgical-skill measurement.
        </Typography>
        <Typography sx={{ mt: 3, maxWidth: 720, fontWeight: 300, fontSize: { xs: '1.05rem', md: '1.25rem' }, color: colors.navyLight }}>
          Engineered, tested and running today — sensor capture, an automated scientific scoring
          pipeline, and a secure multi-tenant clinical portal, end to end.
        </Typography>
        <Box sx={{ mt: { xs: 5, md: 7 }, pt: 4, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
          {techStats.map((s) => (
            <Box key={s.label}>
              <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 700, fontSize: '2rem', color: colors.teal }}>{s.value}</Typography>
              <Typography sx={{ color: colors.navyLight, fontWeight: 300, fontSize: '0.95rem' }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Architecture() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <SectionHeading
          eyebrow="How it's built"
          title="Four production services, one system of record"
          subtitle="Data travels from the operating field to objective insight through independently deployable services, coordinated by a single database."
        />
        <Box sx={{ bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: { xs: 2, md: 4 }, mb: 3 }}>
          <ArchitectureDiagram />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {services.map((s) => (
            <Box key={s.n} sx={{ bgcolor: colors.card, border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 3 }}>
              <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 700, color: colors.teal, mb: 1 }}>{s.n}</Typography>
              <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 1 }}>{s.title}</Typography>
              <Typography variant="body2" sx={{ color: colors.cardBody }}>{s.body}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function DataJourney() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.card }}>
      <Container>
        <SectionHeading
          eyebrow="End to end"
          title="From sensor to insight"
          subtitle="A single session flows through five stages — durable at every step, so no data is lost between the operating field and the dashboard."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }, gap: 2 }}>
          {dataJourney.map((s) => (
            <Box key={s.n} sx={{ position: 'relative', bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 2.5 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: colors.teal, position: 'absolute', top: 18, right: 18 }} />
              <Typography sx={{ fontFamily: '"Montserrat"', fontWeight: 700, color: colors.teal, mb: 0.5 }}>{s.n}</Typography>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 1 }}>{s.title}</Typography>
              <Typography variant="body2" sx={{ color: colors.cardBody, fontSize: '0.9rem' }}>{s.body}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Differentiators() {
  const accents = [colors.teal, colors.purple, colors.blue, colors.teal]
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <SectionHeading
          eyebrow="What sets it apart"
          title="Not a score at the end — insight in the moment"
          subtitle="The platform connects what the brain and hands were doing to exactly when it happened, and to what mastery looks like."
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
          {differentiators.map((d, i) => (
            <Box key={d.title} sx={{ position: 'relative', bgcolor: colors.card, border: '1px solid', borderColor: 'divider', borderRadius: 3, p: { xs: 3, md: 3.5 }, pl: { xs: 3.25, md: 3.75 }, overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, bgcolor: accents[i % accents.length] }} />
              <Typography variant="h6" sx={{ fontSize: '1.2rem', mb: 1 }}>{d.title}</Typography>
              <Typography variant="body2" sx={{ color: colors.cardBody }}>{d.body}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function CardGrid({ eyebrow, title, subtitle, items, tinted }: { eyebrow: string; title: string; subtitle: string; items: { title: string; body: string }[]; tinted?: boolean }) {
  const accents = [colors.teal, colors.blue, colors.purple, colors.teal]
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: tinted ? colors.card : 'transparent' }}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {items.map((it, i) => (
            <Box key={it.title} sx={{ display: 'flex', gap: 2.5, bgcolor: tinted ? '#fff' : colors.card, border: '1px solid', borderColor: 'divider', borderRadius: 3, p: 3 }}>
              <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: accents[i % accents.length], mt: 0.8, flexShrink: 0 }} />
              <Box>
                <Typography variant="h6" sx={{ mb: 0.5, fontSize: '1.1rem' }}>{it.title}</Typography>
                <Typography variant="body2" sx={{ color: colors.cardBody }}>{it.body}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default function Technology() {
  return (
    <>
      <TechHero />
      <Architecture />
      <DataJourney />
      <Differentiators />
      <CardGrid
        eyebrow="Security & compliance"
        title="Defense in depth, audit-ready"
        subtitle="Layered authentication, encryption and least-privilege access across every surface — and a deliberate posture on clinical data."
        items={security}
        tinted
      />
      <CardGrid
        eyebrow="Cloud & reliability"
        title="A real cloud foundation, built to run unattended"
        subtitle="Multi-account isolation, infrastructure as code, and self-healing job processing with live observability."
        items={cloud}
      />
      <ContactCTA />
    </>
  )
}
