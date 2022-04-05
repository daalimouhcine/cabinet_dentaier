import {useState} from 'react';

const useLogin = () => {
    const [currentId, setCurrentId] = useState('');

    const handleChange = event => {
        setCurrentId(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(currentId);
    }

    return {currentId, handleChange, handleSubmit};
};

export default useLogin;