import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"

const LogIn = () => {
  const [currentId, setCurrentId] = useState("");
  const [error, setError] = useState("");

  async function validateId(id) {
    if (!id.trim()) {
      setError("ID is required");
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(id)) {
      setError("You shod enter you ID not the email");
    } else if (!id.startsWith("patient_")) {
      setError("ID shod start with ( patient_ )");
    } else {
      await axios
        .get(`http://localhost/cabinet_dentaire_brief-6/patients/getOne/${id}`)
        .then((response) => {
          if (!response.data) {
            setError("No User with this ID");
          } else {
            localStorage.setItem("currentId", currentId);
            window.location.reload(false);
          }
        });
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    setCurrentId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateId(currentId);


  };

  return (
    <div  className="w-full h-screen flex justify-center bg-slate-300">
      <motion.form
        animate={{ scale: 1.3 }} transition={{ duration: 0.5 }}
        className="flex flex-col xl:w-3/6 lg:w-2/5 md:w-2/6 p-4 my-auto text-center rounded-md"
        onSubmit={handleSubmit}
      >
        {error && <span className="text-red-500 text-xs italic">{error}</span>}
        <input
          className="block w-full p-4 mt-2 text-xl placeholder-gray-400 gb-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 md:text-sm"
          type="text"
          name="id"
          id="id"
          value={currentId}
          onChange={handleChange}
          placeholder="Enter your ID"
        />
        <button
          className="self-center w-4/12 py-2 mt-4 md:text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease sm:test-md"
          type="submit"
        >
          Log In
        </button>
        <b className="md:text-md text-gray-500 mt-2 sm:text-md">
          No account?{" "}
          <a href="/register" className="text-blue-600 underline">
            Register
          </a>
        </b>
      </motion.form>
    </div>
  );
};

export default LogIn;
