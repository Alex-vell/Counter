import {Dispatch} from "redux";
import {AppStateType} from "./store";

export type InitialStateType = typeof initialState

// export type InitialStateType = {
//     counter: number
//     startValue: number
//     maxValue: number
//     stepNumber: number
//     maxNumberCounter: number
//     settingsMode: boolean
//     errorValue: boolean
//     buttonInc: string
//     buttonReset: string
//     buttonSet: string
//     textSettingsMode: string
//     titleOneInput: string
//     titleSecondInput: string
//     textCountError: string
// }

export const initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    stepNumber: 1,
    maxNumberCounter: 10000,
    settingsMode: false,
    errorValue: false,
    buttonInc: 'inc',
    buttonReset: 'reset',
    buttonSet: 'Set',
    textSettingsMode: 'press Set',
    titleOneInput: 'maxValue:',
    titleSecondInput: 'startValue:',
    textCountError: 'Incorrect value',
}


// type ActionType = IncCountActionType | ResetCountActionType | SetMaxValueActionType
//     | SetStartValueActionType | SetSettingsModeActionType | SetCountErrorActionType

type ActionType = ReturnType<typeof incCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setSettingsModeAC>
    | ReturnType<typeof setErrorValueAC>

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-COUNT': {
            return {
                ...state, counter: action.counter + state.stepNumber
            }
        }
        case "RESET-COUNT": {
            return {
                ...state, counter: state.startValue
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state, maxValue: action.maxValue
            }
        }
        case 'SET-START-VALUE': {
            return {
                ...state, startValue: action.startValue
            }
        }
        case 'SET-ERROR-VALUE': {
            return {
                ...state, errorValue: action.errorValue
            }
        }
        case 'SET-SETTINGS-MODE': {
            return {
                ...state, settingsMode: action.settingsMode
            }
        }
        default:
            return state
    }
}

// Action Creator

//export type IncCountActionType = ReturnType<typeof incCountAC>
export const incCountAC = (counter: number, stepNumber: number) => {
    return {
        type: 'INC-COUNT',
        counter,
        stepNumber

    } as const
}

//export type ResetCountActionType = ReturnType<typeof resetCountAC>
export const resetCountAC = (counter: number, startValue: number) => {
    return {
        type: 'RESET-COUNT',
        counter,
        startValue
    } as const
}

//export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue,

    } as const
}

//export type SetStartValueActionType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        startValue,

    } as const
}

//export type SetSettingsModeActionType = ReturnType<typeof setSettingsModeAC>
export const setSettingsModeAC = (settingsMode: boolean) => {
    return {
        type: 'SET-SETTINGS-MODE',
        settingsMode,

    } as const
}

//export type SetCountErrorActionType = ReturnType<typeof setErrorValueAC>
export const setErrorValueAC = (errorValue: boolean) => {
    return {
        type: 'SET-ERROR-VALUE',
        errorValue,

    } as const
}

// Thunk creator

export const saveValueFromLS = () => {
    return (dispatch: Dispatch, getState: () => AppStateType) => {
        let currentMaxValue = getState().counter.maxValue
        let currentStartValue = getState().counter.startValue
        localStorage.setItem('maxValue', JSON.stringify(currentMaxValue))
        localStorage.setItem('startValue', JSON.stringify(currentStartValue))
    }
}

export const setValueFromLSThunkCreator = (counter: number) => {
    return (dispatch: Dispatch) => {
        let startValueAsString = localStorage.getItem('startValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        if (startValueAsString && maxValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            let newMaxValue = JSON.parse(maxValueAsString)
            dispatch(setStartValueAC(newStartValue))
            dispatch(setMaxValueAC(newMaxValue))
            dispatch(resetCountAC(counter, newStartValue))
        }
    }
}
