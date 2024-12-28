import {CUSTOM_ICON_REF} from "@/components";
import { URLRoutes } from "@/routes";

const {client} = URLRoutes;

export const sidebarMenus: any[] = [
    {
        name: 'Systems',
        icon: CUSTOM_ICON_REF.FolderIcon,
        link: client.home, 
    },
    {
        name: 'System Code',
        icon: CUSTOM_ICON_REF.SubMenu
    },
    {
        name: 'Properties',
        icon: CUSTOM_ICON_REF.MenuIconSquare
    },
    {
        name: 'Menus',
        icon: CUSTOM_ICON_REF.MenuIconSquare
    },
]