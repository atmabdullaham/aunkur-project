import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const StudentOfTheYearCard = ({
  year,
  profile,
  studentName,
  school,
  className,
  rollNumber,
  bgColor,
  btnColor,
  quoteColor,
}) => {
  return (
    <div className={`card md:w-auto ${bgColor}  shadow-sm `}>
      <div className="card-body space-y-4">
        <div className="flex justify-between items-center">
          <FaQuoteLeft className={`text-4xl ${quoteColor}`} />
          <span
            className={`text-xl ${btnColor} px-4 py-2 text-white rounded-lg`}
          >
            Year-{year}
          </span>
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint
          quasi nihil soluta sit minus aut, laudantium iure quidem adipisci
          autem omnis aperiam officia earum, reprehenderit,
        </p>
        <div className="mt-6 flex justify-start gap-4 items-center">
          <div>
            <img className="w-20 h-20 rounded-full" src={profile} alt="" />
          </div>
          <div>
            <h4 className="text-xl font-semibold">{studentName}</h4>
            <h5 className="text-gray-600 font-medium">{school}</h5>
            <div className="flex items-center gap-4">
              <h5>Class:{className}</h5>
              <h5>Roll:{rollNumber}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOfTheYearCard;
