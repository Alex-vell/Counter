import {applyMiddleware, combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";
import thunk from "redux-thunk";
/*import {loadState, saveState} from "./LocalStorage";*/

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: countReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))





// export const store = createStore(rootReducer, loadState())
//
// store.subscribe(() => {
//     saveState({
//         counter: store.getState().counter
//     })
//     // localStorage.setItem('app-state', JSON.stringify(store.getState()))
// })
