import FormSignUp from "./FormSignUp";
import './SASS/Form.css';

const Form = () => {
    return (
        <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg/gradient-to-r from-white via-white to-gray-100">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                    <div className="relative">
                        <p className="mb-2 font-medium text-gray-700 uppercase">Work smarter</p>
                        <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you work smarter</h2>
                    </div>
                    <p className="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application</p>
                    <a href="#_" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:gb-blue-700 ease">Get started today</a>
                </div>
            </div>
        </div>
        <FormSignUp />
        </div>
    )
}

export default Form;