import FolderIcon from "./Icons/FolderIcon";
import Logo from "./Icons/Logo";
import MenuIcon from "./Icons/MenuIcon";
import MenuIconSquare from "./Icons/MenuIconSquare";
import MenuSidebar from "./Icons/MenuSidebar";
import SubMenu from "./Icons/SubMenu";
import SubmenuDotted from "./Icons/SubmenuDotted";
import SubMenuOne from "./Icons/SubMenuOne";

export enum CUSTOM_ICON_REF {
    Logo = 'Logo',
    MenuIcon = 'MenuIcon',
    MenuSidebar = 'MenuSidebar',
    FolderIcon = 'FolderIcon',
    SubMenu = 'SubMenu',
    MenuIconSquare = 'MenuIconSquare',
    SubMenuOne = 'SubMenuOne',
    SubMenuDotted = 'SubMenuDotted',
}

export const CustomIcon: any = {
    [CUSTOM_ICON_REF.Logo]: Logo,
    [CUSTOM_ICON_REF.MenuIcon]: MenuIcon,
    [CUSTOM_ICON_REF.MenuSidebar]: MenuSidebar,
    [CUSTOM_ICON_REF.FolderIcon]: FolderIcon,
    [CUSTOM_ICON_REF.SubMenu]: SubMenu,
    [CUSTOM_ICON_REF.MenuIconSquare]: MenuIconSquare,
    [CUSTOM_ICON_REF.SubMenuOne]: SubMenuOne,
    [CUSTOM_ICON_REF.SubMenuDotted]: SubmenuDotted,
}