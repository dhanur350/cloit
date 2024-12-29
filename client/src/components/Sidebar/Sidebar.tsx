'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SvgIcon, CUSTOM_ICON_REF } from '..';
import { Menu, sidebarMenus, sidebarMenusOthers } from '@/utils';

// interface Props {

// }

function Sidebar() {

    // const { } = props;

    const [open, setOpen] = useState<boolean>(false);

    const handleOpenSidebar = () => {
        setOpen(!open);
    };

    const renderSidebarMenus = (item: Menu, index: number) => {
        
        const { icon, name, link } = item;

        const firstIndex:boolean = index === 0;

        return(
            <Link key={`sidebar-menu-index-${index}`} href={link} className={`flex items-center py-3 px-4 my-2 rounded-xl cursor-pointer hover:bg-green-color hover:text-black ${firstIndex ? 'text-white' : 'text-blue-shade-2'}`}>
                <SvgIcon name={icon} baseClassname='w-4' />
                <span className={`${open ? 'block' : 'hidden'} pl-2`}>{name}</span>
            </Link>
        )
    }

    const renderSidebarOtherMenus = (item: Menu, index: number) => {
        
        const { icon, name, link } = item;

        return(
            <Link key={`sidebar-menu-index-${index}`} href={link} className={`flex items-center py-3 px-4 my-2 rounded-xl cursor-pointer text-blue-shade-2 hover:bg-green-color hover:text-black`}>
                <SvgIcon name={icon} baseClassname='w-4' />
                <span className={`${open ? 'block' : 'hidden'} pl-2`}>{name}</span>
            </Link>
        )
    }

    return (
        <div className={`bg-blue-color p-8 rounded-[25px] h-full ease-in duration-300 ${open ? 'w-[250px]' : 'flex flex-col items-center w-[100px]'}`}>
            <div className="flex justify-between items-center">
                <Link href={"/"} className={`${open ? 'block' : 'hidden'}`}>
                    <SvgIcon name={CUSTOM_ICON_REF.Logo} baseClassname='w-20' />
                </Link>
                <button onClick={handleOpenSidebar}>
                    <SvgIcon name={CUSTOM_ICON_REF.MenuIcon} baseClassname='w-6 text-white' />
                </button>
            </div>
            <div className="mt-4 p-1 rounded-xl bg-blue-shade-1">{sidebarMenus.map(renderSidebarMenus)}</div>
            <div className='mt-2'>{sidebarMenusOthers.map(renderSidebarOtherMenus)}</div>
        </div>
    )
}

export default Sidebar;