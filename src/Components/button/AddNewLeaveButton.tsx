import Image from "next/image";
import plusIcon from "../../../public/assets/plus-icon.svg";
const AddNewLeaveButton = () => {
    return (
        <>
            <button className="w-full add-new-leave-btn py-[10px] pl-4 text-center cursor-pointer mb-16 border border-solid border-[#2c72e9] flex items-center gap-6">
                <Image src={plusIcon} alt="" />
                <span>Add New Leave</span>
            </button>
        </>
    )
}

export default AddNewLeaveButton