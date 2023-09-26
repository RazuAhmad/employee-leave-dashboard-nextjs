import React from 'react'
import Image from "next/image";
import dragDrop from "../../public/assets/drag-drop.svg";
import fileCrossIcon from "../../public/assets/file-cross.svg";
import { Calendar } from "@/shadcn_components/ui/calendar";

const Form = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
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
                    <div className="py-8 px-10 border-2 border-dashed border-[#AFC6FF] text-center">
                        <Image src={dragDrop} alt="" className='inline-block' />
                        <h3>Drag & drop files</h3>
                        <p>
                            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD,
                            AI, Word, PPT
                        </p>
                    </div>

                    {/* uploaded files preview */}
                    <div className="file-preview-area flex justify-between self-end gap-4">
                        <div className="file-preview-1 border-2 rounded-sm py-[15px] pr-[21px] pl-[23px] text-center">
                            <Image src={fileCrossIcon} alt="" className="inline-block" />
                            <p>your-file-here.PDF</p>
                        </div>
                        <div className="file-preview-2 border-2 rounded-sm py-[15px] pr-[21px] pl-[23px] text-center">
                            <Image src={fileCrossIcon} alt="" className="inline-block" />
                            <p>your-file-here.PDF</p>
                        </div>
                        <div className="file-preview-3 border-2 rounded-sm py-[15px] pr-[21px] pl-[23px] text-center">
                            <Image src={fileCrossIcon} alt="" className="inline-block" />
                            <p>your-file-here.PDF</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form