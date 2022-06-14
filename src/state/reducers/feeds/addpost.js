import { createSlice } from "@reduxjs/toolkit";


const  Modal = createSlice({
    name: "Modal",
    initialState: {
        isOpen: false,

    
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = action.payload;
        }
    }
},);
export default Modal.reducer;
export const { openModal } = Modal.actions;
