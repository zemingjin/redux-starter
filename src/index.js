import store from './store/store';
import * as actions from './store/bugs';

store.subscribe(() => {
   console.log("Store changed!");
});

store.dispatch(actions.addBug("Bug 1"));
store.dispatch(actions.addBug("Bug 2"));
store.dispatch(actions.addBug("Bug 3"));
store.dispatch(actions.resolveBug(1));
console.log(store.getState());