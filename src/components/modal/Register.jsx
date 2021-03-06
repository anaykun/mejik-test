import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../GraphQL/Mutation";

const Register = ({ switching, switOff }) => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [register, { data, loading, error }] = useMutation(REGISTER);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      register({
        variables: {
          input: form,
        },
      });
      if (error) {
        setMessage(
          <div className="text-center w-full bg-red-500 mb-2 rounded">
            Register Failed!
          </div>
        );
      } else {
        setMessage(
          <div className="text-center w-full bg-green-500 mb-2 rounded">
            Register Success!
          </div>
        );
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setMessage(
        <div className="text-center w-full bg-red-500 mb-2 rounded">
          Register Failed!
        </div>
      );
    }
  };
  return (
    <div className="">
      <div className="fixed  insert-0 ">
        <div className="flex w-screen justify-center items-center">
          <div
            className="flex-col font-bold text-white justify-center px-4 py-5  drop-shadow-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded"
            style={{ width: "500px" }}
          >
            <div className="flex  mb-2 text-lg justify-between">
              <p>Register</p>
              <p onClick={() => switOff()} className="cursor-pointer">
                X
              </p>
            </div>
            {message && message}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col ">
                <input
                  className="p-2 rounded text-violet-500 mb-2 font-bold"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  placeholder="First Name ..."
                  onChange={handleChange}
                />
                <input
                  className="p-2 rounded text-violet-500 mb-2 font-bold"
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  placeholder="Last Name ..."
                  onChange={handleChange}
                />
                <input
                  className="p-2 rounded text-violet-500 mb-2 font-bold"
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Email ..."
                  onChange={handleChange}
                />
                <input
                  className="p-2 rounded text-violet-500 mb-2 font-bold"
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Password ..."
                  onChange={handleChange}
                />
                <button className="font-bold w-full bg-violet-500 py-2 rounded hover:bg-violet-900 mb-2">
                  Register
                </button>
              </div>
            </form>
            <div className="flex">
              <label className="text-center w-full">
                Already have an account ? Click{" "}
                <span
                  onClick={() => switching(true)}
                  className="cursor-pointer hover:tracking-widest"
                >
                  Here
                </span>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
