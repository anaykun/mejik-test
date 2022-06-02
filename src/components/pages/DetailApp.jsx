import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarApp from "../navbar/NavbarApp";
import { LOAD_DETAIL } from "../../GraphQL/Queries";
import { useQuery } from "@apollo/client";
import bgImage from "../images/majikbg.jpg";
import books from "../images/books.jpg";

export default function DetailApp() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const { data, loading } = useQuery(LOAD_DETAIL, {
    variables: {
      id: id,
    },
  });
  useEffect(() => {
    if (data) {
      setItem(data.book);
      console.log(data.book);
    }
  }, [data]);

  return (
    <div
      className="bg-auto bg-fixed h-full "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "repeat",
      }}
    >
      <NavbarApp />
      {item != null ? (
        <div className="container mx-auto ">
          <div className="flex justify-center items-center gap-5 text-violet-500">
            <div className="" style={{ height: "480px", width: "400px" }}>
              <img
                src={item?.cover || books}
                alt=""
                className=" h-full w-full"
              />
            </div>
            <div className="font-bold">
              <p className="text-3xl font-bold tracking-widest">{item.name}</p>
              <p className="mb-4">
                Author :{" "}
                <span className="opacity-70 font-light">
                  {item?.author?.name}
                </span>
              </p>
              <p>
                Code : <span className="font-light"> {item.code} </span>
              </p>
              <p>
                Category :{" "}
                <span className="font-light"> {item?.category?.name} </span>
              </p>
              <p>
                Status : <span className="font-light"> {item?.status} </span>
              </p>
              <p>
                Description :{" "}
                <span className="font-light"> {item.description} </span>
              </p>
            </div>
          </div>
          <button className="flex justify-end ml-auto bg-violet-500 text-white py-2 px-3 rounded hover:bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Borrow
          </button>
        </div>
      ) : (
        <div>
          <p>Loading ...</p>
        </div>
      )}
    </div>
  );
}
