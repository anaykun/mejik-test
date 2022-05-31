import React from "react";
import { Link } from "react-router-dom";

export default function NavbarApp() {
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
          <ul className="flex gap-3 items-center">
            <Link to="#">
              <li className="outline outline-violet-500 hover:bg-violet-200 font-bold px-3 py-1 rounded">
                Register
              </li>
            </Link>
            <Link to="#">
              <li className="bg-violet-500 hover:bg-violet-700 text-white px-3 py-2 font-bold rounded">
                Login
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
