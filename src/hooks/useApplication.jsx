import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { data: application = [] } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      return res.data;
    },
  });
  return [application];
};

export default useApplication;
