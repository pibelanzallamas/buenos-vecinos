import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="w-[70%] flex items-center flex-col gap-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-center flex-wrap">
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Nombre y Apellido:</label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Nombre y Apellido"
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Provincia:</label>
            <input
              type="text"
              {...register("state", { required: true })}
              placeholder="Provincia"
            />
            {errors.state && <p>{errors.state.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Ciudad:</label>
            <input
              type="text"
              {...register("city", { required: true })}
              placeholder="Ciudad"
            />
            {errors.city && <p>{errors.city.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Celular:</label>
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="Celular"
            />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Documento:</label>
            <input
              type="text"
              {...register("dni", { required: true })}
              placeholder="Documento"
            />
            {errors.dni && <p>{errors.dni.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Código Postal:</label>
            <input
              type="text"
              {...register("postalCode", { required: true })}
              placeholder="Código Postal"
            />
            {errors.postalCode && <p>{errors.postalCode.message}</p>}
          </div>
          <div className="w-1/4 p-4 m-2 flex flex-col">
            <label htmlFor="">Dirección:</label>
            <input
              type="text"
              {...register("address", { required: true })}
              placeholder="Dirección"
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
        </div>
        <div>
          <button className="m-4" type="submit">
            Registrar
          </button>
        </div>
        <Link to={"/auth/sign-in"}>¿Ya tienes cuenta?</Link>
      </form>
    </div>
  );
}
