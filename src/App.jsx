import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import AuthPage from "./pages/Auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/sign-in" element={<AuthPage />} />
          <Route path="/auth/sign-up" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
