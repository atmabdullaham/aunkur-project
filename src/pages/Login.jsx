import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import signInAnimation from "../assets/login.json";
import signInAnim from "../assets/loged.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.svg";

import toast from "react-hot-toast";
// import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  useEffect(() => {
    document.title = "Login | Fluentro";
  }, []);
  const { signInWithGoogle, loginUser } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async (result) => {
        const userInfo = {
          uid: result.user?.uid,
          email: result.user?.email,
          name: result.user?.displayName,
          role: "user",
        };
        try {
          await axios
            .post("http://localhost:5000/user", userInfo)
            .then((res) => {});
        } catch (error) {
          alert("Something went wrong. Please try again.");
        }
        toast.success("Successfully logged in");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    // try {
    //   // ✅ Wait for JWT to be received and cookie to be set
    //   await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
    //     withCredentials: true,
    //   });

    // ✅ Navigate only after token cookie is set
    //
    //     } catch (error) {
    //       toast.error("Login failed: " + error.message);
    //     }
    //   })
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then(() => {
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero  bg-base-200 min-h-[calc(100vh-280px)]">
      <div className=" hero-content flex-col lg:flex-row-reverse">
        {/*1.  Animation */}
        <div className="hidden lg:block lg:text-left">
          <Lottie
            className="h-[600px]"
            animationData={signInAnimation}
          ></Lottie>
        </div>

        {/* 2. Form */}
        <div className="card  bg-white w-full max-w-lg shrink-0 ">
          <Lottie
            className="h-30 w-20 mx-auto"
            animationData={signInAnim}
          ></Lottie>

          <div className="card-body bg-base-100 text-black ">
            <legend className="fieldset-legend text-xl mx-auto font-bold">
              Welcome Back!
            </legend>
            <div className="bg-base-200 border-base-300 rounded-box w-full border p-4">
              <div className=" ">
                <button onClick={handleGoogleSignIn} className="btn   w-full">
                  <img className="w-8" src={googleLogo} alt="" /> Continue with
                  Google
                </button>
              </div>
              <div className="divider">OR</div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset  pt-0"
              >
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
                      message: "Password does not match",
                    },
                    maxLength: {
                      value: 8,
                      message: "Password does not match",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message: "Password does not match",
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

                <input
                  className="btn text-white bg-green-500 hover:border-green-600 mt-4"
                  type="submit"
                  value="Login"
                />
              </form>
            </div>
            <div className="card-actions justify-center mt-4">
              <h2 className="text-sm text-gray-500">
                No account yet?{" "}
                <Link className="text-gray-900 font-semibold" to="/signup">
                  Sign Up
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
