import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/useContext";
import { AContext } from "../../context/useModal";
import Login from "../modal/Login";
import Register from "../modal/Register";

export default function NavbarApp() {
  const [state, dispatch] = useContext(UserContext);
  let navigate = useNavigate();

  console.log("fgfgfgfgfg", state);
  const [isLogin, setIsLogin] = useState(false);
  const [states, dispatchs] = useContext(AContext);
  const setModal = states.modalSignUp;
  const setModals = states.modalSignIn;
  const switching = () => {
    if (!setModal) {
      dispatchs({
        type: "SIGN_UP",
      });
    } else {
      dispatchs({
        type: "SIGN_IN",
      });
    }
  };
  useEffect(() => {
    if (state.user) {
      setIsLogin(true);
    }
  }, [state]);
  const switchings = () => {
    if (!setModals) {
      dispatchs({
        type: "SIGN_IN",
      });
    } else {
      dispatchs({
        type: "SIGN_UP",
      });
    }
  };
  const switOff = () => {
    if (setModal) {
      dispatchs({
        type: "CLOSE",
      });
    }
    if (setModals) {
      dispatchs({
        type: "CLOSE",
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };
  return (
    <div>
      <div className="container mx-auto py-8 flex justify-between items-center font-bold">
        <Link to="/">
          <p className="text-xl">
            Mejik{" "}
            <span className=" italic hover:not-italic  text-3xl text-violet-500">
              {" "}
              Book{" "}
            </span>
          </p>
        </Link>
        <div className="ms-auto">
          {state.isLogin && (
            <ul className="flex gap-3 items-center">
              <Link to="#">
                <li className="bg-violet-500 hover:bg-violet-700 text-white px-3 py-2 font-bold rounded">
                  Cart
                </li>
              </Link>
              <li
                onClick={logout}
                className="cursor-pointer bg-violet-500 px-3 py-2 text-white fot-bold rounded hover:bg-violet-700"
              >
                Logout
              </li>
            </ul>
          )}
          {!state.isLogin && (
            <ul className="flex gap-3 items-center">
              <li
                onClick={() => switching()}
                className="cursor-pointer outline outline-violet-500 hover:bg-violet-200 font-bold px-3 py-1 rounded"
              >
                Register
              </li>

              <li
                onClick={() => switchings()}
                className="cursor-pointer bg-violet-500 hover:bg-violet-700 text-white px-3 py-2 font-bold rounded"
              >
                Login
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="">
        {setModal && <Register switching={switching} switOff={switOff} />}
        {setModals && <Login switchings={switchings} switOff={switOff} />}
      </div>
    </div>
  );
}
