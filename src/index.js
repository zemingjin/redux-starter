import store from './store/configureStore';
import * as actions from './store/projects';

store.subscribe(() => {
   console.log("Store changed!");
});

store.dispatch(actions.addProject({ description: "Project 1"}));
/*
store.dispatch(actions.addBug({ description: "Bug 1" }));
store.dispatch(actions.addBug({ description: "Bug 2" }));
store.dispatch(actions.addBug({ description: "Bug 3" }));
store.dispatch(actions.resolveBug({ id: 1 }));
*/
console.log(store.getState());