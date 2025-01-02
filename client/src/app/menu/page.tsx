import { SvgIcon } from "@/components";
import { CUSTOM_ICON_REF } from "../../components";

function MenuPage() {
  return (
    <div className="pt-4">
      <div className="flex">
        <div className="flex justify-center rounded-full w-12 h-12 bg-blue-shade-3">
          <SvgIcon name={CUSTOM_ICON_REF.SubMenu} baseClassname="w-4 text-white" />
        </div>
      </div>

      <div className=""></div>
    </div>
  )
}

export default MenuPage;