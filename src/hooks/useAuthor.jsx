import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAuthor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAuthor, isLoading: isAuthorLoading } = useQuery({
    queryKey: ["isAuthor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/author/${user?.email}`);
      return res.data.role;
    },
  });
  return [isAuthor, isAuthorLoading];
};
export default useAuthor;
