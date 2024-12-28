import Link from 'next/link';
import { SvgIcon, CUSTOM_ICON_REF } from '..';
import { sidebarMenus } from '@/utils';

interface Props {

}

function Sidebar(props: Props) {

    const { } = props;

    const renderSidebarMenus = (item: any, index: number) => {
        
        const { icon, name } = item;

        const firstIndex:boolean = index === 0;

        return(
            <Link href={"/"} className={`flex justify-between items-center p-4 rounded-xl cursor-pointer hover:bg-green-color ${firstIndex ? 'text-white hover:text-black' : ''}`}>
                <span>{name}</span>
                <SvgIcon name={icon} baseClassname='w-4' />
            </Link>
        )
    }

    return (
        <div className="bg-blue-color p-8 rounded-[25px] w-[250px] h-full">
            <div className="flex justify-between">
                <Link href={"/"}>
                    <SvgIcon name={CUSTOM_ICON_REF.Logo} baseClassname='w-20' />
                </Link>
                <SvgIcon name={CUSTOM_ICON_REF.MenuIcon} baseClassname='w-6 text-white' />
            </div>
            <div className="mt-4 p-1 rounded-xl bg-blue-shade-1">{sidebarMenus.map(renderSidebarMenus)}</div>
        </div>
    )
}

export default Sidebar;