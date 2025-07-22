import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Registration from "../pages/Registration";
import AunkurScholarship from "../pages/AunkurScholarship";
import Error from "../components/Error";
import Success from "../components/Success";
import Activities from "../pages/Activities";
import Library from "../pages/Library";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/UserProfile";
import Notice from "../pages/Notice";
import ProfileSummary from "../components/userProfile/profileSummary";
import MyRegistration from "../components/userProfile/MyRegistration";
import AllUsers from "../components/userProfile/admin/AllUsers";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aunkur-scholarship",
        element: <AunkurScholarship />,
      },
      {
        path: "/registration",
        element: (
          <PrivateRoute>
            <Registration />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/error",
        element: <Error></Error>,
      },
      {
        path: "/success",
        element: <Success></Success>,
      },
      {
        path: "/activities",
        element: <Activities></Activities>,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
      },

      {
        path: "/library",
        element: <Library></Library>,
      },
      {
        path: "/quiz",
        element: <Quiz></Quiz>,
      },
      {
        path: "/result",
        element: <Result></Result>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
        children: [
          {
            index: true, // This is for "/profile"
            element: <ProfileSummary></ProfileSummary>,
          },
          {
            path: "my-registration", // This is for "/profile/my-registration"
            element: <MyRegistration></MyRegistration>,
          },
          {
            path: "admitcard",
            element: <div>Admit Card is Not Published</div>,
          },
          // Admin Routes
          {
            path: "all-users",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "all-registrations",
            element: <div>All Registrations</div>,
          },
          {
            path: "pending-registrations",
            element: <div>Pending Registrations</div>,
          },
          {
            path: "accepted-registrations",
            element: <div>Accepted Registrations</div>,
          },
          {
            path: "rejected-registrations",
            element: <div>Rejected Registrations </div>,
          },
        ],
      },
    ],
  },
]);
