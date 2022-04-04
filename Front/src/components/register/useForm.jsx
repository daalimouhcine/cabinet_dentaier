import { useState, useEffect } from "react";
import validate from "./validateInfo";

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
        console.log(values);
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };


    useEffect( () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        }, [errors] );


  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
