"use client";

import React from "react";
import Sidebar from "../sidebar/Sidebar";

import MainDashboardContent from "./MainDashboardContent";

const MainDashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-12">
        {/* Side bar area */}
        <div className="col-span-2">
          <Sidebar />
        </div>
        {/*  */}
        <div className="col-span-10">
          <MainDashboardContent />
        </div>
      </div>
    </section>
  );
};

export default MainDashboard;
