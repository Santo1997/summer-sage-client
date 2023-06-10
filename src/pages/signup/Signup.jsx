import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { postToDB } from "../../utilities/apiFetch";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = "/";

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newUser = {
      img: data.img,
      name: data.username,
      email: data.email,
      user: "student",
    };

    createUser(data.email, data.pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = data.username;
        user.photoURL = data.img;
        postToDB(newUser);
        console.log(newUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        error.message;
      });
  };

  const password = useRef({});
  password.current = watch("pwd", "");

  return (
    <div className="hero min-h-[calc(100vh-300px)]  text-black">
      <div className="hero-content flex-col w-full lg:w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10 ">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold ">
                  Username:
                </span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
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
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
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
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^[a-z0-9]+$/,
                })}
              />
              {errors.pwd?.type === "required" && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
              {errors.pwd?.type === "minLength" && (
                <span className="mt-1 text-red-600">
                  Password must be 6 Charecture
                </span>
              )}
              {errors.pwd?.type === "maxLength" && (
                <span className="mt-1 text-red-600">
                  Password must be less 20 Charecture
                </span>
              )}
              {errors.pwd?.type === "pattern" && (
                <span className="mt-1 text-red-600">
                  Password must be a smaller letter & a number
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Confirm Password:
                </span>
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                className="input input-bordered"
                {...register("rePwd", {
                  required: true,
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
              />
              {errors.rePwd?.type === "required" && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
              {errors.rePwd && (
                <span className="mt-1 text-red-600">
                  {errors.rePwd.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Photo URL:
                </span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control m-5 ">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-sm">
              Already an account?
              <Link to="/login">
                <span className="ms-1 underline  hover:text-red-500">
                  Signin
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
