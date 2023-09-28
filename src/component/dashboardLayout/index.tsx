import React, { ReactNode, useState } from "react";
import Sidebar from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-[#f9faff]">
      <div className="w-[7%] bg-white shadow shadow-[#bbc6ab90]">
        <Sidebar />
      </div>
      <main className="w-[93%]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
