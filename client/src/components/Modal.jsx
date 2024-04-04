import { Modal, Box, Button, Fade } from '@mui/material'
import { Link } from 'react-router-dom'

const StyledModal = ({ open, handleClose }) => {
  const style = {
    display: 'flex',
    bgcolor: '#fff',
    height: '40em',
    width: '40em',
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 24,
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
            component={Link}
            to="/register/farmer"
            onClick={handleClose}
          >
            Farmer Registration
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40, margin: 4 }}
            component={Link}
            to="/register/backpacker"
            onClick={handleClose}
          >
            Backpacker Registration
          </Button>
        </Box>
      </Fade>
    </Modal>
  )
}

export default StyledModal
