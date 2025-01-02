import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuItem {
  id: string;
  name: string;
  children?: MenuItem[];
}

interface MenuState {
  menus: any;
}

const initialState: MenuState = {
  menus: [
    {
      id: "1",
      name: "System Management",
      children: [
        {
          id: "1-1",
          name: "Systems",
          children: [
            { id: "1-1-1", name: "System Code", children: [] },
            { id: "1-1-2", name: "Properties", children: [] },
          ],
        },
      ],
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    getMenus: (state: MenuState) => {
      return state.menus;
    },
    addMenuItem(state, action: PayloadAction<{ parentId: string; menu: MenuItem }>) {
      const addItem = (menus: MenuItem[]) => {
        menus.forEach((item) => {
          if (item.id === action.payload.parentId) {
            item.children = [...(item.children || []), action.payload.menu];
          } else if (item.children) {
            addItem(item.children);
          }
        });
      };
      addItem(state.menus);
    },
    updateMenuItem(state, action: PayloadAction<{ id: string; newName: string }>) {
      const updateItem = (menus: MenuItem[]) => {
        menus.forEach((item) => {
          if (item.id === action.payload.id) {
            item.name = action.payload.newName;
          } else if (item.children) {
            updateItem(item.children);
          }
        });
      };
      updateItem(state.menus);
    },
    deleteMenuItem(state, action: PayloadAction<{ id: string }>) {
      const deleteItem = (menus: MenuItem[]) => {
        return menus.filter((item) => {
          if (item.children) {
            item.children = deleteItem(item.children);
          }
          return item.id !== action.payload.id;
        });
      };
      state.menus = deleteItem(state.menus);
    },
    saveMenu(state) {
      console.log("Menu saved", state.menus);
    },
  },
});

export const { getMenus, addMenuItem, updateMenuItem, deleteMenuItem, saveMenu } =
  menuSlice.actions;
export default menuSlice.reducer;
