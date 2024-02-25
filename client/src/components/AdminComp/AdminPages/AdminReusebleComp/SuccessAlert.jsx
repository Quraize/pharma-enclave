import './SuccessAlertStyles.css';
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from 'react';

export default function SuccessAlert({SubTitle, Variant, message}) {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() =>{
        const timeout = setTimeout(() => {
            setShowPopup(false);
        }, 5000)

        return () => clearTimeout(timeout);
    }, [])
  return (
        showPopup && (
        <Alert variant={Variant}>
            {message} {SubTitle}
        </Alert>
        )
  )
}
