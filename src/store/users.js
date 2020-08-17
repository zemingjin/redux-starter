import { createSlice } from "@reduxjs/toolkit";

let lastUserId = 0;

const slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (users, action) => {
            users.push({
                id: ++lastUserId,
                name: action.payload.name,
            });
        }
    }
});

export const { addUser } = slice.actions;
export default slice.reducer;