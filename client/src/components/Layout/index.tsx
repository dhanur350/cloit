"use client";
import { usePathname } from "next/navigation";
import { CUSTOM_ICON_REF, Sidebar, SvgIcon } from "..";

interface Props {
  children?: any;
}

function Layout(props: Props) {

  const { children } = props;

  const router = usePathname();

  const showroute: string = router === "/" ? "home" : router.split('/')[1];

  return (
    <div className="flex p-6 w-full h-full">
      <Sidebar />
      <div className="flex flex-col p-6">

        <div className="flex pb-6">
          <SvgIcon name={CUSTOM_ICON_REF.FolderIcon} baseClassname="w-6 text-gray-color" />
          <span className="px-2 text-gray-color">/</span>
          <span>{showroute}</span>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Layout;