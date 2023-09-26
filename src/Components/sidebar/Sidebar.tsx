import Image from "next/image";
import dashboardIcon from "../../../public/assets/dashboard-icon.svg";
import calenderIcon from "../../../public/assets/calender-icon.svg";
import teamIcon from "../../../public/assets/team-icon.svg";
import policyIcon from "../../../public/assets/policy-icon.svg";
import AddNewLeaveButton from "../button/AddNewLeaveButton";

const Sidebar = () => {
    return (
        <div className="col-span-2">
            <div className="sidebar-area px-[9px] pt-6 h-full">

                <AddNewLeaveButton />

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
    )
}

export default Sidebar