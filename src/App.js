import { Route, Routes } from "react-router-dom";
import HomeApp from "./components/pages/HomeApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeApp />} />
    </Routes>
  );
}

export default App;
