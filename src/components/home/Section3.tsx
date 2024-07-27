import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const Section3 = () => {
  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      bgcolor: '#242424', 
      borderRadius: '32px',
      p: 4, 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box 
        sx={{
          position: 'absolute', 
          top: 12, 
          right: 12,
          p: 1,
          bgcolor: 'white', 
          borderRadius: '50%',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          cursor: 'pointer', 
          transition: 'background-color 0.3s, color 0.3s', 
          '&:hover': {
            bgcolor: '#B0BEC5', 
            '& svg': {
              color: '#FFFFFF' 
            }
          }
        }}
      >
        <NorthEastIcon sx={{ color: '#242424' }} /> 
      </Box>
      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ color: 'white' }}>
          New Surprise!
        </Typography>
        <Divider sx={{ width: '80%', bgcolor: 'white', height: 2, mt: 2 }} />
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          width: '100%',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'flex-end',
            flex: 1,
          }}>
            <Typography variant="h1" sx={{ color: 'white', alignSelf: 'flex-start' }}>
              Retro
            </Typography>
          </Box>

           <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
            flex: 1,
          }}>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          width: '100%',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
            flex: 1,
          }}>
          </Box>

           <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'flex-start',
            flex: 1,
          }}>
            <Typography variant="h1" sx={{ color: 'white', alignSelf: 'flex-end' }}>
              Outfit
            </Typography>
          </Box>
        </Box>

      </Box>

    </Box>
  );
}

export default Section3;
