import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="layout">
      <main>
        <h1 className="text-xl font-semibold" >Es usted cliente o negocio?</h1>
        <dir className="w-full flex justify-between">
          <Link className="text-white p-2 px-4 bg-black rounded-lg" to={"/auth/sign-in"}>Cliente</Link>
          <Link className="text-white p-2 px-4 bg-black rounded-lg" to={"/auth/sign-in"}>Negocio</Link>
        </dir>
      </main>
    </div>
  );
}
