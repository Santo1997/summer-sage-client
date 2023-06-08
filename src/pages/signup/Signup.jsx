const Signup = () => {
  return (
    <div className="hero min-h-[calc(100vh-300px)]  text-black">
      <div className="hero-content flex-col w-full lg:w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10 ">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold ">
                  Username:
                </span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Photo URL:
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control m-5 ">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-sm">
              Already an account?
              <span className="ms-1 underline  hover:text-red-500">Signin</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
