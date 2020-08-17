import store from './store/configureStore';
import { addProject } from './store/projects';
import { assignBugToUser, addBug, resolveBug, getBugsByUser, getUnresolvedBugs } from './store/bugs';
import { createSelector } from 'reselect';
import { addUser } from './store/users';

store.subscribe(() => {
   console.log("Store changed!");
});

store.dispatch(addUser({ name: "User 1"}));
store.dispatch(addUser({ name: "User 2"}));

store.dispatch(addProject({ name: "Project 1"}));

store.dispatch(addBug({ description: "Bug 1" }));
store.dispatch(addBug({ description: "Bug 2" }));
store.dispatch(addBug({ description: "Bug 3" }));

store.dispatch(assignBugToUser({ bugId: 1, userId: 1 }));
store.dispatch(resolveBug({ id: 1 }));

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(getBugsByUser(1)(store.getState()));