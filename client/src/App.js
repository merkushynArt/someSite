import './App.css';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main.jsx';
import { About } from './pages/About';
import { Vacancies } from './pages/Vacancies';
import { Services } from './pages/Services';
import { Contacts } from './pages/Contacts';
import { Reviews } from './pages/Reviews';

function App() {
   return (
      <Layout>
         <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/vacancies' element={<Vacancies/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/reviews' element={<Reviews/>} />
         </Routes>
      </Layout>
   );
}

export default App;
