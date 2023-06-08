import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-[calc(100vh-300px)] text-black">
      <div className="hero-content flex-col w-full lg:w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-1">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Password:
                </span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
                {...register("pwd", {
                  required: true,
                })}
              />
              {errors.pwd?.type === "required" && (
                <span className="mt-1">This field is required</span>
              )}
            </div>
            <div className="form-control m-5">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-sm">
              Create an account?
              <span className="ms-1 underline  hover:text-red-500">Signup</span>
            </p>
          </form>
          <div className="divider">OR Go With</div>
          <div className=" text-center mb-10">
            <button className="btn btn-outline btn-success btn-md">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
