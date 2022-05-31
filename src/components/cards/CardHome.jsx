import React from "react";
import { Link } from "react-router-dom";
import onepiece from "../images/onepiece.jpg";

export default function CardHome({ item }) {
  return (
    <div
      className="bg-violet-300 cursor-pointer hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded flex"
      style={{ height: "400px", width: "250px" }}
    >
      <Link to="/">
        <div className="p-2 " style={{ width: "250px", height: "300px" }}>
          <img
            src={item?.cover != null ? `${item.cover} ` : ` ${onepiece} `}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="px-2 font-bold text-lg" style={{ width: "250px" }}>
          <p className="truncate text-white drop-shadow-md tracking-widest">
            {item.name}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
}
