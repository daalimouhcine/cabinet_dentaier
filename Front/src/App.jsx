import Login from "./components/authentication/login/LogIn";
import Register from "./components/authentication/register/Register";
import AddAppointment from "./components/appointment/addAppointments/Add";
import ReadAppointment from "./components/appointment/readAppointments/Read";
import "./components/SASS/Form.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>
          <p className="mb-8 text-center text-gray-500 md:text-lg">
            {" "}
            The page you’re looking for doesn’t exist.{" "}
          </p>
          <a
            href="/"
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            {" "}
            Go home{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [idExists, setIdExists] = useState(false);
  const checkIdIfStored = () => {
    const id = localStorage.getItem("currentId");
    if (id) {
      setIdExists(true);
    }
  };

  useEffect(() => {
    checkIdIfStored();
  }, [idExists]);

  return (
    <Router>
      <Routes>
        {idExists ? (
          <Route path="/" element={<AddAppointment />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/register" element={<Register />} />

        {idExists ? (
          <Route path="/add" element={<AddAppointment />} />
        ) : (
          <Route path="/add" element={<Login />} />
        )}
        {idExists ? (
          <Route path="/read" element={<ReadAppointment />} />
        ) : (
          <Route path="/read" element={<Login />} />
        )}

        {/*If none of this paths go to this page*/}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
