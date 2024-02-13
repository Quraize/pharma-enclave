import '../../../pages/General.css';
import AdminSidebar from '../SidebarComp/AdminSidebar';
import './AnnounceStyles.css';

export default function Announcement() {
  return (
    <div className='home announcement-main-section'>
      <div><AdminSidebar/></div>
      <div className='announcement-content-main-sec'>
         <div>subject cards</div>
         <div>user analytics</div>
         <div>Announcemetns</div>
      </div>
    </div>
  )
}
