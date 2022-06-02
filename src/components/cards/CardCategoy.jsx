import React from "react";

export default function CardCategoy({ item }) {
  return (
    <div className="flex">
      <button className="">
        <p className={`${styles}`}>{item.name}</p>
      </button>
    </div>
  );
}

//style tailwind
const styles =
  "bg-violet-400 font-bold px-3 py-2 tracking-wide rounded cursor-pointer text-white hover:bg-gradient-to-r from-violet-500 to-fuchsia-500";
