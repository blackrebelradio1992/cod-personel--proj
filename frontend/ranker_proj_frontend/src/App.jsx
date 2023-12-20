import Navbar from "/Users/frankjr./Desktop/COD-personel-proj/frontend/ranker_proj_frontend/src/components/Navbar.jsx"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}