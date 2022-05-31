import React, { useEffect, useState } from "react";
import CardHome from "../cards/CardHome";
import NavbarApp from "../navbar/NavbarApp";
import { useQuery, gql } from "@apollo/client";
import { LOAD_BOOKS, LOAD_CATEGORIES } from "../../GraphQL/Queries";
import CardCategoy from "../cards/CardCategoy";
import bgImage from "../images/majikbg.jpg";

export default function HomeApp() {
  const [bookss, setBookss] = useState([]);
  const [categ, setCateg] = useState([]);
  const { error, loading, data } = useQuery(LOAD_BOOKS);
  const {
    error: errorCategories,
    loading: loadingCategories,
    data: dataCategories,
  } = useQuery(LOAD_CATEGORIES);

  useEffect(() => {
    if (data) {
      setBookss(data.books);
      setCateg(dataCategories.categories);
      console.log(dataCategories);
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
      <div className="sticky top-0">
        <NavbarApp />
      </div>
      <div style={{ height: "50px" }}></div>
      <div className="container mx-auto">
        <h1 className="text-center text-5xl mb-3 font-bold">
          Happy <span className="text-violet-500"> Read </span> The Books
        </h1>
        <h3 className="text-center text-xl">
          Don't go home before it goes out,{" "}
          <span className="font-bold"> because </span>{" "}
          <span className="text-violet-500">
            {" "}
            books are created to solve problems without problems{" "}
          </span>
        </h3>
      </div>
      <div style={{ height: "80px" }}></div>

      <div className="container mx-auto font-bold ">
        <p className="bg-violet-500 text-white text-xl p-3 text-center rounded-t">
          Categories
        </p>
      </div>
      <div className="container mx-auto flex gap-3 mb-2 border-2 border-violet-500 p-2 rounded-b">
        {categ.map((item, index) => {
          return <CardCategoy item={item} key={index} />;
        })}
      </div>

      <div className="container mx-auto flex justify-between items-center bg-violet-500 rounded p-2">
        <p className="flex-1 px-5 font-bold text-lg tracking-wide text-white">
          List Book
        </p>
        <input
          className="flex-1 p-2 border-2 border-violet-500 rounded w-full"
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="container mx-auto py-2">
        {bookss?.length != 0 ? (
          <div className="grid grid-cols-5 gap-3">
            {bookss.map((item, index) => {
              return <CardHome item={item} key={index} />;
            })}
          </div>
        ) : (
          <div className="container mx-auto">
            <p>Daftar kosong</p>
          </div>
        )}
      </div>
    </div>
  );
}
