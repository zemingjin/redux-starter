import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        addBug: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            });
        },

        resolveBug: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
    }
});

export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

export const { addBug, resolveBug } = slice.actions;
export default slice.reducer;

