import React from 'react';
import { Box, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import ManHat from '../../image/Home/ManHat.png'; 

const Section4 = () => {
  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      bgcolor: 'rgb(127, 124, 115)',
      borderRadius: '32px',
      p: 4,
      position: 'relative',
      backgroundImage: `url(${ManHat})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box 
        sx={{
          position: 'absolute', 
          top: 12, 
          right: 12,
          p: 1,
          bgcolor: 'black',
          borderRadius: '50%',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            bgcolor: 'white', 
            '& svg': {
              color: 'black'
            }
          }
        }}
      >
        <NorthEastIcon sx={{ color: 'white' }} /> 
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ 
          color: '#91DDCF', 
          textTransform: 'uppercase',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
        }}>
          # Trending 2024
        </Typography>
      </Box>

    </Box>
  );
}

export default Section4;
