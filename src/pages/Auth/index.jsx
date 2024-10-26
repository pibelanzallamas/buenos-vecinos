import SignIn from "../../components/SignIn";
import { useLocation } from "react-router-dom";
import SignUp from "../../components/SignUp";

export default function AuthPage() {
  const location = useLocation();

  return (
    <div className="layout">
      <main className="w-full h-screen flex items-center justify-center flex-col">
        <h1 className="p-8 text-4xl font-semibold">BuenosVecinos</h1>
        {location.pathname === "/auth/sign-in" ? (
          <div>
            <SignIn />
          </div>
        ) : (
          <div>
            <SignUp />
          </div>
        )}
      </main>
    </div>
  );
}
