import React, { useContext, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signUpanim from "../assets/reg.json";
import signUpAnim from "../assets/register.json";
import googleLogo from "../assets/google.svg";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  // Set Title
  useEffect(() => {
    document.title = "SignUp | Fluentor";
  }, []);
  const { signInWithGoogle, createUserWithEP, updateUser, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    try {
      const result = await createUserWithEP(email, password);
      const user = result.user;

      await updateUser(name, photo);
      setUser({ ...user, displayName: name, photoURL: photo });
      toast.success("Successfully registered");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Registration failed");
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("logged in");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-280px)] ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden  lg:block text-center lg:text-left">
          <Lottie className="h-[500px]" animationData={signUpAnim}></Lottie>
        </div>
        {/* form */}
        <div className="card bg-white w-full max-w-lg shrink-0 ">
          <Lottie
            className="h-30 w-20 mx-auto"
            animationData={signUpanim}
          ></Lottie>

          <div className="card-body bg-base-100 text-black">
            <legend className="fieldset-legend text-xl mx-auto font-bold">
              Welcome to Aunkur!
            </legend>
            <div className="bg-base-200 border-base-300 rounded-box w-full border p-4">
              <div className=" ">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn hover:bg-base-200 hober:border-1 hover:border-black w-full"
                >
                  <img className="w-8" src={googleLogo} alt="" /> Continue with
                  Google
                </button>
              </div>
              <div className="divider">OR</div>
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset pt-0">
                {/* Name */}

                <label className="label">Name</label>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  className="input w-full"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && (
                  <p className="text-red-400">This field is required</p>
                )}

                {/* email */}
                <label className="label">Email</label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  className="input w-full"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-400">This field is required</p>
                )}

                {/* Password */}
                <label className="label">Password</label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "password min 6 characters",
                    },
                    maxLength: {
                      value: 8,
                      message: " password max 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message:
                        "Password must contain at least one uppercase letter and one number",
                    },
                  })}
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />

                {/* Show specific validation messages */}
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}

                {/* photo URL */}
                <label className="label">Photo URL</label>
                <input
                  {...register("photo", {
                    required: "Photo URL is required",
                    pattern: {
                      value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i,
                      message: "Enter a valid URL",
                    },
                  })}
                  className="input w-full"
                  placeholder="Photo URL"
                  type="url"
                />
                {errors.photo && (
                  <p className="text-red-400">{errors.photo.message}</p>
                )}

                <input
                  className="btn text-white bg-red-500 hover:border-red-600 mt-4"
                  type="submit"
                  value="Login"
                />
              </form>
            </div>
            <div className="card-actions justify-center mt-4">
              <h2 className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link className="text-gray-900 font-semibold" to="/login">
                  Log in
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
