import { useState } from 'react'
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
import { CONTACT_EMAIL } from '../data'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it works', href: '#how' },
  { label: 'Science', href: '#science' },
  { label: 'Team', href: '#team' },
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
          <Box component="a" href="#top" sx={{ textDecoration: 'none' }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {links.map((l) => (
              <Button key={l.href} href={l.href} color="inherit" sx={{ color: 'text.primary', fontWeight: 500 }}>
                {l.label}
              </Button>
            ))}
            <Button variant="contained" href={`mailto:${CONTACT_EMAIL}`} sx={{ ml: 1 }}>
              Get in touch
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
              <ListItemButton key={l.href} component="a" href={l.href}>
                <ListItemText primary={l.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href={`mailto:${CONTACT_EMAIL}`}>
              <ListItemText primary="Get in touch" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
