import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  menus: any;
  sidebarOpen: boolean;
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
  sidebarOpen: false,
};

const menuSlice = createSlice({
  name: "cloit",
  initialState,
  reducers: {
    setSideBarOpen: (state: any) => {
      state.sidebarOpen = !state.sidebarOpen;
    }
  },
});

export const { setSideBarOpen } =
  menuSlice.actions;
export default menuSlice.reducer;
