"use client";

import {usePathname} from "next/navigation";

function useRouterHooks() {

    const route = usePathname();

    const getPathname = () => {
        console.log(route);
    }

    return {
        getPathname
    }
}

export default useRouterHooks;