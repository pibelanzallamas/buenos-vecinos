import { useState } from "react";
import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
