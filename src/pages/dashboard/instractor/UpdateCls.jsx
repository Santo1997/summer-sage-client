import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { putToDB } from "../../../utilities/apiFetch";

const UpdateCls = () => {
  const courseData = useLoaderData();

  const { _id, course_name, available_seats, course_price, description } =
    courseData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //TODO: photo add
    const { seat, price, description } = data;

    const updateCls = {
      course_price: parseInt(price),
      description,
      available_seats: parseInt(seat),
    };

    const route = `updateCourses/${_id}`;

    putToDB(route, updateCls, "Class");
  };

  return (
    <div className="hero min-h-[calc(100vh-300px)]  text-black">
      <div className="hero-content flex-col w-full lg:w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Update A Class</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <input type="hidden" name="status" defaultValue="pending" />
            <div className="form-control flex-row items-center justify-between">
              <label className="label">
                <span className="label-text text-black text-lg font-bold ">
                  Class name:
                </span>
              </label>
              <h1 className="text-2xl font-bold">{course_name}</h1>
            </div>
            <div className="form-control grid grid-cols-2">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Available seats
                </span>
              </label>
              <input
                type="number"
                defaultValue={available_seats}
                placeholder="Available"
                className="input input-bordered "
                {...register("seat", { required: true })}
              />
              {errors.seat && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control grid grid-cols-2">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Price: $
                </span>
              </label>
              <input
                type="number"
                defaultValue={course_price}
                placeholder="Price"
                className="input input-bordered "
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Details:
                </span>
              </label>
              <textarea
                placeholder="Details"
                defaultValue={description}
                className="input input-bordered h-28 "
                {...register("description", { required: true })}
              ></textarea>

              {errors.description && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
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

export default UpdateCls;
