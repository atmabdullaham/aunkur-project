import React from "react";
import useApplication from "../../hooks/useApplication";
import MyRegisrationCard from "./MyRegisrationCard";

const MyRegistration = () => {
  const [application] = useApplication();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {application.map((reg) => (
        <MyRegisrationCard key={reg._id} reg={reg}></MyRegisrationCard>
      ))}
    </div>
  );
};

export default MyRegistration;
