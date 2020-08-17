import store from './store/configureStore';
import * as projectActions from './store/projects';
import { addBug, resolveBug, getUnresolvedBugs } from './store/bugs';

store.subscribe(() => {
   console.log("Store changed!");
});

store.dispatch(projectActions.addProject({ name: "Project 1"}));

store.dispatch(addBug({ description: "Bug 1" }));
store.dispatch(addBug({ description: "Bug 2" }));
store.dispatch(addBug({ description: "Bug 3" }));
store.dispatch(resolveBug({ id: 1 }));

console.log(getUnresolvedBugs(store.getState()));