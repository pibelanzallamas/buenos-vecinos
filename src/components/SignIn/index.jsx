import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" flex flex-col gap-4 items-center">
      <form
        className="flex flex-col items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col m-4 p-4">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email invalido",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <p>El email es requerido</p>}
        </div>
        <div className="flex flex-col m-4 p-4">
          <label htmlFor="">Password:</label>
          <input
            type="text"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && <p>La contraseña es requerida</p>}
        </div>
        <div className="m-4">
          <button type="submit">Iniciar</button>
        </div>
      </form>
      <Link to={"/auth/sign-up"}>Registrarse</Link>
    </div>
  );
}
