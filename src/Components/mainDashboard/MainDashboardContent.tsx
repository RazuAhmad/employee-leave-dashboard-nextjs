import React from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn_components/ui/tabs";

import AllLeaveCategories from "../AllLeaveCategories";
import ApplicationForm from "../ApplicationForm";

const MainDashboardContent = () => {
  return (
    <div className="main-dashboard-area pt-9 pr-[121px] pl-[42px]">
      <AllLeaveCategories />

      {/* Leave Application Form starts */}

      {/* Leave Application Form header */}

      <Tabs defaultValue="account" className=" ">
        <TabsList className="pl-20">
          <TabsTrigger
            className="py-4 px-6 font-normal focus:font-semibold focus:text-[#2C72E9] focus:border-b-4  focus:border-blue-600 text-[16px]"
            value="new-leave"
          >
            New Leave
          </TabsTrigger>

          <TabsTrigger
            value="leave-status"
            className="py-4 px-6 font-normal focus:font-semibold focus:text-[#2C72E9] focus:border-b-4  focus:border-blue-600 text-[16px]"
          >
            Leave Status
          </TabsTrigger>

          <TabsTrigger
            value="balance"
            className="py-4 px-6 font-normal focus:font-semibold focus:text-[#2C72E9] focus:border-b-4  focus:border-blue-600 text-[16px]"
          >
            Balance
          </TabsTrigger>
        </TabsList>

        {/* Based on clicking on the tab, route will be changed. First one is leave application form */}
        <TabsContent value="new-leave">
          {/* Leave Application form */}
          <ApplicationForm />
        </TabsContent>
        <TabsContent value="leave-status">
          <div className="pl-20 pr-[163px] pt-6 bg-[#F2F0F4]">
            <p>
              {" "}
              <span className="text-red-400">Leave status</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              quam.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="balance">
          <div className="pl-20 pr-[163px] pt-6 bg-[#F2F0F4]">
            <p>
              {" "}
              <span className="text-red-400">Balance</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              quam.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainDashboardContent;
