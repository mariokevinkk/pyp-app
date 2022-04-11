import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="profile" element={<Profile />} />
      <Route path="Order" element={<Order />} />
      <Route path="Edit" element={<Edit />} />
    </Routes>
  );
}
export default App;
