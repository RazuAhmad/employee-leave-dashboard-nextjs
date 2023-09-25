import Image from 'next/image'
import navLogo from '../../../public/assets/navlogo.svg'
import Search from '../search/Search'
import UserNotification from '../userNotification/UserNotification'

const Navbar = () => {
    return (
        <nav className='bg-blue-600 pl-[17px] pr-6 py-[13px]'>
            <div className="grid grid-cols-2 items-center">
                <div className='cursor-pointer'>
                    <Image src={navLogo} alt='' />
                </div>

                {/* Search & User profile pic & notification area */}
                <div className='flex justify-end gap-16'>
                    <Search />
                    <UserNotification />
                </div>
                <div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar