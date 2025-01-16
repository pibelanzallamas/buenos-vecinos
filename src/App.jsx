import { useState } from "react";
import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
