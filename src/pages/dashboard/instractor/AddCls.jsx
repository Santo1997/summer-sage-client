import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
// import { postToDB } from "../../../utilities/apiFetch";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const imgUploadKey = import.meta.env.VITE_IMGKEY;

const AddCls = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { clsName, price, seat, description } = data;
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    axios
      .post(`https://api.imgbb.com/1/upload?key=${imgUploadKey}`, formData)
      .then((response) => {
        if (response.data.success) {
          const imgUrl = response.data.data.display_url;
          const newCls = {
            course_name: clsName,
            course_img: imgUrl,
            course_teacher: {
              name: user.displayName,
              email: user.email,
            },
            course_price: parseInt(price),
            description,
            student_enroll: 0,
            available_seats: parseInt(seat),
            status: "pending",
          };
          // postToDB("course", newCls, "Language");
          axiosSecure.post("/course", newCls).then((response) => {
            if (response.data.insertedId) {
              reset();
              toast.success("Class Updated");
            }
          });
        }
      });
  };

  return (
    <div className="hero min-h-[calc(100vh-300px)]  text-black">
      <div className="hero-content flex-col w-full lg:w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Add A Class</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <input type="hidden" name="status" defaultValue="pending" />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold ">
                  Class name:
                </span>
              </label>
              <input
                type="text"
                placeholder="Class Name"
                className="input input-bordered "
                {...register("clsName", { required: true })}
              />
              {errors.clsName && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control grid grid-cols-3 items-center">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Class Img:
                </span>
              </label>
              <input
                type="file"
                className="col-span-2"
                {...register("photo", { required: false })}
              />
              {errors.photo && (
                <span className="mt-1 text-red-600 col-span-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control flex-row items-center justify-between">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Instructor name
                </span>
              </label>
              <h1>Hossain Santo</h1>
            </div>
            <div className="form-control flex-row items-center justify-between">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Instructor Email
                </span>
              </label>
              <h1>Hossain Santo</h1>
            </div>
            <div className="form-control grid grid-cols-2">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Available seats
                </span>
              </label>
              <input
                type="number"
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

export default AddCls;
