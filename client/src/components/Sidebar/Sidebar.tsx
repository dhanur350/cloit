'use client';
import Link from 'next/link';
import { SvgIcon, CUSTOM_ICON_REF } from '..';
import { sidebarMenus, sidebarMenusOthers } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { cloitselector } from '@/store/selector';
import { setSideBarOpen } from '@/store/slice';
import "./Sidebar.scss";

// interface Props {

// }

function Sidebar() {

    // const { } = props;
    const dispatch = useDispatch();
    const selector:any = useSelector(cloitselector);
    const open: boolean = selector?.sidebarOpen;
    

    const handleOpenSidebar = () => {
        dispatch(setSideBarOpen());
    };

    const renderSidebarMenus = (item: any, index: number) => {
        
        const { icon, name, link } = item;

        const firstIndex:boolean = index === 0;

        return(
            <Link key={`sidebar-menu-index-${index}`} href={link} className={`flex items-center py-3 px-4 my-2 rounded-xl cursor-pointer hover:bg-green-color hover:text-black ${firstIndex ? 'text-white' : 'text-blue-shade-2'}`}>
                <SvgIcon name={icon} baseClassname='w-6' />
                <span className={`${open ? 'block' : 'hidden'} pl-2`}>{name}</span>
            </Link>
        )
    }

    const renderSidebarOtherMenus = (item: any, index: number) => {
        
        const { icon, name, link } = item;

        return(
            <Link key={`sidebar-menu-index-${index}`} href={link} className={`flex items-center py-3 px-4 my-2 rounded-xl cursor-pointer text-blue-shade-2 hover:bg-green-color hover:text-black`}>
                <SvgIcon name={icon} baseClassname='w-6' />
                <span className={`${open ? 'block' : 'hidden'} pl-2`}>{name}</span>
            </Link>
        )
    }

    return (
        <div className={`bg-blue-color p-2 rounded-[25px] h-full ease-in duration-300 ${open ? 'w-[250px] min-w-[250px] mobile-responsive-sidebar-open' : 'flex flex-col items-center xl:w-[100px] xl:min-w-[100px] max-[1000px]:w-0 max-[1000px]:p-0 mobile-responsive-sidebar-close'}`}>
            <div className="flex justify-between items-center p-6 mobile-button sidebar-logo-container">
                <Link href={"/"} className={`${open ? 'block' : 'hidden'} mobile-button`}>
                    <SvgIcon name={CUSTOM_ICON_REF.Logo} baseClassname='w-20' />
                </Link>
                <button className='mobile-button' onClick={handleOpenSidebar}>
                    <SvgIcon name={CUSTOM_ICON_REF.MenuIcon} baseClassname='w-6 text-white' />
                </button>
            </div>
            <div className="mt-4 p-1 rounded-xl bg-blue-shade-1 mobile-button">{sidebarMenus.map(renderSidebarMenus)}</div>
            <div className='mt-2 mobile-button'>{sidebarMenusOthers.map(renderSidebarOtherMenus)}</div>
        </div>
    )
}

export default Sidebar;