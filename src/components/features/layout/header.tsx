//public
import Icon from '../../../../public/assets/icons/reactIcons';
import images from '../../../../public/assets/images';

//next
import Image from 'next/image';

//zustand
import { useMainStore } from "@/store/zustand/dashboard";

const Header = () => {
    const { openMenu, setOpenMenu } = useMainStore()
    const headerItem = ['Home', 'Public Profiles', 'My Account', 'Network', 'Authentication', 'Help'];
    const headerIcon = ['RxDashboard', 'IoSearchOutline', 'HiOutlineBellAlert', 'LuMessageCircleMore']
    return (
        <header className=" header w-full h-12 bg-white border-b fixed top-0 left-0 right-0 z-10 !shadow-lg !shadow-gray-300 flex justify-between px-8 items-center">
            <div className="flex justify-center items-center gap-4 text-gray-500 text-sm max-lg:hidden">
                {headerItem.map((item) => (
                    <span className="hover:text-gray-800 cursor-pointer">{item}</span>
                ))}

            </div>
            <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                <Icon name="CgMenuGridO" className="w-4 h-4 text-gray-500 lg:hidden" />
            </div>
            <div className="flex justify-center items-center gap-4">
                {headerIcon.map((icon) => (<Icon name={icon} className="w-4 h-4 text-gray-500" />))}

                <div className="w-8 h-8 rounded-full border-2 border-solid border-blue-600">
                    <Image
                        src={images.infoTable.four}
                        width={32}
                        height={32}
                        layout="responsive"
                        alt="profile"
                        className="rounded-full aspect-square object-cover"
                    />
                </div>
            </div>
        </header>

    )
}
export default Header;