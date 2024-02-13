'use client';
import './AddSubjectStyles.css';
import '../../../../pages/General.css';
import AdminSidebar from '../../SidebarComp/AdminSidebar';
import Button from "react-bootstrap/Button";


export default function AddSubject({SubTitle, pageLink}) {
  return (
    <div className='home add-subject-main-sec'>
        <div><AdminSidebar/></div>
        <div className='add-subject-content-sec'>
            <h1 className='add-subject-main-heading'>Add Subject to {SubTitle}</h1>
            <div className='add-subject-form'>
                <form className='form-self'>
                    <label className='add-subject-email-label-self'>Subject Title</label>
                    <input type='text' placeholder='Pharmacology' id='text' className='add-subject-title-placeholder' required/>
                    <label className='add-subject-email-label-self'>Youtube Video Id</label>
                    <input type='text' placeholder='Nq25k-9mVvY (Make Sure it is valid)' id='text' className='add-subject-title-placeholder' required/>
                    <label className='add-subject-email-label-self'>Subject Detail</label>
                    <textarea type='text' placeholder='Please provide less than twenty(20) words' id='text' className='add-subject-title-placeholder' required/>
                    <Button variant='secondary' className='button-self' type='submit'>Add Subject</Button>
                </form>
                <a href={pageLink}><span className='text-green-700 cursor-pointer' >See the added Subject</span></a>
            </div>
        </div>
    </div>
  )
}
