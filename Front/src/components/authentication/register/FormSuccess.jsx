
const FormSuccess = () => {
    return (
        <div className="w-fit flex flex-col justify-center mx-auto text-center">
            <p className="font-bold pt-2 text-gray-700">The inscription is done successfully</p>
            <h3 className="text-3xl pt-5 font-bold ">Check your email for the ID</h3>
            <div className="">
                <img src="img/done.svg" alt="success" />
            </div>
        </div>
    )
}

export default FormSuccess;