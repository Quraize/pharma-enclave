// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Updates from './pages/Updates';
import Profs from './pages/Profs/profs';
import Fexam from './pages/ForiegnEx/Fexam';
import Cexam from './pages/CompExams/Cexam';
import AuthAdmin from './pages/AuthAdmin';
import Admin from './pages/Admin';
import './App.css';
import AdminDashboard from './components/AdminComp/AdminPages/AdminDashboard';
import Announcement from './components/AdminComp/AdminPages/Announcement';
//to add subject from admin side
import Prof1 from './components/AdminComp/AdminPages/AddSubject/Profs/Prof1';
import Prof2 from './components/AdminComp/AdminPages/AddSubject/Profs/Prof2';
import Prof3 from './components/AdminComp/AdminPages/AddSubject/Profs/Prof3';
import Prof4 from './components/AdminComp/AdminPages/AddSubject/Profs/Prof4';
import Prof5 from './components/AdminComp/AdminPages/AddSubject/Profs/Prof5';

export default function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      {/*Routes Section */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/updates' element={<Updates/>}/>
        <Route path='/profs' element={<Profs/>}/>
        <Route path='/fexam' element={<Fexam/>}/>
        <Route path='/cexam' element={<Cexam/>}/>
        <Route path='/authadmin' element={<AuthAdmin/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/announcement' element={<Announcement/>}/>
        <Route path='/admin/prof1/addsubject' element={<Prof1/>}/>
        <Route path='/admin/prof2/addsubject' element={<Prof2/>}/>
        <Route path='/admin/prof3/addsubject' element={<Prof3/>}/>
        <Route path='/admin/prof4/addsubject' element={<Prof4/>}/>
        <Route path='/admin/prof5/addsubject' element={<Prof5/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
