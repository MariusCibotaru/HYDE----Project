import React from 'react';
import { Box, Grid } from '@mui/material';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';

const Home = () => {
  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        gap: 2,
        }} 
    >
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flex: 1
        }}>
            <Section1/>
        </Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width:' 100%',
            flex: 1,
            gap: 2
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:' 100%',
                flex: 1
            }}>
                <Section2 />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width:' 100%',
                flex: 1,
                gap: 2
            }}>
                <Section3 />
                <Section4 />
            </Box>
        </Box>
    </Box>
  );
}

export default Home;
