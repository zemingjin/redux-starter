import store from './store/configureStore';
import * as projectActions from './store/projects';
import * as bugsActions from './store/bugs';

store.subscribe(() => {
   console.log("Store changed!");
});

store.dispatch(projectActions.addProject({ name: "Project 1"}));

store.dispatch(bugsActions.addBug({ description: "Bug 1" }));
store.dispatch(bugsActions.addBug({ description: "Bug 2" }));
store.dispatch(bugsActions.addBug({ description: "Bug 3" }));
store.dispatch(bugsActions.resolveBug({ id: 1 }));

console.log(store.getState());