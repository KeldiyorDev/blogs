import { Routes, Route } from "react-router-dom";
import Blogs from "./containers/Blogs";
import Login from "./containers/Login"

function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Blogs" element={<Blogs />} />
    </Routes>
  );
}

export default App;
