import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from './Logo'
import { DEMO_MAILTO } from '../data'

// Section links resolve to the home page + hash so they work from any route;
// `page` links are real routes.
const links: { label: string; to: string; page?: boolean }[] = [
  { label: 'How it works', to: '/#how' },
  { label: 'Science', to: '/#science' },
  { label: 'Technology', to: '/technology', page: true },
  { label: 'Team', to: '/#team' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: 72, justifyContent: 'space-between' }}>
          <Box component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {links.map((l) => (
              <Button key={l.to} component={RouterLink} to={l.to} color="inherit" sx={{ color: 'text.primary', fontWeight: 500 }}>
                {l.label}
              </Button>
            ))}
            <Button variant="contained" href={DEMO_MAILTO} sx={{ ml: 1 }}>
              Request a demo
            </Button>
          </Box>
          <IconButton sx={{ display: { xs: 'inline-flex', md: 'none' } }} onClick={() => setOpen(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, pt: 2 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {links.map((l) => (
              <ListItemButton key={l.to} component={RouterLink} to={l.to}>
                <ListItemText primary={l.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href={DEMO_MAILTO}>
              <ListItemText primary="Request a demo" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
