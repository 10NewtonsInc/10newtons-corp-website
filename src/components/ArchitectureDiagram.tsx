import { Box } from '@mui/material'
import { colors } from '../theme'

// Public-safe architecture diagram: the four production services and the
// shared data store, with the direction of data flow. No internal mechanics.
const nodes = [
  { n: '01', title: 'Capture App', x: 20, accent: colors.teal },
  { n: '02', title: 'API Backend', x: 280, accent: colors.blue },
  { n: '03', title: 'Insights Worker', x: 540, accent: colors.purple },
  { n: '04', title: 'Clinical Portal', x: 800, accent: colors.teal },
]
const W = 220
const NY = 56
const NH = 76
const MID = NY + NH / 2
const arrows = [
  { from: 0, label: 'upload' },
  { from: 1, label: 'queue' },
  { from: 2, label: 'scores' },
]

export default function ArchitectureDiagram() {
  return (
    <Box sx={{ width: '100%', mb: 1 }}>
      <Box
        component="svg"
        viewBox="0 0 1040 250"
        role="img"
        aria-label="10 Newtons architecture: Capture App to API Backend to Insights Worker to Clinical Portal, over a shared PostgreSQL data store"
        sx={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {/* arrows + labels */}
        {arrows.map((a) => {
          const ax = nodes[a.from].x + W + 4
          const bx = nodes[a.from + 1].x - 4
          const midX = (ax + bx) / 2
          return (
            <g key={a.label}>
              <line x1={ax} y1={MID} x2={bx - 8} y2={MID} stroke="#B6BCCB" strokeWidth={2.5} />
              <polygon points={`${bx},${MID} ${bx - 9},${MID - 5} ${bx - 9},${MID + 5}`} fill="#B6BCCB" />
              <text x={midX} y={MID - 12} textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize={12} fontWeight={600} fill={colors.cardBody}>
                {a.label}
              </text>
            </g>
          )
        })}

        {/* connectors from API + Worker down to the data store */}
        {[1, 2].map((i) => (
          <line key={i} x1={nodes[i].x + W / 2} y1={NY + NH} x2={nodes[i].x + W / 2} y2={170} stroke="#B6BCCB" strokeWidth={2.5} />
        ))}

        {/* nodes */}
        {nodes.map((nd) => (
          <g key={nd.n}>
            <rect x={nd.x} y={NY} width={W} height={NH} rx={12} fill={colors.card} stroke={colors.border} strokeWidth={1.5} />
            <circle cx={nd.x + 36} cy={NY + NH / 2} r={17} fill={nd.accent} />
            <text x={nd.x + 36} y={NY + NH / 2 + 4} textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize={12} fontWeight={700} fill="#fff">
              {nd.n}
            </text>
            <text x={nd.x + 64} y={NY + NH / 2 + 5} fontFamily="Montserrat, sans-serif" fontSize={17} fontWeight={600} fill={colors.charcoal}>
              {nd.title}
            </text>
          </g>
        ))}

        {/* PostgreSQL data store */}
        <rect x={280} y={170} width={480} height={54} rx={12} fill={colors.navy} />
        <text x={520} y={193} textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize={15} fontWeight={600} fill="#fff">
          PostgreSQL
        </text>
        <text x={520} y={212} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={12} fill="#C5C7D2">
          one secure, multi-tenant system of record
        </text>
      </Box>
    </Box>
  )
}
