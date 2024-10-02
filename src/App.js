import './styles/main.scss';
import Layout from './layout/layout';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout Component={HomePage} />} />
        <Route path='/about' element={<Layout Component={AboutPage} />} />
        <Route path='/contact' element={<Layout Component={ContactPage} />} />
        <Route path='/services' element={<Layout Component={ServicesPage} />} />
        <Route path='*' element={<Layout Component={ErrorPage} />} />

      </Routes>
    </>
  );
}

export default App;
