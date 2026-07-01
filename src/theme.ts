import { createTheme } from '@mui/material/styles'

// 10 Newtons brand design system (matches the investor & technology decks)
export const colors = {
  charcoal: '#3D3E44', // primary text
  navy: '#22313A', // dark bands
  teal: '#0E897F', // primary accent
  tealBright: '#34B3A4', // lighter teal for legible accents on dark bands (AA on navy)
  purple: '#7030A0', // secondary accent
  blue: '#5E98F1', // tertiary accent
  card: '#F4F5FA', // card background
  border: '#E3E5EF', // hairline borders
  cardBody: '#53555B', // body text on cards
  tealTint: '#E9F4F2',
  navyLight: '#C5C7D2',
}

const HEAD = '"Montserrat", system-ui, -apple-system, sans-serif'
const BODY = '"Inter", system-ui, -apple-system, sans-serif'

const theme = createTheme({
  palette: {
    primary: { main: colors.teal },
    secondary: { main: colors.purple },
    text: { primary: colors.charcoal, secondary: colors.cardBody },
    divider: colors.border,
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: BODY,
    fontWeightLight: 300,
    h1: { fontFamily: HEAD, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05 },
    h2: { fontFamily: HEAD, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.1 },
    h3: { fontFamily: HEAD, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.15 },
    h4: { fontFamily: HEAD, fontWeight: 600 },
    h5: { fontFamily: HEAD, fontWeight: 600 },
    h6: { fontFamily: HEAD, fontWeight: 600 },
    subtitle1: { fontWeight: 400, lineHeight: 1.6 },
    body1: { fontWeight: 400, lineHeight: 1.65 },
    body2: { fontWeight: 400, lineHeight: 1.6 },
    overline: {
      fontFamily: HEAD,
      fontWeight: 700,
      letterSpacing: '0.22em',
      fontSize: '0.75rem',
    },
    button: { fontFamily: HEAD, fontWeight: 600, textTransform: 'none', letterSpacing: '0.01em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          paddingBlock: 10,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.border}`,
          boxShadow: 'none',
          backgroundColor: colors.card,
        },
      },
    },
    MuiContainer: { defaultProps: { maxWidth: 'lg' } },
  },
})

export default theme
