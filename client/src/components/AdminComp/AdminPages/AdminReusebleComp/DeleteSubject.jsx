import './DeleteSubjectStyles.css';
import AdminSidebar from '../../SidebarComp/AdminSidebar';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DeleteSubject() {
  return (
    <div className='home del-subject-main-sec'>
    <div><AdminSidebar/></div>
    <div>
     <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
     </ListGroup>
    </div>
    </div>
  )
}
