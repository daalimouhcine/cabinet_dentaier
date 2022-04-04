import moment from 'moment';
export default function validateInfo(values) {
    let errors = {};

    if(!values.first_name.trim()) {
        errors.first_name = 'First name is required';
    }

    if(!values.last_name.trim()) {
        errors.last_name = 'Last name is required';
    }

    if(!values.email.trim()) {
        errors.email = 'Email is required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.birth_date.trim()) {
        errors.birth_date = 'Birth date is required';
    } else if(!moment(values.birthday, 'YYYY-MM-DD', true).isValid()) {
        errors.birth_date = 'Invalid birth date';
    } else if(moment(values.birthday, 'YYYY-MM-DD', true).isAfter(moment())) {
        errors.birth_date = 'Birth date must be in the past';
    }

    if(!values.gender.trim()) {
        errors.gender = 'Gender is required';
    }

    return errors;
}