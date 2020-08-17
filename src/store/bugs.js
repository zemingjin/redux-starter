import { createSlice } from '@reduxjs/toolkit';
import {createSelector} from "reselect/src";

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        assignBugToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId);
            bugs[index].userId = userId;
        },

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

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
        bugs => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId =>
    createSelector(
        state => state.entities.bugs,
        bugs => bugs.filter(bug => bug.userId === userId)
    );

export const { assignBugToUser, addBug, resolveBug } = slice.actions;
export default slice.reducer;

