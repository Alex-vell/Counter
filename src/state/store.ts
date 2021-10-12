import {combineReducers, createStore} from "redux";
import {countReducer} from "./count-reducer";
import {loadState, saveState} from "./LocalStorage";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: countReducer
})


type AppStoreType = typeof store
export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    // localStorage.setItem('app-state', JSON.stringify(store.getState()))
})