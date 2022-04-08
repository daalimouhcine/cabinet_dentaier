import Nav from '../Nav';
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const Add = () => {
  const times = [
    "",
    "09:00:00",
    "10:00:00",
    "11:00:00",
    "12:00:00",
    "14:00:00",
    "15:00:00",
    "16:00:00",
    "17:00:00",
    "18:00:00"
  ];
  const [invalidTime, setInvalidTime] = useState([]);

  const [appointment, setAppointment] = useState({
    description: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const [isTime, setIsTime] = useState(false);

  const validate = (data) => {
    let errors = {};

    if (!data.description) {
      errors.description = "Description is required";
      errors.isValid = false;
    }

    if (!data.date) {
      errors.date = "Date is required";
      errors.isValid = false;
    } else if (moment(data.date).isBefore(moment())) {
      errors.date = "Date must be in the future";
      errors.isValid = false;
    }

    if (!data.time) {
      errors.time = "Time is required";
      errors.isValid = false;
    }

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointment({
      ...appointment,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(appointment));
  };

  const resp = async () => {
    let arrayTime = [];
    await axios.get(
        "http://localhost/cabinet_dentaire_brief-6/appointments/getByIdOrDate/" + appointment.date)
      .then((response) => {
        response.data.map((item) => {
          return arrayTime.push(item.time);
        });
        setInvalidTime(arrayTime);
      });
  };

  useEffect(() => {
    if (moment(appointment.date, "YYYY-MM-DD", true).isValid() && !moment(appointment.date).isBefore(moment())) {
      setIsTime(true);
      errors.date = "";
      resp();
    } else {
      setIsTime(false);
      errors.date = "Date must be in the future";
    }
  }, [appointment.date]);



  return (
    <>
      <Nav />
      <div className="mt-5">
        <div className="flex justify-center">
          <div className="w-3/5">
            <form
              id="popRdv"
              className="flex flex-col bg-white p-10 rounded-lg shadow-lg min-w-full"
              onSubmit={onSubmit}
            >
              <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                Make an appointment
              </h1>
              <div className="mb-5">
                <label
                  className="text-left text-gray-800 font-semibold block my-3"
                  htmlFor="topic"
                >
                  Description:
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={handleChange}
                  value={appointment.description}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs italic">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  className="text-left text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="date"
                >
                  Date:
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  value={appointment.date}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs italic">{errors.date}</p>
                )}
              </div>

              {isTime ? (
                <div className="mb-7">
                  <label
                    className="text-left text-gray-800 font-semibold block my-3 text-md"
                    htmlFor="time"
                  >
                    Time:
                  </label>
                  <select
                    className="select select-bordered w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    id="time"
                    name="time"
                    onChange={handleChange}
                    value={appointment.time}
                  >
                    {
                      times.map((item) => {
                        if (invalidTime.includes(item)) {
                          return (
                            <option disabled key={item} value={item}>
                                {item}
                              </option>
                          )
                        } else {
                          return (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          );
                        }
                      })
                    }

                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-xs italic">{errors.time}</p>
                  )}
                </div>
              ) : (
                " "
              )}

              <button
                type="submit"
                className="py-3 px-5 mt-auto rounded-md text-white bg-sky-600 hover:bg-blue-300 hover:text-blue-900 transition-all justify-self-end"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
