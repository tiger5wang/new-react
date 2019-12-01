import { createStore } from 'redux';

import {cartList} from './reducers';

const store = createStore(cartList);

export default store