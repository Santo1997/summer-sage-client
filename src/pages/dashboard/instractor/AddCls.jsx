const AddCls = () => {
  return (
    <div className="hero min-h-[calc(100vh-300px)]  text-black">
      <div className="hero-content flex-col w-full lg:w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Add A Class</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form className="card-body">
            <input type="hidden" name="status" defaultValue="pending" />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold ">
                  Class name:
                </span>
              </label>
              <input
                type="text"
                name="clsName"
                placeholder="Class name"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control grid grid-cols-3 items-center">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Class Img:
                </span>
              </label>
              <input type="file" name="photo" required className="col-span-2" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Instructor name
                </span>
              </label>
              <input
                type="text"
                name="instName"
                placeholder="Instructor name"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Instructor Email
                </span>
              </label>
              <input
                type="text"
                name="instMail"
                placeholder="Instructor Email"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control grid grid-cols-2">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Available seats
                </span>
              </label>
              <input
                type="number"
                name="seat"
                placeholder="Available"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control grid grid-cols-2">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Price: $
                </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control m-5 ">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCls;
