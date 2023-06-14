import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BiLineChart } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StudentHome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: stdInfo = {} } = useQuery({
    queryKey: ["student-starts"],
    queryFn: async () => {
      const res = await axiosSecure(`/student-starts?user=${user.email}`);
      return res.data;
    },
  });

  const transformedData = Object.entries(stdInfo).map(([name, get]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    get,
  }));

  return (
    <div className="w-full m-4">
      <h2 className="text-3xl mb-10 capitalize">Hi, {user.displayName}</h2>
      <div className="stats shadow">
        <div className="stat grid-cols-2 w-fit items-center bg-slate-700 text-white">
          <div>
            <div className="stat-title text-white">Total Expense</div>
            <div className="stat-value text-center">${stdInfo.expense}</div>
          </div>
          <div className="flex items-center">
            <BiLineChart size={40} />
          </div>
        </div>

        <div className="stat grid-cols-2 items-center bg-slate-600 text-white">
          <div>
            <div className="stat-title text-white">Class Enrolls</div>
            <div className="stat-value text-center">{stdInfo.enrolls}</div>
          </div>
          <FaCoins size={40} />
        </div>
        <div className="stat grid-cols-2 items-center bg-slate-500 text-white">
          <div>
            <div className="stat-title text-white">Select Class</div>
            <div className="stat-value text-center">{stdInfo.cart}</div>
          </div>
          <SiGoogleclassroom size={40} />
        </div>
      </div>
      <div className=" mt-20">
        <BarChart width={600} height={300} data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="get" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default StudentHome;
