import "./TableDelSubjectStyles.css";
import Accordion from 'react-bootstrap/Accordion';
import { Button } from "react-bootstrap";
import {MdDeleteOutline} from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delStart, delSuccess, delFailure } from "../../../../redux/adminAction/delSlice.js";

export default function TableDelSubject({CourseName, SubjItems, URL}) {
    let eventKey = -1;
    const [document, setDocument] = useState({});
    const {loading, error} = useSelector((state) => state.delete)
    const [successMessage, setSuccessMessage] = useState(false);
    const dispacth = useDispatch();

    const handleChange = (e) =>{
        setDocument({...document, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            dispacth(delStart());
            const response = await fetch(URL, {
                method: "DELETE",
                headers:{
                    "content-Type": "application/json",
                },
                body: JSON.stringify(document),
            })
            const data = await response.json();
            if(data.success === false){
                dispacth(delFailure(data));
                return;
            }

            dispacth(delSuccess(data));
            setSuccessMessage(true);
            setDocument({
                subject: ""
            });
            window.location.reload();
        } catch (error) {
            dispacth(delFailure(error));
        }
    }
    const items = [...SubjItems];
    return (
    <div className="del-table-main-sec">
        <Accordion className="del-accordian-self">
        {items.map((item) => (
        <Accordion.Item eventKey={`${eventKey++}`} key={item.key}>
            <Accordion.Header className="del-accordion-header">{item.subject}</Accordion.Header>
            <Accordion.Body className="del-accordian-body">
                <form onSubmit={handleSubmit}>
                <label className="del-subject-label">Confirm The Subject Name</label> 
                <div className="del-subj-placeholder-sec">
                    <input type="text" placeholder="Confirmation-Name must be Identical" name="subject" className="del-subject-placeholder" required onChange={handleChange}/>
                    <Button variant='danger' disabled={loading} className='del-subject-button-self' type='submit'>{loading ? "..." : <MdDeleteOutline size={20}/>}</Button>
                </div>
                </form>
                <p className="del-subject-error-handler">
                    {error ? error.message || "Somthing went wrong" : ""}
        
                </p>
                <p className='del-subject-success-handler'>{successMessage ? `Subject Deleted Successfully from ${CourseName}` : ""}</p>
          </Accordion.Body>
        </Accordion.Item>
        ))}
        </Accordion>
    </div>
  );
}
