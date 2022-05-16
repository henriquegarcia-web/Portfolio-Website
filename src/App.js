import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />

        {/* <Route path='/login' element={} />
        <Route path='/register' element={} />

        <Route path='/manager' element={} />
        <Route path='/upgrade' element={} />

        <Route path='*' element={} /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
