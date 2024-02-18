import './SidebarStyles.css';
import AdminPic from '../../../assets/boy_pic.jpg';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
//icons
import { MdOutlineGridView, MdOutlineAdminPanelSettings, MdDeleteOutline } from "react-icons/md";
import { LuPencil, LuPencilLine, LuPencilRuler } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GrAnnounce, GrUserAdmin } from "react-icons/gr";
import { SlLogout } from "react-icons/sl";
import { FaMedal } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


export default function AdminSidebar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  
  return (
    <div className='admin-sidebar-main-sec'>
      {isDesktopOrLaptop && <Sidebar className='admin-sidebar-self'>
       <Menu>
          <MenuItem className='manu1'>
             <img src={AdminPic} alt="Admin" style={{borderRadius: '999px', width:'70px', height:'70px'}} />
          </MenuItem>
          <MenuItem className='manu2' icon={<MdOutlineAdminPanelSettings/>}>
            Admin
          </MenuItem>
          <MenuItem className='sidebar-content'icon={<MdOutlineGridView/>} component={<Link to="/admin/dashboard" className="link" />} >
            Dashboard
            </MenuItem>
          <SubMenu label="Add Subject" icon={ <LuPencil/> } className='sidebar-content' >
            <SubMenu label="Prof. Exams" className='sidebar-content' icon={< HiOutlineAcademicCap/>}>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof1/addsubject" className="link" />}>Prof. 1</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof2/addsubject" className="link" />}>Prof. 2</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof3/addsubject" className="link" />}>Prof. 3</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof4/addsubject" className="link" />}>Prof. 4</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof5/addsubject" className="link" />}>Prof. 5</MenuItem>
            </SubMenu>
            <SubMenu label="Compet. Exams" className='sidebar-content' icon={<FaMedal/>}>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/ppsc/addsubject" className="link" />}>PPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/fpsc/addsubject" className="link" />}>FPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/nts/addsubject" className="link" />}>NTS</MenuItem>
            </SubMenu>
            <SubMenu label="Foriegn Exams" className='sidebar-content' icon={<FaPlaneDeparture/>}>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/dha/addsubject" className="link" />}>DHA</MenuItem>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/kaps/addsubject" className="link" />}>KAPS</MenuItem>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/fpgee/addsubject" className="link" />}>FPGEE</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label="Delete Subject" icon={ <MdDeleteOutline/> } className='sidebar-content' >
            <SubMenu label="Prof. Exams" className='sidebar-content' icon={< HiOutlineAcademicCap/>}>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof1/deletesubject" className="link" />}>Prof. 1</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof2/deletesubject" className="link" />}>Prof. 2</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof3/deletesubject" className="link" />}>Prof. 3</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof4/deletesubject" className="link" />}>Prof. 4</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof5/deletesubject" className="link" />}>Prof. 5</MenuItem>
            </SubMenu>
            <SubMenu label="Compet. Exams" className='sidebar-content' icon={<FaMedal/>}>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/ppsc/deletesubject" className="link" />}>PPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/fpsc/deletesubject" className="link" />}>FPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/nts/deletesubject" className="link" />}>NTS</MenuItem>
            </SubMenu>
            <SubMenu label="Foriegn Exams" className='sidebar-content' icon={<FaPlaneDeparture/>}>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/dha/deletesubject" className="link" />}>DHA</MenuItem>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/kaps/deletesubject" className="link" />}>KAPS</MenuItem>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/fpgee/deletesubject" className="link" />}>FPGEE</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem className='sidebar-content' icon={<GrAnnounce/>} component={<Link to='/admin/announcement' className='link'/>}>Anouncement</MenuItem>
          <MenuItem className='sidebar-content' icon={<GrUserAdmin/>}>Add Admin</MenuItem>
          <MenuItem className='sidebar-content' icon={<SlLogout/>}>Sign Out</MenuItem>
       </Menu>
    </Sidebar>}
    {isTabletOrMobile && <Sidebar className='admin-sidebar-self' collapsed={true}>
       <Menu>
          <MenuItem className='manu1'>
             <img src={AdminPic} alt="Admin" style={{borderRadius: '999px', width:'50px', height:'50px'}} />
          </MenuItem>
          <MenuItem className='manu2' icon={<MdOutlineAdminPanelSettings/>}>
            Admin
          </MenuItem>
          <MenuItem className='sidebar-content'icon={<MdOutlineGridView/>} component={<Link to="/admin/dashboard" className="link" />} >
            Dashboard
            </MenuItem>
            <SubMenu label="Add Subject" icon={ <LuPencil/> } className='sidebar-content' >
            <SubMenu label="Prof. Exams" className='sidebar-content' icon={< HiOutlineAcademicCap/>}>
            <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof1/addsubject" className="link" />}>Prof. 1</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof2/addsubject" className="link" />}>Prof. 2</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof3/addsubject" className="link" />}>Prof. 3</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof4/addsubject" className="link" />}>Prof. 4</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof5/addsubject" className="link" />}>Prof. 5</MenuItem>
            </SubMenu>
            <SubMenu label="Compet. Exams" className='sidebar-content' icon={<FaMedal/>}>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/ppsc/addsubject" className="link" />} >PPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/fpsc/addsubject" className="link" />}>FPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>} component={<Link to="/admin/nts/addsubject" className="link" />}>NTS</MenuItem>
            </SubMenu>
            <SubMenu label="Foriegn Exams" className='sidebar-content' icon={<FaPlaneDeparture/>}>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/dha/deletesubject" className="link" />}>DHA</MenuItem>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/kaps/deletesubject" className="link" />}>KAPS</MenuItem>
              <MenuItem icon={<GiMedicines />} component={<Link to="/admin/fpgee/deletesubject" className="link" />}>FPGEE</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label="Delete Subject" icon={ <MdDeleteOutline/> } className='sidebar-content' >
            <SubMenu label="Prof. Exams" className='sidebar-content' icon={< HiOutlineAcademicCap/>}>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof1/deletesubject" className="link" />}>Prof. 1</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof2/deletesubject" className="link" />}>Prof. 2</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof3/deletesubject" className="link" />}>Prof. 3</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof4/deletesubject" className="link" />}>Prof. 4</MenuItem>
              <MenuItem icon={<LuPencilLine/>} component={<Link to="/admin/prof5/deletesubject" className="link" />}>Prof. 5</MenuItem>
            </SubMenu>
            <SubMenu label="Compet. Exams" className='sidebar-content' icon={<FaMedal/>}>
              <MenuItem icon={<LuPencilRuler/>}>PPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>}>FPSC</MenuItem>
              <MenuItem icon={<LuPencilRuler/>}>NTS</MenuItem>
            </SubMenu>
            <SubMenu label="Foriegn Exams" className='sidebar-content' icon={<FaPlaneDeparture/>}>
              <MenuItem icon={<GiMedicines />}>DHA</MenuItem>
              <MenuItem icon={<GiMedicines />}>KAPS</MenuItem>
              <MenuItem icon={<GiMedicines />}>FPGEE</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem className='sidebar-content' icon={<GrAnnounce/>} component={<Link to='/admin/announcement' className='link'/>}>Anouncement</MenuItem>
          <MenuItem className='sidebar-content' icon={<GrUserAdmin/>}>Add Admin</MenuItem>
          <MenuItem className='sidebar-content' icon={<SlLogout/>}>Sign Out</MenuItem>
       </Menu>
    </Sidebar>}
     
    </div>
  )
}
