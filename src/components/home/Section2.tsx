import React from 'react';
import { Box, Typography } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowImage from '../../image/Home/Arrow.png';

const Section2 = () => {
  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      bgcolor: '#BCE0D1',
      borderRadius: '32px',
      p: 4, 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 1
    }}>

      <Typography variant='h1' sx={{ color: 'black', textTransform: 'uppercase', textAlign: 'left' }}>
        REVEAL YOUR CASUAL STYLE WITH OUR NEW COLLECTION
      </Typography>

      <Box component="img" src={ArrowImage} alt="Arrow" sx={{ position: 'absolute', top: '35%', left: '80%', transform: 'translate(-50%, -50%)', height: '15%', zIndex: 1 }} />

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{
          p: 0.5,
          flex: 1,
          borderRadius: '50px',
          border: '2px solid white',
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.5s',
          ':hover': {
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            transform: 'scale(1.03)',
          },
        }}>
          <Typography variant="h6" sx={{ color: 'black', ml: 2, paddingTop: '2px', }}>
            LEARN MORE
          </Typography>
          <Box sx={{
            borderRadius: '50%',
            p: 1,
            mr: 1,
            bgcolor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            ':hover': {
              bgcolor: 'rgba(0, 0, 0, 0.8)',
            },
          }}>
            <SouthIcon sx={{ color: 'white' }} />
          </Box>
        </Box>
        <Box sx={{
          p: 0.5,
          flex: 1,
          borderRadius: '50px',
          border: '2px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.5s',
          ':hover': {
            bgcolor: 'rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(0, 0, 0, 0.8)',
            transform: 'scale(1.03)',
          },
        }}>
          <Typography variant="h6" sx={{ color: 'black', ml: 2, paddingTop: '2px', }}>
            CONTACT US
          </Typography>
          <Box sx={{
            borderRadius: '50%',
            p: 1,
            mr: 1,
            bgcolor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            ':hover': {
              bgcolor: 'rgba(255, 255, 255, 0.8)',
            },
          }}>
            <EmailOutlinedIcon sx={{ color: 'black' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section2;
