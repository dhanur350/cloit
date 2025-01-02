import { CUSTOM_ICON_REF } from "../components/SvgIcon/IconRef";
import { URLRoutes } from "@/routes";

const { client } = URLRoutes;

export const sidebarMenus: any[] = [
    {
        name: 'Systems',
        icon: CUSTOM_ICON_REF.FolderIcon,
        link: client.home,
    },
    {
        name: 'System Code',
        icon: CUSTOM_ICON_REF.SubMenu,
        link: client.systemcode
    },
    {
        name: 'Properties',
        icon: CUSTOM_ICON_REF.MenuIconSquare,
        link: client.about
    },
    {
        name: 'Menus',
        icon: CUSTOM_ICON_REF.MenuIconSquare,
        link: client.menu
    },
    {
        name: 'API List',
        icon: CUSTOM_ICON_REF.MenuIconSquare,
        link: client.menu
    },
]

export const sidebarMenusOthers: any[] = [
    {
        name: 'Users and Groups',
        icon: CUSTOM_ICON_REF.FolderIcon,
        link: ''
    },
    {
        name: 'Competition',
        icon: CUSTOM_ICON_REF.FolderIcon,
        link: ''
    },
]