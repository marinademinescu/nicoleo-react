import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const todoList = [
    { id: 1, text: "Compra il latte" },
    { id: 2, text: "Fai la spesa" },
    { id: 3, text: "Leggi un libro" },
    { id: 4, text: "Leggi il cartone del latte" }
];

const todoSlice = createSlice ({
    name: "todo",
    initialState: {value: todoList},
    reducers: {
        upDateTitle: (state, {payload}) => {
            state.title = payload
        },
        upDateText: (state, {payload}) => {
            state.text = payload
        }
    }

})
 
export const { upDateText, upDateTitle} = todoSlice.actions
export default todoSlice.reducer
