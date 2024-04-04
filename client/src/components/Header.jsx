import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  MenuItem,
  Menu,
  IconButton,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import StyledModal from './Modal'

const Header = ({ user, logoutHandler }) => {
  const [anchorElement, setAnchorElement] = useState(null)
  const handleMenu = event => setAnchorElement(event.currentTarget)
  const handleClose = () => setAnchorElement(null)

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const menuPages = [
    ...(user && user.role === 'Farmer'
      ? [
          {
            title: 'Farmer Dashboard',
            link: '/farmer',
          },
        ]
      : []),
    ...(user && user.role === 'Backpacker'
      ? [
          {
            title: 'Backpacker Dashboard',
            link: '/backpacker',
          },
        ]
      : []),
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>

          {menuPages.length > 0 && (
            <Menu
              id="menu-appbar"
              anchorEl={anchorElement}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElement)}
              onClose={handleClose}
            >
              {menuPages.map(({ title, link }) => (
                <MenuItem
                  key={title}
                  component={Link}
                  to={link}
                  onClick={handleClose}
                >
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="home"
              sx={{ my: 2, color: 'white', display: 'block' }}
              component={Link}
              to="/"
            >
              Farmers Backpackers
            </Button>
          </Box>

          {user ? (
            <Box>
              <IconButton component={Link} to="/profile" sx={{ p: 0 }}>
                <Avatar
                  alt="User profile"
                  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                />
              </IconButton>

              <Button
                key="home"
                sx={{ my: 2, color: 'white' }}
                onClick={() => logoutHandler()}
              >
                logout
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                key="login"
                sx={{ my: 2, color: 'white' }}
                component={Link}
                to="/login"
              >
                Login
              </Button>

              <Button
                key="signup"
                sx={{ my: 2, color: 'white' }}
                onClick={handleModalOpen}
              >
                Sign Up
              </Button>
              <StyledModal open={modalOpen} handleClose={handleModalClose} />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
