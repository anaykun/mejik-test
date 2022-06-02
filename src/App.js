import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailApp from "./components/pages/DetailApp";
import HomeApp from "./components/pages/HomeApp";
import { UserContext } from "./context/useContext";
import { useQuery } from "@apollo/client";
import { GETUSER } from "./GraphQL/Queries";

function App() {
  const userId = localStorage.getItem("userid");
  const [state, dispatch] = useContext(UserContext);
  const { data, refetch } = useQuery(GETUSER);

  useEffect(() => {
    if (userId) {
      refetch({
        id: userId,
      });
    }
  }, [refetch, userId]);

  useEffect(() => {
    if (data) {
      console.log("ssssss", data);
      let tokene = localStorage.getItem("token");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: data.user,
          token: tokene,
        },
      });
    }
  }, [data, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<HomeApp />} />
      <Route path="/detail-book/:id" element={<DetailApp />} />
    </Routes>
  );
}

export default App;
