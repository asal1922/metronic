import { IconType } from 'react-icons';
import { RxDashboard } from 'react-icons/rx';
import { CiUser, CiSettings, CiViewList } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { LuMessageCircleMore } from "react-icons/lu";
import { CgMenuBoxed,CgMenuGridO } from "react-icons/cg";
const Icons: Record<string, IconType> = {
    RxDashboard,
    CiUser,
    CiSettings,
    LuUsers,
    MdOutlineSecurity,
    CiViewList,
    TfiShoppingCart,
    IoSearchOutline,
    HiOutlineBellAlert,
    LuMessageCircleMore,
    CgMenuBoxed,
    CgMenuGridO
};

interface IconProps {
    name: keyof typeof Icons;
    className?: string;
}

const Icon = ({ name, className }: IconProps) => {
    const SelectedIcon = Icons[name];
    return SelectedIcon ? <SelectedIcon className={className} /> : null;
};

export default Icon;
