import {useState} from 'react';
import validate from "./validateId";

const LogIn = () => {

  const [currentId, setCurrentId] = useState('');
  const [error, setError] = useState('');

  const handleChange = event => {
      setCurrentId(event.target.value);
  }

  const handleSubmit = event => {
      event.preventDefault();
      setError(validate(currentId));
  }

  return (
    <div className="w-full h-screen flex justify-center bg-slate-300">
      <form
        className="flex flex-col xl:w-4/6 lg:w-3/5 md:w-3/6 p-4 my-auto text-center rounded-md"
        onSubmit={handleSubmit}
      >
        {error && <span className="text-red-500">{error}</span>}
        <input
          className="block w-full p-4 mt-2 text-xl placeholder-gray-400 gb-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
          type="text"
          name="id"
          id="id"
          value={currentId}
          onChange={handleChange}
          placeholder="Enter your ID"
        />
        <button
          className="self-center w-4/12 py-2 mt-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
          type="submit"
        >
          Log In
        </button>
        <b className="text-lg text-gray-500 mt-2">
            No account?{" "}
          <a href="#_" className="text-blue-600 underline">
            Register
          </a>
        </b>
      </form>
    </div>
  );
};

export default LogIn;
