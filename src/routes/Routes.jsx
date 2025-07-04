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
import NewsAndBlog from "../pages/NewsAndBlog";
import Calender from "../pages/Calender";
import Library from "../pages/Library";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
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
        element: <Registration />,
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
        path: "/error?",
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
        path: "/news-blogs",
        element: <NewsAndBlog></NewsAndBlog>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
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
    ],
  },
]);
