import react, { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../GraphQL/Mutation";
import { UserContext } from "../../context/useContext";
import { AContext } from "../../context/useModal";

const Login = ({ switchings, switOff }) => {
  const [state, dispatch] = useContext(UserContext);
  const [states, dispatchs] = useContext(AContext);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [login, { loading, data, error }] = useMutation(LOGIN);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      const user = data.login;
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });
      switOff();
    }
  }, [data]);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      login({
        variables: {
          input: form,
        },
      });

      if (error) {
        setMessage(
          <div className="text-center w-full bg-red-500 mb-2 rounded">
            Login Failed!
          </div>
        );
      } else {
        setMessage(
          <div className="text-center w-full bg-green-500 mb-2 rounded">
            Login Success!
          </div>
        );
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      setMessage(
        <div className="text-center w-full bg-red-500 mb-2 rounded">
          Login Failed!
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
              <p>Login</p>
              <p onClick={() => switOff()} className="cursor-pointer">
                X
              </p>
            </div>
            {message && message}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col ">
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
                  Login
                </button>
              </div>
            </form>

            <div className="flex">
              <label className="text-center w-full">
                Don't Have Account ? Click{" "}
                <span
                  onClick={() => switchings()}
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

export default Login;
