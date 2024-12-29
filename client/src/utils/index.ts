import { CUSTOM_ICON_REF } from "@/components";
import { URLRoutes } from "@/routes";

const { client } = URLRoutes;

export interface Menu {
    name: string;
    icon: CUSTOM_ICON_REF;
    link: string;
}

export const sidebarMenus: Menu[] = [
    {
        name: 'Systems',
        icon: CUSTOM_ICON_REF.FolderIcon,
        link: client.home,
    },
    {
        name: 'System Code',
        icon: CUSTOM_ICON_REF.SubMenu,
        link: ''
    },
    {
        name: 'Properties',
        icon: CUSTOM_ICON_REF.MenuIconSquare,
        link: ''
    },
    {
        name: 'Menus',
        icon: CUSTOM_ICON_REF.MenuIconSquare,
        link: ''
    },
]

export const sidebarMenusOthers: Menu[] = [
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