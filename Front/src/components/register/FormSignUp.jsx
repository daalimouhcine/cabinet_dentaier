
const Inputs = (props) => {
    return (
        <div className="relative">
            <label className="font-medium" htmlFor={props.for}></label>
            <input className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
            <span>{props.errorMessage}</span>
        </div>     
    )
}


const FormSignUp = () => {
    return (
        <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <div>
                <img src="" alt="" srcset="" />
            </div>
            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                {/* <div className="title-form">
                    <img src={require('../img/logo.png')} alt="logo" />
                    <h2>Sign Up</h2>
                </div> */}
                <h4>Sign Up</h4>
                <form action="" className="relative w-full mt-10 space-y-8">
                    <Inputs for="first_name" type="text" name="first_name" id="first_name" placeholder="First Name" errorMessage="" />
                    <Inputs for="last_name" type="text" name="last_name" id="last_name" placeholder="Last Name" errorMessage="" />
                    <Inputs for="email" type="email" name="email" id="email" placeholder="Email" errorMessage="" />
                    <Inputs for="birth_date" type="date" name="birth_date" id="birth_date" placeholder="Birth Date" errorMessage="" />
                    <Inputs for="gender" type="gender" name="gender" id="gender" placeholder="Gender" errorMessage="" />
                    <button type="submit">Sign Up</button>
                    <b className="text-lg text-gray-500">Already have an account? <a href="#_" className="text-blue-600 underline">Login</a></b>
                </form>
            </div>
        </div>
    )
}

export default FormSignUp;