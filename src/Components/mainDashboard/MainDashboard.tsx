"use client";

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Image from "next/image";
import sickIcon from "../../../public/assets/sick-icon.svg";
import vacationIcon from "../../../public/assets/vacation-icon.svg";
import holidayIcon from "../../../public/assets/holiday-icon.svg";
import unpaidicon from "../../../public/assets/unpaid-icon.svg";
import plusIcon from "../../../public/assets/plus-icon.svg";
import dashboardIcon from "../../../public/assets/dashboard-icon.svg";
import calenderIcon from "../../../public/assets/calender-icon.svg";
import teamIcon from "../../../public/assets/team-icon.svg";
import policyIcon from "../../../public/assets/policy-icon.svg";
import dragDrop from "../../../public/assets/drag-drop.svg";
import fileCrossIcon from "../../../public/assets/file-cross.svg";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn_components/ui/tabs";
import Card from "../cards/Card";
import { Form } from "react-hook-form";
import { Calendar } from "@/shadcn_components/ui/calendar";

const MainDashboard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <section>
      <div className="grid grid-cols-12">
        {/* Side bar area */}
        <div className="col-span-2">
          <div className="sidebar-area px-[9px] pt-6 h-full">
            {/* Add new leave button */}
            <button className="w-full add-new-leave-btn py-[10px] pl-4 text-center cursor-pointer mb-16 border border-solid border-[#2c72e9] flex items-center gap-6">
              <Image src={plusIcon} alt="" />
              <span>Add New Leave</span>
            </button>

            {/*All sidebar menu */}
            <div>
              <button className=" w-full dashboard-menu py-[10px] cursor-pointer hover:bg-[#538DFF4D] mb-2 pl-6 flex gap-6 items-center">
                <Image src={dashboardIcon} alt="" />
                <span>Dashboard</span>
              </button>
              <button className="w-full py-[10px]  cursor-pointer hover:bg-[#538DFF4D] mb-2 pl-6 flex gap-6 items-center">
                <Image src={calenderIcon} alt="" />
                <span>My Leaves</span>
              </button>
              <div className="team-menu py-[10px]  cursor-pointer hover:bg-[#538DFF4D] mb-2 pl-6 flex gap-6 items-center">
                <Image src={teamIcon} alt="" />
                <span>My Leaves</span>
              </div>
              <div className="leave-policy-menu py-[10px] cursor-pointer hover:bg-[#538DFF4D] mb-2 pl-6 flex gap-6 items-center">
                <Image src={policyIcon} alt="" />
                <span>Leave Policy</span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col-span-10">
          <div className="main-dashboard-area pt-9 pr-[121px] pl-[42px]">
            {/* All Leave categories */}
            <div className="grid grid-cols-12 gap-x-4 mb-6">
              {/* Sick category leave*/}
              <Card>
                <div className="flex items-center gap-[6px]">
                  <Image src={sickIcon} alt="" />
                  <span>Sick</span>
                </div>
                <div>
                  <p>
                    {" "}
                    <span>4</span> Taken
                  </p>
                  <p>
                    {" "}
                    <span>2</span> days scheduled
                  </p>
                </div>
              </Card>

              {/* Vacation category leave */}
              <Card>
                <div className="flex items-center gap-[6px]">
                  <Image src={vacationIcon} alt="" />
                  <span>Vacation</span>
                </div>
                <div>
                  <p>
                    {" "}
                    <span>9/4</span> Available
                  </p>
                  <p>
                    {" "}
                    <span>2</span> days scheduled
                  </p>
                </div>
              </Card>
              {/* Holidays category leave */}
              <Card>
                <div className="flex items-center gap-[6px]">
                  <Image src={holidayIcon} alt="" />
                  <span>Holidays</span>
                </div>
                <div>
                  <p>
                    {" "}
                    <span>4</span> Left
                  </p>
                  <p> 6th December next</p>
                </div>
              </Card>

              {/* Unpaid category leave */}
              <Card>
                <div className="flex items-center gap-[6px]">
                  <Image src={unpaidicon} alt="" />
                  <span>Unpaid</span>
                </div>
                <div>
                  <p>
                    {" "}
                    <span>4</span> Taken
                  </p>
                  <p>
                    {" "}
                    <span>2</span> days scheduled
                  </p>
                </div>
              </Card>
            </div>

            {/* Leave Application Form starts */}

            {/* Leave Application Form header */}
            {/* <div className='leave-application-header pl-20 flex gap-6'>
                        </div> */}

            <Tabs defaultValue="account" className=" ">
              <TabsList className="pl-20">
                <TabsTrigger
                  className="py-4 px-6 focus:border-b-4  focus:border-blue-600"
                  value="new-leave"
                >
                  New Leave
                </TabsTrigger>

                <TabsTrigger
                  value="leave-status"
                  className="px-6 py-4 focus:border-b-4  focus:border-blue-600"
                >
                  Leave Status
                </TabsTrigger>

                <TabsTrigger
                  value="balance"
                  className="px-6 py-4 focus:border-b-4  focus:border-blue-600"
                >
                  Balance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="new-leave">
                {/* Leave Application form */}
                <div className="pl-20 pr-[163px] pt-6 pb-14 bg-[#F2F0F4]">
                  <div className="mb-16">
                    <h3 className="mb-1">Application Form</h3>
                    <p>Please fill the below form to apply</p>
                  </div>

                  <form>
                    <div className="grid grid-cols-2 gap-12 mb-16">
                      {/* Form input field */}
                      <div>
                        {/* Form All input field */}
                        <div className="flex justify-between mb-[34px]">
                          <label htmlFor="vacation">
                            Leave Type <span className="text-[#FF5449]">*</span>
                          </label>
                          <select
                            name=""
                            id="vacation"
                            className="px-4 w-[296px] h-14 rounded-sm  border-[0.5px] border-[#919094]"
                          >
                            <option value="vacation">Vacation</option>
                          </select>
                        </div>
                        <div className="flex justify-between mb-[34px]">
                          <label htmlFor="vacation">
                            From Date <span className="text-[#FF5449]">*</span>
                          </label>
                          <div>
                            <input
                              type="date"
                              name=""
                              id=""
                              className="px-4 w-[296px] h-14 rounded-sm border-[0.5px] border-[#919094] mb-2"
                            />
                            <br />
                            <div className="flex gap-4 items-center">
                              <input
                                type="checkbox"
                                name="oneDayOnly"
                                id="oneDayOnly"
                                value="oneDayOnly"
                              />
                              <label htmlFor="oneDayOnly">One day only</label>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between mb-[34px]">
                          <label htmlFor="vacation">
                            To Date <span className="text-[#FF5449]">*</span>
                          </label>
                          <input
                            type="date"
                            name=""
                            id=""
                            className="px-4 w-[296px] h-14 rounded-sm border-[0.5px] border-[#919094]"
                          />
                        </div>
                        <div className="flex justify-between mb-[34px]">
                          <label htmlFor="vacation">
                            Leave Type <span className="text-[#FF5449]">*</span>
                          </label>
                          <select
                            name=""
                            id="vacation"
                            className="px-4 w-[296px] h-14 rounded-sm border-[0.5px] border-[#919094]"
                          >
                            <option value="vacation">Vacation</option>
                          </select>
                        </div>
                      </div>

                      {/* Calender */}
                      <div>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                        />
                      </div>
                    </div>

                    {/* Upload document area */}
                    <div>
                      <p className="mb-4">Upload Document</p>

                      <div className="flex gap-4">
                        <div className="py-8 pl-[42px] pr-[49px] border-2 border-dashed border-[#AFC6FF] ">
                          <Image src={dragDrop} alt="" />
                          <h3>Drag & drop files</h3>
                          <p>
                            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD,
                            AI, Word, PPT
                          </p>
                        </div>

                        {/* uploaded files preview */}
                        <div className="file-preview-area flex justify-between self-end gap-4">
                          <div className="file-preview-1 border-2 rounded-sm py-[15px] pr-[21px] pl-[23px]">
                            <Image src={fileCrossIcon} alt="" />
                            <p>your-file-here.PDF</p>
                          </div>
                          <div className="file-preview-2 border-2 rounded-sm py-[15px] pr-[21px] pl-[23px]">
                            <Image src={fileCrossIcon} alt="" />
                            <p>your-file-here.PDF</p>
                          </div>
                          <div className="file-preview-3 border-2 rounded-sm py-[15px] pr-[21px] pl-[23px]">
                            <Image src={fileCrossIcon} alt="" />
                            <p>your-file-here.PDF</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </TabsContent>
              <TabsContent value="leave-status">
                <div className="pl-20 pr-[163px] pt-6 bg-[#F2F0F4]">
                  <p>
                    {" "}
                    <span className="text-red-400">Leave status</span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quo, quam.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="balance">
                <div className="pl-20 pr-[163px] pt-6 bg-[#F2F0F4]">
                  <p>
                    {" "}
                    <span className="text-red-400">Balance</span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quo, quam.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDashboard;
