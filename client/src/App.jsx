// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/About';
import Updates from './pages/Updates';
import Profs from './pages/Profs/profs';
import Fexam from './pages/ForiegnEx/Fexam';
import Cexam from './pages/CompExams/Cexam';
import AuthAdmin from './pages/AuthAdmin';
import './App.css';


export default function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      {/*Routes Section */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/updates' element={<Updates/>}/>
        <Route path='/profs' element={<Profs/>}/>
        <Route path='/fexam' element={<Fexam/>}/>
        <Route path='/cexam' element={<Cexam/>}/>
        <Route path='/authadmin' element={<AuthAdmin/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
