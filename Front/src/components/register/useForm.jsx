import { useState, useEffect } from "react";
import validate from "./validateInfo";
import axios from 'axios';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        birth_date: "",
        gender: "",
      });
      
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = event => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };


    useEffect( () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            axios.post('http://localhost/cabinet_dentaire_brief-6/patients/create', values).then(response => {
                console.log(response);
                callback();
            })
            .catch(error => {
                console.log(error);
            });
          }
        });


  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
