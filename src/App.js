import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import DetailEvennt from './pages/DetailEvent';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/detail-event/:id" element={<DetailEvennt />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
