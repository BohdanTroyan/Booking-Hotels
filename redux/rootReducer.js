import {LOGIN, BOOKING} from './actions'

export function rootReducer(state, action){
    switch(action.type){
        case LOGIN:  
            return Object.assign({}, state,{
              userName: action.userName,
              passWord: action.passWord,
              money: action.money,
            }
            )
        case BOOKING:
            return  Object.assign({}, state,{
                ...state,
                money: action.money - action.price
              }
              )
              
              
            default:
            return state
    }   
}