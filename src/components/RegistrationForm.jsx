import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = ({ isFillup, setisFillup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.table(data);
    if (data) {
      setisFillup(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        isFillup ? "hidden" : "block"
      } border border-green-500 rounded-lg p-8 max-w-4xl mx-auto bg-base-100`}
    >
      <div className="text-center mb-8 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-tirobangla">
          রেজিস্ট্রেশন ফরম
        </h1>
        <p className="text-gray-600">
          অনুগ্রহ করে সকল তথ্য সঠিকভাবে প্রদান করুন
        </p>
      </div>
      {/* -------------------------------- */}
      {/* Personal Information div*/}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name english */}
        <div>
          <label className="label">Name (English) *</label>
          <input
            {...register("name_en", { required: "Name is required" })}
            placeholder="Write Your Name in English"
            className="input input-bordered w-full"
          />
          {errors.name_en && (
            <p className="text-error">{errors.name_en.message}</p>
          )}
        </div>
        {/* Name Bangla */}
        <div>
          <label className="label">Name (Bangla) *</label>
          <input
            {...register("name_bn", {
              required: "Name in Bangla is required",
            })}
            placeholder="Name in Bangla"
            className="input input-bordered w-full"
          />
          {errors.name_bn && (
            <p className="text-error">{errors.name_bn.message}</p>
          )}
        </div>
        {/* Gender */}
        <div>
          <label className="label">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="select select-bordered w-full"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-error">{errors.gender.message}</p>
          )}
        </div>
        {/* Date of Birth */}
        <div>
          <label className="label">Date of Birth</label>
          <input
            type="date"
            {...register("dob")}
            className="input input-bordered w-full"
          />
        </div>
      </div>
      {/* -------------------------------- */}
      {/* Father's and Mothers's div */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Father's Name */}
        <div>
          <label className="label">Fathers Name *</label>
          <input
            {...register("father_name", {
              required: "Father's name is required",
            })}
            placeholder="Fathers Name"
            className="input input-bordered w-full"
          />
          {errors.father_name && (
            <p className="text-error">{errors.father_name.message}</p>
          )}
        </div>
        {/* Occupation Father*/}
        <div>
          <label className="label">Occupation (optional)</label>
          <input
            {...register("occupation1")}
            placeholder="Occupation"
            className="input input-bordered w-full"
          />
        </div>
        {/* Mother's Name */}
        <div>
          <label className="label">Mothers Name *</label>
          <input
            {...register("mother_name", {
              required: "Mother's name is required",
            })}
            placeholder="Mothers Name"
            className="input input-bordered w-full"
          />
          {errors.mother_name && (
            <p className="text-error">{errors.mother_name.message}</p>
          )}
        </div>
        {/* Occupation Mother*/}
        <div>
          <label className="label">Occupation (optional)</label>
          <input
            {...register("occupation2")}
            placeholder="Occupation"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      {/* --------------------------------- */}
      {/* Educational Information */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* School Name */}
        <div>
          <label className="label">Name of School *</label>
          <input
            {...register("school_name", {
              required: "School name is required",
            })}
            placeholder="Write Your School Name"
            className="input input-bordered w-full"
          />
          {errors.school_name && (
            <p className="text-error">{errors.school_name.message}</p>
          )}
        </div>
        {/* Class */}
        <div>
          <label className="label">Class *</label>
          <input
            {...register("class", { required: "Class is required" })}
            placeholder="Class"
            className="input input-bordered w-full"
          />
          {errors.class && <p className="text-error">{errors.class.message}</p>}
        </div>
        {/* Roll */}
        <div>
          <label className="label">Roll*</label>
          <input
            {...register("roll", { required: "Roll is required" })}
            placeholder="Roll"
            className="input input-bordered w-full"
          />
          {errors.roll && <p className="text-error">{errors.roll.message}</p>}
        </div>
      </div>
      {/* -------------------------- */}
      {/* Contact Information */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="label">Phone *</label>
          <input
            {...register("phone", { required: "Phone is required" })}
            placeholder="Phone"
            className="input input-bordered w-full"
          />
          {errors.phone && <p className="text-error">{errors.phone.message}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label className="label">Whatsapp Number *</label>
          <input
            {...register("mobile")}
            placeholder="Mobile address"
            className="input input-bordered w-full"
          />
        </div>
        {/* Present Adress */}
        <div>
          <label className="label">Present Address *</label>
          <div className="flex gap-2">
            <input
              {...register("present_area", { required: true })}
              placeholder="Area"
              className="input input-bordered w-full"
            />
            <input
              {...register("present_thana", { required: true })}
              placeholder="Thana"
              className="input input-bordered w-full"
            />
            <input
              {...register("present_zilla", { required: true })}
              placeholder="Zilla"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Permanent Adress */}
        <div>
          <label className="label">Permanent Address *</label>
          <div className="flex gap-2">
            <input
              {...register("permanent_area", { required: true })}
              placeholder="Area"
              className="input input-bordered w-full"
            />
            <input
              {...register("permanent_thana", { required: true })}
              placeholder="Thana"
              className="input input-bordered w-full"
            />
            <input
              {...register("permanent_zilla", { required: true })}
              placeholder="Zilla"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
      {/* ------------------------------------- */}
      {/* email and exam center choice */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*Exam Center */}
        <div>
          <label className="label">
            Exam Center Choice{" "}
            <span className="text-xs">(পরীক্ষা কেন্দ্র পছন্দ) *</span>
          </label>
          <select
            {...register("exam_center", {
              required: "Exam center is required",
            })}
            className="select select-bordered w-full"
          >
            <option value="">Select</option>
            <option value="center1">Center 1</option>
            <option value="center2">Center 2</option>
          </select>
          {errors.exam_center && (
            <p className="text-error">{errors.exam_center.message}</p>
          )}
        </div>
        {/* Email Adress */}
        <div>
          <label className="label">Email Address (optional) *</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
      </div>
      {/* ------------------------------------ */}

      <div className="text-center mt-8">
        <input
          className="btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          type="submit"
          value="সাবমিট করুন"
        />
      </div>
    </form>
  );
};

export default RegistrationForm;
