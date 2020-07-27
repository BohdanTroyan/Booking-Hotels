import {createStore} from 'redux'
import { rootReducer } from './rootReducer';

const initialState = {
    userName: '',
    passWord: '',
  }
  
  const Store = createStore(rootReducer, initialState)

  export default Store