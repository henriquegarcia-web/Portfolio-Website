import { useState } from 'react';
import GlobalStyle from './Utils/globals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './Utils/theme'

import Home from './Pages/Home';
// import InProgressPage from './Pages/InProgress';

function App() {

  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />

      <Router>
        <Routes>

          <Route path='/' exact element={<Home themeToggler={themeToggler} activeView='home' />} />
          <Route path='/home' element={<Home themeToggler={themeToggler} activeView='home' />} />
          <Route path='/sobre-mim' element={<Home themeToggler={themeToggler} activeView='about_me' />} />
          <Route path='/meus-conhecimentos' element={<Home themeToggler={themeToggler} activeView='my_knowledges' />} />
          <Route path='/meus-projetos' element={<Home themeToggler={themeToggler} activeView='my_projects' />} />

          <Route path='*' element={<Home themeToggler={themeToggler} />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
