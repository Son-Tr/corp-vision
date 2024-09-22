import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Layout from './layout/layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout Component={Home} />} />
        <Route path='/about' element={<Layout Component={About} />} />
        <Route path='/contact' element={<Layout Component={Contact} />} />
        <Route path='/services' element={<Layout Component={Services} />} />
        <Route path='*' element={<Layout Component={ErrorPage} />} />

      </Routes>
    </div>
  );
}

export default App;
