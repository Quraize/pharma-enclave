import './AddSubjectStyles.css';
import '../../../../pages/General.css';
import AdminSidebar from '../../SidebarComp/AdminSidebar';
import Button from "react-bootstrap/Button";
import { useState } from 'react';

export default function AddSubject({SubTitle, pageLink, URL}) {
    const [formData, setformData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) =>{
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            setLoading(true);
            setError(false);
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });
            const data = await response.json();
            setLoading(false);
            if(data.success === false){
                setError(true);
                return;
            }
            setSuccessMessage(true);
            //resetting the form fields
            setformData({
                Id: '',
                Subject: '',
                Detail: ''
            });
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setError(true);
        }
    }
  return (
    <div className='home add-subject-main-sec'>
        <div><AdminSidebar/></div>
        <div className='add-subject-content-sec'>
            <h1 className='add-subject-main-heading'>Add Subject to {SubTitle}</h1>
            <div className='add-subject-form'>
                <form className='form-self' onSubmit={handleSubmit}>
                    <label className='add-subject-email-label-self'>Youtube Video Id</label>
                    <input type='text' placeholder='Nq25k-9mVvY (Make Sure it is valid)' name='Id' className='add-subject-title-placeholder' required onChange={handleChange}/>
                    <label className='add-subject-email-label-self'>Subject Title</label>
                    <input type='text' placeholder='Pharmacology' name='subject' className='add-subject-title-placeholder' required onChange={handleChange}/>
                    <label className='add-subject-email-label-self'>Subject Detail</label>
                    <textarea type='text' placeholder='Please provide less than twenty(20) words' name='Detail' className='add-subject-title-placeholder' required onChange={handleChange}/>
                    <Button variant='secondary' disabled={loading} className='button-self' type='submit'>{loading ? "Adding..." : "Add Subject"}</Button>
                </form>
                <p className="add-subject-error-handler">
                    {error ? error.message || "Somthing went wrong" : ""}
                </p>
                <p className='add-subject-success-handler'>{successMessage ? `Subject Added Successfully to ${SubTitle}` : ""}</p>
                <a href={pageLink}><span className='added-subject-message' >{successMessage ? "See the added Subject": ""}</span></a>
            </div>
        </div>
    </div>
  )
}
