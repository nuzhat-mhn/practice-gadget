import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <Navbar />
        <Outlet />
      </HelmetProvider>
    </>
  );
}

export default App;
