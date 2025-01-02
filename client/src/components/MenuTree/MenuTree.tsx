import React from "react";
import { useDispatch } from "react-redux";
// import { RootState } from "@/store";
import { deleteMenuItem, MenuItem } from "@/store/slice";

interface MenuTreeProps {
  menus: MenuItem[];
}

const MenuTree: React.FC<MenuTreeProps> = ({ menus }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteMenuItem({ id }));
  };

  return (
    <ul className="ml-4">
      {menus.map((menu) => (
        <li key={menu.id} className="flex items-center space-x-2">
          <span>{menu.name}</span>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(menu.id)}
          >
            Delete
          </button>
          {menu.children && <MenuTree menus={menu.children} />}
        </li>
      ))}
    </ul>
  );
};

export default MenuTree;
