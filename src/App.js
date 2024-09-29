import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Layout from './layout/layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ErrorPage from './pages/ErrorPage';
import Ex from './ex/Ex';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout Component={Home} />} />
        <Route path='/about' element={<Layout Component={About} />} />
        <Route path='/contact' element={<Layout Component={Contact} />} />
        <Route path='/services' element={<Layout Component={Services} />} />
        <Route path='*' element={<Layout Component={ErrorPage} />} />
        <Route path='/ex' element={<Layout Component={Ex} />} />

      </Routes>
    </>
  );
}

export default App;
