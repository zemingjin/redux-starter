import store from './store';
import {addBug, removeBug, resolveBug} from "./actions";

const unsubscribe = store.subscribe(() => console.log("Store changed!", store.getState()));

store.dispatch(addBug("Bug 1"));
store.dispatch(resolveBug(1));

console.log(store.getState());
