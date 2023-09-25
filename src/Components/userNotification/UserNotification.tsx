import Image from 'next/image'
import userImg from '../../../public/assets/user-img.svg'
import arrowDown from '../../../public/assets/arrow-down.svg';


import Notification from '../notification/Notification';
import NavbarThreeDot from '../navbarThreeDot/NavbarThreeDot';

const UserNotification = () => {
    return (
        <div className='flex gap-16'>
            <div className='flex items-center gap-4 ml-6 cursor-pointer'>
                <Image src={userImg} alt='' />
                <span className='text-white'>Anton</span>
                <Image src={arrowDown} alt='' />
            </div>
            <Notification />
            <NavbarThreeDot />

        </div>
    )
}

export default UserNotification