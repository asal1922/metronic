//customHooks
import useMenu from "@/customHooks/useMenu";

//react
import { useState } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";

//public
import Icon from "../../../../public/assets/icons/reactIcons";

const Sidebar = () => {
    const menuItems = useMenu();
    const [menuStates, setMenuStates] = useState<{ [key: string]: boolean }>({});

    const toggleMenuState = (id: string) => {
        setMenuStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const renderMenuItems = (items: any[], parentId: string, level = 1) => {
        return (
            <div className="relative w-full">
                {level > 1 && (
                    <div className="absolute top-0 left-10 w-px h-full bg-gray-300"></div>
                )}

                {items.map((item, idx) => {
                    const uniqueId = `${parentId}-${idx}`;

                    return (
                        <div className={`menu-container ${level >= 2 ? 'with-guide' : ''}`} key={uniqueId}>
                            <div
                                className={`submenu pl-[${level * 24}px] flex justify-between items-center gap-3 w-full text-gray-600 cursor-pointer`}
                                onClick={() => toggleMenuState(uniqueId)}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon name={item.icon} className="text-gray-400 text-xl" />
                                    <span>{item?.header}</span>
                                </div>

                                {item?.sub_menu && item.sub_menu.length > 0 && (
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleMenuState(uniqueId);
                                        }}
                                        className="flex justify-center items-center cursor-pointer"
                                    >
                                        {menuStates[uniqueId] ? <PiMinus /> : <PiPlus />}
                                    </div>
                                )}
                            </div>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden
                                ${menuStates[uniqueId] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {item?.items?.map((subItem:any, index:number) => (
                                    <div
                                        key={`item-${index}`}
                                        className={`w-full bg-gray-100 pl-[${level * 24 + 24}px] py-1 relative`}
                                    >
                                        <span>{subItem?.name}</span>
                                    </div>
                                ))}

                                {menuStates[uniqueId] && item?.sub_menu?.length > 0 && (
                                    renderSubMenu(item.sub_menu, uniqueId, level + 2)
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderSubMenu = (subMenuItems: any[], parentId: string, level: number) => {
        return (
            <div className="relative w-full">
                {level >= 2 && (
                    <div className="absolute top-0 left-12 w-px h-full bg-gray-300"></div>
                )}

                {subMenuItems.map((submenu, subIdx) => {
                    const subMenuId = `${parentId}-sub-${subIdx}`;

                    return (
                        <div key={subMenuId} className="menu-container relative w-[85%] ml-[15%]">
                            <div
                                className={`relative flex justify-between items-center gap-3 w-full text-gray-600 cursor-pointer submenu-item pl-[24px]`}
                                onClick={() => toggleMenuState(subMenuId)}
                            >
                                <div className="flex items-center gap-3">
                                    <span>{submenu?.name}</span>
                                </div>

                                {submenu?.items && submenu.items.length > 0 && (
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleMenuState(subMenuId);
                                        }}
                                        className="flex justify-center items-center cursor-pointer"
                                    >
                                        {menuStates[subMenuId] ? <PiMinus /> : <PiPlus />}
                                    </div>
                                )}
                            </div>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ml-8
                                ${menuStates[subMenuId] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {submenu?.items?.map((subItem:any, subItemIdx:number) => (
                                    <span
                                        key={`subItem-${subItemIdx}`}
                                        className={`block pl-[${level * 24 + 12}px] pb-1 text-gray-400 cursor-pointer hover:text-gray-600`}
                                    >
                                        {subItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div>
            <div className="sidebar flex flex-col gap-8 fixed bg-white overflow-y-auto h-screen w-96 px-4 py-6" dir="ltr">
                {menuItems?.map((section, sectionIdx) => (
                    <div className="flex flex-col items-start" key={sectionIdx}>
                        <p className="text-gray-600 text-start w-full m-2 pl-2">{section?.title}</p>
                        {renderMenuItems(section?.items || [], `${sectionIdx}`)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
