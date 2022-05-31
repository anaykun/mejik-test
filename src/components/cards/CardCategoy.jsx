import React from "react";

export default function CardCategoy({ item }) {
  console.log(item);
  return (
    <div className="flex">
      <button className="">
        <p className="bg-violet-400 font-bold px-3 py-2 tracking-wide rounded cursor-pointer text-white hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">
          {item.name}
        </p>
      </button>
    </div>
  );
}
