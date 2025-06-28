import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-green-500 rounded-lg p-8 max-w-4xl mx-auto bg-base-100"
    >
      <h2 className="font-bold mb-6 text-xl">রেজিস্ট্রেশন ফরম</h2>
      <div className="flex flex-wrap gap-6">
        {/* Left column */}
        <div className="flex-1 min-w-[320px] space-y-4">
          <div>
            <label className="label">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="select select-bordered w-full"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-error">{errors.gender.message}</p>
            )}
          </div>
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
          <div>
            <label className="label">Phone *</label>
            <input
              {...register("phone", { required: "Phone is required" })}
              placeholder="Phone"
              className="input input-bordered w-full"
            />
            {errors.phone && (
              <p className="text-error">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="label">Class *</label>
            <input
              {...register("class", { required: "Class is required" })}
              placeholder="Class"
              className="input input-bordered w-full"
            />
            {errors.class && (
              <p className="text-error">{errors.class.message}</p>
            )}
          </div>
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
        {/* Right column */}
        <div className="flex-1 min-w-[320px] space-y-4">
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
          <div>
            <label className="label">Occupation (optional)</label>
            <input
              {...register("occupation1")}
              placeholder="Occupation"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Occupation (optional)</label>
            <input
              {...register("occupation2")}
              placeholder="Occupation"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Email Address (optional) *</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label">Mobile (online, Whatsapp)</label>
            <input
              {...register("mobile")}
              placeholder="Mobile address"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Roll*</label>
            <input
              {...register("roll", { required: "Roll is required" })}
              placeholder="Roll"
              className="input input-bordered w-full"
            />
            {errors.roll && <p className="text-error">{errors.roll.message}</p>}
          </div>
          <div>
            <label className="label">Date of Birth</label>
            <input
              type="date"
              {...register("dob")}
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button type="submit" className="btn btn-success px-10">
          সাবমিট করুন
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
