import {useState} from 'react';
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row">
                <div className="relative w-full xl:min-h-screen bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-blue-100">
                    <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                        <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                            <div className="relative">
                                <p className="mb-2 font-medium text-gray-700 uppercase">Work smarter</p>
                                <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you work smarter</h2>
                            </div>
                            <p className="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p>
                            <a href="#_" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a>
                        </div>
                    </div>
                </div>
                {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
            </div>
        </div>
    )
}

export default Form;