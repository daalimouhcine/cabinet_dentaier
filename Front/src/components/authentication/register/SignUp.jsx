import useForm from "./useForm";
import validate from './validateInfo';


const SignUp = ({submitForm}) => {

  const { values, handleChange, handleSubmit, errors } = useForm(submitForm, validate);


  return (
    <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
      <div>
        <img src="" alt="" srcSet="" />
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full p-5 lg:p-10 xl:p-10">
        <h4 className="w-full text-3xl font-bold">Sign Up</h4>
        <form
          action=""
          className="relative w-full mt-7 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <label className="font-medium" htmlFor="first_name">
              First Name
            </label>
            <input
              className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              value={values.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <span className="text-red-500 text-xs italic">{errors.first_name}</span>
            )}
          </div>

          <div className="relative">
            <label className="font-medium" htmlFor="last_name">
              Last Name
            </label>
            <input
              className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              value={values.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <span className="text-red-500 text-xs italic">{errors.last_name}</span>
            )}
          </div>

          <div className="relative">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-500 text-xs italic">{errors.email}</span>
            )}
          </div>

          <div className="relative">
            <label className="font-medium" htmlFor="birth_date">
              Birth Date
            </label>
            <input
              className="block w-full px-2 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
              type="date"
              name="birth_date"
              id="birth_date"
              placeholder="Birth Date"
              value={values.birth_date}
              onChange={handleChange}
            />
            {errors.birth_date && (
              <span className="text-red-500 text-xs italic">{errors.birth_date}</span>
            )}
          </div>

          <div className="relative">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              className="w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 gb-gray-200 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 fucus:ring-opacity-50"
              onChange={handleChange}
              value={values.gender}
            >
              <option  >Chose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <span className="text-red-500">{errors.gender}</span>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
          >
            Sign Up
          </button>
          <b className="text-lg text-gray-500">
            Already have an account?{" "}
            <a href="/" className="text-blue-600 underline">
              Login
            </a>
          </b>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
