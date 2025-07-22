import moment from "moment"; // npm install moment

const MyRegistrationCard = ({ reg }) => {
  return (
    <div className="card w-full max-w-md bg-white shadow-lg border border-gray-200 text-gray-800">
      <div className="card-body space-y-3">
        <h2 className="text-xl font-semibold text-center border-b pb-2">
          {reg.name_en} ({reg.name_bn})
        </h2>
        <span
          className={`badge ${
            reg.reg_status === "accepted"
              ? "badge-success"
              : reg.reg_status === "rejected"
              ? "badge-error"
              : "badge-warning"
          }`}
        >
          {reg.reg_status.replace("_", " ")}
        </span>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <span className="font-medium">Class:</span> {reg.student_class}
          </div>
          <div>
            <span className="font-medium">Roll:</span> {reg.student_roll}
          </div>

          <div className="col-span-2">
            <span className="font-medium">School:</span> {reg.school_name}
          </div>

          <div>
            <span className="font-medium">Phone:</span> {reg.phone_number}
          </div>
          <div>
            <span className="font-medium">WhatsApp:</span> {reg.whatsapp_number}
          </div>

          <div>
            <span className="font-medium">bKash:</span> {reg.bkash_number}
          </div>
          <div>
            <span className="font-medium">Txn ID:</span> {reg.transaction_Id}
          </div>

          <div className="col-span-2">
            <span className="font-medium">Exam Center:</span> {reg.exam_center}
          </div>
        </div>

        <p className="text-xs text-gray-500 text-right mt-2">
          Submitted: {moment(reg.submittedAt).format("DD MMM YYYY, h:mm A")}
        </p>
      </div>
    </div>
  );
};

export default MyRegistrationCard;
