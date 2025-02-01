import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false
}


const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const { openMenu } = menuSlice.actions;
export default menuSlice.reducer;