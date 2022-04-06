import {useState} from 'react';

const useLogin = validate => {
    const [currentId, setCurrentId] = useState('');
    const [error, setError] = useState('');

    const handleChange = event => {
        setCurrentId(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setError(validate(currentId));
    }

    return {currentId, handleChange, handleSubmit, error};
};

export default useLogin;