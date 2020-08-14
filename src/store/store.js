import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './bugs';

export default createStore(reducer, devToolsEnhancer({trace: true}));
