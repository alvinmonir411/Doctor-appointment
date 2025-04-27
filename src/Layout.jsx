import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import Mybookings from "./Components/Mybookings";
import Eroor from "./Eroor";
import Hero from "./Components/Hero";
import Doctors from "./Components/Doctors";
import Deteils from "./Components/Deteils";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
export const route = createBrowserRouter([
  {
    path: "/",
    errorElement: <Eroor />,
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/doctors_data.json"),
        Component: Hero,
      },
      {
        path: "/Deteils/:id",
        loader: async ({ params }) => {
          const res = await fetch("/doctors_data.json");
          const data = await res.json();
          return data.find((Bookdoctor) => Bookdoctor.id == params.id);
        },
        Component: Deteils,
      },
      {
        path: "/Contact",
        Component: Contact,
      },
      {
        path: "/Blogs",
        loader: () => fetch("/Blogs.json"),
        Component: Blogs,
      },
      {
        path: "/Mybookings",
        Component: Mybookings,
      },
      {
        path: "/LogIn",
        Component: LogIn,
      },
      {
        path: "/SignUp",
        Component: SignUp,
      },
    ],
  },
]);
