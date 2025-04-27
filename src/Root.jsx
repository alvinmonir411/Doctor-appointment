import React from "react";
import Navber from "./Components/Navber";
import { Outlet, useNavigation } from "react-router";
import Footer from "./Components/Footer";
import spinner from "./Components/spinner";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="container mx-auto">
      <Navber />

      <div className="min-h-[calc(100vh-200px)] mt-5">
        {navigation.state === "loading" ? <spinner /> : <Outlet />}
      </div>

      <Footer />
    </div>
  );
};

export default Root;
