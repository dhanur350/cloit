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
];

export const menupageoptions: any[] = [
    {
        label: "Menu Options",
        value: "menu-options"
    },
    {
        label: "Menu Options",
        value: "menu-options"
    },
]

export const nestedMenu: any[] = [
    {
        id: 1,
        name: "Category 1",
        subitem: [
            {
                id: 1.1,
                name: "Category 1.1",
                subitem: [
                    {
                        id: '1.1.1',
                        name: "Category 1.1.1",
                    }
                ]
            },
            {
                id: '2',
                name: 'Category 2',
                subitem: [
                    {
                        id: 1.1,
                        name: "Category 1.1",
                        subitem: [
                            {
                                id: '1.1.1',
                                name: "Category 1.1.1",
                                subitem: [
                                    {
                                        id: 1.1,
                                        name: "Category 1.1",
                                        subitem: [
                                            {
                                                id: '1.1.1',
                                                name: "Category 1.1.1",
                                                subitem: [
                                                    {
                                                        id: 1.1,
                                                        name: "Category 1.1",
                                                        subitem: [
                                                            {
                                                                id: '1.1.1',
                                                                name: "Category 1.1.1",
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 1.2,
                        name: 'Category 1.2',
                        subitem: [
                            {
                                id: 1.1,
                                name: "Category 1.1",
                                subitem: [
                                    {
                                        id: '1.1.1',
                                        name: "Category 1.1.1",
                                        subitem: [
                                            {
                                                id: 1.1,
                                                name: "Category 1.1",
                                                subitem: [
                                                    {
                                                        id: '1.1.1',
                                                        name: "Category 1.1.1",
                                                        subitem: [
                                                            {
                                                                id: 1.1,
                                                                name: "Category 1.1",
                                                                subitem: [
                                                                    {
                                                                        id: '1.1.1',
                                                                        name: "Category 1.1.1",
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Category 2",
        subitem: [
            {
                id: 1.1,
                name: "Category 1.1",
                subitem: [
                    {
                        id: '1.1.1',
                        name: "Category 1.1.1",
                        subitem: [
                            {
                                id: 1.1,
                                name: "Category 1.1",
                                subitem: [
                                    {
                                        id: '1.1.1',
                                        name: "Category 1.1.1",
                                        subitem: [
                                            {
                                                id: 1.1,
                                                name: "Category 1.1",
                                                subitem: [
                                                    {
                                                        id: '1.1.1',
                                                        name: "Category 1.1.1",
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Category 3",
        subitem: [
            {
                id: 1.1,
                name: "Category 1.1",
                subitem: [
                    {
                        id: '1.1.1',
                        name: "Category 1.1.1",
                    }
                ]
            }
        ]
    }
];

export const inputList:any [] = [
    {
        id:"menu",
        name: "menu",
        placeholder: "Menu ID",
        label: "Menu ID"
    },
    {
        id:"depth",
        name: "depth",
        placeholder: "Depth",
        label: "Depth"
    },
    {
        id:"parent-data",
        name: "parent-data",
        placeholder: "Parent Data",
        label: "Parent Data"
    },
    {
        id:"name",
        name: "name",
        placeholder: "Name",
        label: "Name"
    },
]