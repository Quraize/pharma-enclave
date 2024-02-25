import "./DeleteSubjectStyles.css";
import AdminSidebar from "../../SidebarComp/AdminSidebar";
import TableDelSubject from "./TableDelSubject";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function DeleteSubject({SubTitle, Items, URL}) {
  useEffect(() => {
    AOS.init({
      duration : 1300,
      easing: 'ease-in-out-back'
    });
  }, []);

  return (
    <div className="home del-subject-main-sec">
      <div>
        <AdminSidebar />
      </div>
      <div>
        <div><h1 className="del-subject-main-heading" data-aos='slide-right'>Provided Subjects in the {SubTitle}</h1></div>
        <div data-aos='slide-left'><TableDelSubject CourseName={SubTitle} SubjItems={Items} URL={URL}/></div>
      </div>
    </div>
  );
}
