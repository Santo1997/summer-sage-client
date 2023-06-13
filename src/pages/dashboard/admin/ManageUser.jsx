import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import anime from "animejs";

const ManageUser = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users`);
      return res.data;
    },
  });

  useEffect(() => {
    anime({
      targets: ".user-row",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, [users]);

  const accessDBHandle = (id, itmData, notify) => {
    axiosSecure.put(`/updateUser/${id}`, itmData).then((response) => {
      if (response.data.modifiedCount > 0) {
        toast.success(notify);
        refetch();
      }
    });
  };

  const handleInstractor = (itm) => {
    const instractor = {
      role: "instractor",
    };
    accessDBHandle(itm._id, instractor, `${itm.name} Is Instractor Now`);
  };

  const handleAdmin = (itm) => {
    const instractor = {
      role: "admin",
    };
    accessDBHandle(itm._id, instractor, `${itm.name} Is Admin Now`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>User Image</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((itm, index) => (
            <tr key={itm._id} className="user-row">
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={itm.img} />
                  </div>
                </div>
              </td>
              <td>
                <h2 className="font-bold">{itm.name}</h2>
              </td>
              <td>
                <h2 className="font-bold">{itm.email}</h2>
              </td>
              <td>
                <h2 className="font-bold capitalize">{itm.role}</h2>
              </td>
              <td className="grid justify-center gap-2">
                <button
                  onClick={() => handleInstractor(itm)}
                  className="btn btn-outline btn-xs btn-info"
                  disabled={itm.role === "instractor" || itm.role === "admin"}
                >
                  Make Instructor
                </button>
                <button
                  onClick={() => handleAdmin(itm)}
                  className="btn btn-outline btn-xs btn-success"
                  disabled={itm.role === "admin"}
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
