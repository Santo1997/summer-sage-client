import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { postToDB } from "../../utilities/apiFetch";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { signIn, handleGoogleSignIn } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr("");

    signIn(data.email, data.pwd)
      .then((userCredential) => {
        userCredential.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  const googleHandle = () => {
    handleGoogleSignIn(googleProvider).then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      const newUser = {
        img: user.photoURL,
        name: user.displayName,
        email: user.email,
        role: "student",
      };

      postToDB("allusers", newUser, "User");
      navigate(from, { replace: true });
    });
  };

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
                })}
              />
              {errors.pwd?.type === "required" && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
              {err && (
                <>
                  <p className="text-sm text-red-600 mt-5">{err}</p>
                </>
              )}
            </div>
            <div className="form-control m-5">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-sm">
              Create an account?
              <Link to="/signUp">
                <span className="ms-1 underline  hover:text-red-500">
                  Signup
                </span>
              </Link>
            </p>
          </form>
          <div className="divider">OR Go With</div>
          <div className=" text-center mb-10">
            <button
              onClick={googleHandle}
              className="btn btn-outline btn-success btn-md"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
