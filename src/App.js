import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './Utils/theme'

import Home from './Pages/Home';

function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <Routes>

          <Route path='/' exact element={<Home themeToggler={themeToggler} />} />
          <Route path='/home' element={<Home themeToggler={themeToggler} />} />

          <Route path='*' element={<Home themeToggler={themeToggler} />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
