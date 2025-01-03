"use client";
import { usePathname } from "next/navigation";
import { CUSTOM_ICON_REF, Sidebar, SvgIcon } from "..";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "@/store";
import { cloitselector } from "@/store/selector";
import "./Layout.scss";
import { setSideBarOpen } from "@/store/slice";

interface Props {
  children?: any;
}

function Layout(props: Props) {

  const { children } = props;

  const router = usePathname();

  const showroute: string = router === "/" ? "home" : router.split('/')[1];
  const selector: any = useSelector(cloitselector);
  const open: boolean = selector?.sidebarOpen;

  const dynamicWidth: string = open ? "w-[calc(100%+250px)]" : "w-[calc(100%+100px)]";
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(setSideBarOpen());
  };

  return (

    <div className="flex min-[200px]:flex-col relative md:flex-row p-6 w-full h-full overflow-hidden">
      <Sidebar />
      <button className='sidebar-mobile-button' onClick={handleOpenSidebar}>
        <SvgIcon name={CUSTOM_ICON_REF.MenuIcon} baseClassname='w-6 text-black' />
      </button>
      <div className={`flex flex-col p-6 overflow-auto ${dynamicWidth} outlet-container`}>

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

function ProviderLayout(props: Props) {
  const { children } = props;
  return (
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  )
}

export default ProviderLayout;