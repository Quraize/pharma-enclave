import "./DeleteSubjectStyles.css";
import AdminSidebar from "../../SidebarComp/AdminSidebar";
import TableDelSubject from "./TableDelSubject";

export default function DeleteSubject({SubTitle, Items, URL}) {
    return (
    <div className="home del-subject-main-sec">
      <div>
        <AdminSidebar />
      </div>
      <div>
        <div><h1 className="del-subject-main-heading">Provided Subjects in the {SubTitle}</h1></div>
        <div><TableDelSubject CourseName={SubTitle} SubjItems={Items} URL={URL}/></div>
      </div>
    </div>
  );
}
