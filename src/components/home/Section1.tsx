import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fon from '../../image/Home/Section1.png';

const Section1 = () => {
  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      bgcolor: 'rgb(147, 144, 135)', 
      borderRadius: '32px',
      p: 4, 
      backgroundImage: `url(${Fon})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Box sx={{ flex: '0 1 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50px',
          border: '2px solid white',
          p: 1
        }}>
          <Typography variant="h6" sx={{ color: 'white', mx: 3, paddingTop: '2px', }}>
            New Collection Arrived
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50px',
          border: '2px solid white',
          p: 1
        }}>
          <Typography variant="h6" sx={{ color: 'white', mx: 3, paddingTop: '2px', }}>
            2024 Spring
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', flex: 1 }}>
            <Typography variant="h1">
              Your
            </Typography>
            <Typography variant="h1">
              Style
            </Typography>
            <Typography variant="h1">
              Speaks.
            </Typography>
          </Box>
          <Box sx={{
            borderRadius: '50px',
            width: '200px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'flex-end',
            bgcolor: '#BCE0D1',
            flex: 1,
            px: 2, 
            cursor: 'pointer',
            transition: 'all 0.3s',
            ':hover': {
              bgcolor: '#A8D1C4',
              transform: 'scale(1.03)',
            },
          }}>
            <Typography variant="h6" sx={{ color: 'black', paddingTop: '2px', }}>
              Next Up
            </Typography>
            <ArrowForwardIcon sx={{ color: 'black' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
