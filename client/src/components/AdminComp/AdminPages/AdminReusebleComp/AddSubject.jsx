import './AddSubjectStyles.css';
import '../../../../pages/General.css';
import AdminSidebar from '../../SidebarComp/AdminSidebar';
import Button from "react-bootstrap/Button";
import SuccessAlert from './SuccessAlert.jsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStart, addSuccess, addFailure } from '../../../../redux/adminAction/addSlice.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function AddSubject({SubTitle, URL}) {
    const [formData, setformData] = useState({});
    const {loading, error} = useSelector((state) => state.add);
    const [successMessage, setSuccessMessage] = useState(false);
    const dispacth = useDispatch();

    const handleChange = (e) =>{
        setformData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            dispacth(addStart());
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });
            const data = await response.json();
            if(data.success === false){
                dispacth(addFailure(data));
                window.location.reload();
                return;
            }
            dispacth(addSuccess(data));
            setSuccessMessage(true);
            //resetting the form fields
            setformData({});
        } catch (error) {
            dispacth(addFailure(error));
        }
    }

    useEffect(() => {
        AOS.init({
          duration : 1300,
          easing: 'ease-in-out-back'
        });
    }, []);

  return (
    <div className='home add-subject-main-sec'>
        <div><AdminSidebar/></div>
        <div className='add-subject-content-sec'>
            <h1 className='add-subject-main-heading' data-aos='slide-right'>Add Subject to {SubTitle}</h1>
            <div className='add-subject-form'>
                <form className='form-self' onSubmit={handleSubmit} data-aos='slide-left'>
                    <label className='add-subject-email-label-self'>Youtube Video Id</label>
                    <input type='text' placeholder='Nq25k-9mVvY (Make Sure it is valid)' name='Id' className='add-subject-title-placeholder' required onChange={handleChange}/>
                    <label className='add-subject-email-label-self'>Subject Title</label>
                    <input type='text' placeholder='Pharmacology' name='subject' className='add-subject-title-placeholder' required onChange={handleChange}/>
                    <label className='add-subject-email-label-self'>Subject Detail</label>
                    <textarea type='text' placeholder='Please provide less than twenty(20) words' name='Detail' className='add-subject-title-placeholder' required onChange={handleChange}/>
                    <Button variant='secondary' disabled={loading} className='button-self' type='submit'>{loading ? "Adding..." : "Add Subject"}</Button>
                </form>
                <p className="add-subject-error-handler">
                    {error ? <SuccessAlert SubTitle={''} Variant={'danger'} message={error.message}/> || "Somthing went wrong" : ""}
                </p>
                <p className='add-subject-success-handler'>{successMessage ? <SuccessAlert SubTitle={SubTitle} Variant={'success'} message={'Subject added successfuly to'}/> : ""}</p>            </div>
        </div>
    </div>
  )
}
