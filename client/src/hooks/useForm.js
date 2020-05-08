// write your custom hook here to control your checkout form
import {useState} from 'react'

export const useForm = () =>{

    const [values, setValues] = useState({});
    const [showSuccessMessage, setShowSuccessMessage]= useState({});

    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
        
        return {
            handleChanges,
            handleSubmit,
            values,
        }
}

