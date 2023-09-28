import React from "react";
import DashboardLayout from "../component/dashboardLayout";
import HomePage from "./home/HomePage";

const AppView = () => {
  return (
    <DashboardLayout>
      <HomePage />
    </DashboardLayout>
  );
};

export default AppView;
