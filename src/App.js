import GlobalStyle from './Utils/globals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';

import { darkTheme } from './Utils/theme'

import Home from './Pages/Home';
import Header from './Components/Header';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Header />

      <Router>
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/freelancer' element={<></>} />
          <Route path='/tickets' element={<></>} />

          <Route path='*' element={<Home />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
