import "./styles/app.css";
import AppRoutes from "./components/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
