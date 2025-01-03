import { SvgIcon } from "@/components";
import { CUSTOM_ICON_REF } from "../../components";
import { inputList, menupageoptions, nestedMenu } from "@/utils";

function MenuPage() {

  const renderMenupageoptions = (item: any, index: number) => {
    return (
      <option key={index} value={item.value}>{item.label}</option>
    )
  }

  const rendernestedMenu = (item: any, index: number) => {

    const { subitem } = item;

    const rendersubitem = (item: any, index: number) => {
      return rendernestedMenu(item, index);
    }

    return (
      <div key={index} className="pl-4 border-l-blue-shade-7 border-l-[1px]">
        <li id={item.id}>{item.name}</li>
        {subitem && <ul className="pl-4">{subitem?.map(rendersubitem)}</ul>}
      </div>
    )
  }

  const renderInputList = (item: any, index: number) => {
    const { placeholder, label, name, id } = item;
    return (
      <div className="flex flex-col py-4" key={index}>
        <span className="text-blue-shade-4 text-sm pl-1 py-4">{label}</span>
        <input placeholder={placeholder} name={name} id={id} className="py-3 mt-1 px-4 pr-6 outline-none border-none bg-white-shade rounded-xl border-2 cursor-pointer hover:border-blue-shade-6 !w-[400px]" />
      </div>
    )
  }

  return (
    <div className="pt-4">
      <div className="flex items-center">
        <div className="flex justify-center rounded-full w-12 h-12 bg-blue-shade-3">
          <SvgIcon name={CUSTOM_ICON_REF.SubMenu} baseClassname="w-4 text-white" />
        </div>
        <h2 className="font-extrabold text-[35px] pl-4">Menus</h2>
      </div>

      <div className="flex min-[200px]:flex-col xl:flex-row pr-4">
        <div className="flex flex-col">
          <div className="flex flex-col p-4">
            <span className="text-blue-shade-4 py-4">Menu</span>
            <select name="menu" id="menu" className="py-3 px-4 pr-6 outline-none border-none bg-white-shade rounded-xl w-[250px] border-2 cursor-pointer hover:border-blue-shade-6">{menupageoptions.map(renderMenupageoptions)}</select>
          </div>

          <div className="flex p-4">
            <button className="px-4 py-2 rounded-3xl text-white bg-blue-shade-5 mr-4 w-[150px]">Expand All</button>
            <button className="px-4 py-2 rounded-3xl border-gray-shade border-2 text-blue-shade-6 w-[150px]">Collapse All</button>
          </div>

          <div className="flex flex-col p-4">
            <ul>{nestedMenu.map(rendernestedMenu)}</ul>
          </div>
        </div>

        <div className="flex flex-col xl:pl-[200px] min-[200px]:pt-[100px]">
          {inputList.map(renderInputList)}
          <button className="bg-blue-shade-3 rounded-full mt-4 text-center py-4 text-white !w-[400px]">Save</button>
        </div>
      </div>

    </div>
  )
}

export default MenuPage;