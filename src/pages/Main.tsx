import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import { lightTheme, darkTheme } from '../utils/theme';
import Navbar from '../components/navbar/Navbar';

const Main = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={theme === darkTheme} />
        <Box sx={{ width: '100%', flexGrow: 1, p: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Main;
