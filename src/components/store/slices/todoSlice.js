import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const todoList = [
    { id: 1, text: "Compra il latte",title: "Latte" },
    { id: 2, text: "Fai la spesa", title: "Spesa" },
    { id: 3, text: "Leggi un libro", title: "Libro" },
    { id: 4, text: "Leggi il cartone del latte", title: "Cartone" }
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
        },
        updateData: (state, {payload}) => {
            const updateTodos = state.value.map((item ) =>
                item.id === payload.id ? { ...item, ...payload } : item
              );
            state.value = updateTodos
        }
    

    }

})
 
export const { upDateText, upDateTitle, updateData } = todoSlice.actions
export default todoSlice.reducer
