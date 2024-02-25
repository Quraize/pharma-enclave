// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Announce from './pages/Announce';
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
import Ppsc from './components/AdminComp/AdminPages/AddSubject/Comp/Ppsc';
import Fpsc from './components/AdminComp/AdminPages/AddSubject/Comp/Fpsc';
import Nts from './components/AdminComp/AdminPages/AddSubject/Comp/Nts';
import Kaps from './components/AdminComp/AdminPages/AddSubject/Foriegn/Kaps';
import Fpgee from './components/AdminComp/AdminPages/AddSubject/Foriegn/Fpgee';
import Dha from './components/AdminComp/AdminPages/AddSubject/Foriegn/Dha';
//to delete subject from admin side
import Prof1Del from './components/AdminComp/AdminPages/DeleteSubject/Prof/Prof1Del';
import Prof2Del from './components/AdminComp/AdminPages/DeleteSubject/Prof/Prof2Del';
import Prof3Del from './components/AdminComp/AdminPages/DeleteSubject/Prof/Prof3Del';
import Prof4Del from './components/AdminComp/AdminPages/DeleteSubject/Prof/Prof4Del';
import Prof5Del from './components/AdminComp/AdminPages/DeleteSubject/Prof/Prof5Del';
import DelDha from './components/AdminComp/AdminPages/DeleteSubject/Foriegn/DelDha';
import DelFpgee from './components/AdminComp/AdminPages/DeleteSubject/Foriegn/DelFpgee';
import DelKaps from './components/AdminComp/AdminPages/DeleteSubject/Foriegn/DelKaps';
import DelPpsc from './components/AdminComp/AdminPages/DeleteSubject/Comp/DelPpsc';
import DelFpsc from './components/AdminComp/AdminPages/DeleteSubject/Comp/DelFpsc';
import DelNts from './components/AdminComp/AdminPages/DeleteSubject/Comp/DelNts';

export default function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      {/*Routes Section */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/updates' element={<Announce/>}/>
        <Route path='/profs' element={<Profs/>}/>
        <Route path='/fexam' element={<Fexam/>}/>
        <Route path='/cexam' element={<Cexam/>}/>
        <Route path='/authadmin' element={<AuthAdmin/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/announcement' element={<Announcement/>}/>
        {/*paths to add subject */}
        <Route path='/admin/prof1/addsubject' element={<Prof1/>}/>
        <Route path='/admin/prof2/addsubject' element={<Prof2/>}/>
        <Route path='/admin/prof3/addsubject' element={<Prof3/>}/>
        <Route path='/admin/prof4/addsubject' element={<Prof4/>}/>
        <Route path='/admin/prof5/addsubject' element={<Prof5/>}/>
        <Route path='/admin/ppsc/addsubject' element={<Ppsc/>}/>
        <Route path='/admin/fpsc/addsubject' element={<Fpsc/>}/>
        <Route path='/admin/nts/addsubject' element={<Nts/>}/>
        <Route path='/admin/kaps/addsubject' element={<Kaps/>}/>
        <Route path='/admin/dha/addsubject' element={<Dha/>}/>
        <Route path='/admin/fpgee/addsubject' element={<Fpgee/>}/>
        {/*paths to delete subject */}
        <Route path='/admin/prof1/deletesubject' element={<Prof1Del/>}/>
        <Route path='/admin/prof2/deletesubject' element={<Prof2Del/>}/>
        <Route path='/admin/prof3/deletesubject' element={<Prof3Del/>}/>
        <Route path='/admin/prof4/deletesubject' element={<Prof4Del/>}/>
        <Route path='/admin/prof5/deletesubject' element={<Prof5Del/>}/>
        <Route path='/admin/kaps/deletesubject' element={<DelKaps/>}/>
        <Route path='/admin/dha/deletesubject' element={<DelDha/>}/>
        <Route path='/admin/fpgee/deletesubject' element={<DelFpgee/>}/>
        <Route path='/admin/ppsc/deletesubject' element={<DelPpsc/>}/>
        <Route path='/admin/fpsc/deletesubject' element={<DelFpsc/>}/>
        <Route path='/admin/nts/deletesubject' element={<DelNts/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  )
}
