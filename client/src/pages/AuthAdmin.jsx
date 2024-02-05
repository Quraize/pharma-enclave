import Navbar from "../components/MutualComp/Navbar";
import AdminLogin from "../components/AdminComp/AdminLogin";
import './General.css';

export default function AuthAdmin() {
  return (
    <div className="authadmin">
        <AdminLogin/>
        <Navbar/>
    </div>
  )
}
