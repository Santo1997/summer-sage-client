import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const from = "/";

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr("");
    const newUser = {
      img: data.img,
      name: data.username,
      email: data.email,
      role: "student",
    };

    createUser(data.email, data.pwd)
      .then((userCredential) => {
        userCredential.user;
        updateUserProfile(data.username, data.img).then(() => {
          axiosSecure.post("/allusers", newUser).then((response) => {
            if (response.data.insertedId) {
              reset();
              navigate(from, { replace: true });
            }
          });
        });
      })
      .catch((error) => {
        setErr(error.message);
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
                type="password"
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
                type="password"
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
            {err && <span className="text-sm text-red-600 mt-5">{err}</span>}
            <div className="form-control m-5 ">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-sm">
              Already an account?
              <Link to="/login">
                <span className="ms-1 underline  hover:text-red-500">
                  Login
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
