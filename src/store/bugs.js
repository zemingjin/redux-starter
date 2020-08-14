// Actions
const BUG_ADDED = "ADD_BUG";
const BUG_REMOVED = "REMOVE_BUG";
const BUG_RESOLVED = "RESOLVE_BUG";

// Action creators
export const addBug = description => ({
    type: BUG_ADDED,
    payload: {
        description
    }
});

export const removeBug = id => ({
    type: BUG_REMOVED,
    payload: {
        id
    }
});

export const resolveBug = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
});

// Reducers
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
        default:
            return state;
    }
}