import React from 'react'
import Image from "next/image";
import Card from "../Components/cards/Card";
import { Form } from "react-hook-form";
import sickIcon from "../../public/assets/sick-icon.svg";
import vacationIcon from "../../public/assets/vacation-icon.svg";
import holidayIcon from "../../public/assets/holiday-icon.svg";
import unpaidicon from "../../public/assets/unpaid-icon.svg";

const AllLeaveCategories = () => {
    return (
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
    )
}

export default AllLeaveCategories