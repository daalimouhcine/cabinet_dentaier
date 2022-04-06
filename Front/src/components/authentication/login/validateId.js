import axios from 'axios';

export default function validateId(id) {
    let error = '';
    let user = true;

    if (!id.trim()) {
        error = 'ID is required';
        
    } else if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(id)) {
        error = 'You shod enter you ID not the email';

    } else if(!id.startsWith('patient_')) {
        error = 'ID shod start with ( patient_ )';

    } else {
        axios.get('http://localhost/cabinet_dentaire_brief-6/patients/getOne/' + id)
        .then(response => {
            if(response.data) {
                console.log(response.data);
                user = true;
            } else {
                user = false;
                console.log(user);
            }
        });
    }


    return error;
}