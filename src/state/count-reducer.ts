export type InitialStateType = typeof initialState

export const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    stepNumber: 1,
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


type ActionType = IncCountActionType | ResetCountActionType | SetValueCountActionType
    | SetMaxValueActionType | SetStartValueActionType | SetSettingsModeActionType
    | SetCountErrorActionType

export const countReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-COUNT': {
            return {
                ...state, count: state.count + state.stepNumber
            }
        }
        case "RESET-COUNT": {
            return {
                ...state, count: state.startValue
            }
        }
        case 'SET-COUNT': {
            return {
                ...state, startValue: action.startValue
            }// 'enter values and press Set'
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
        case 'SET-SETTINGS-MODE': {
            return {
                ...state, settingsMode: action.settingsMode
            }
        }
        case 'SET-ERROR-VALUE': {
            return {
                ...state, errorValue: action.errorValue
            }
        }
        default:
            return state
    }
}

export type IncCountActionType = ReturnType<typeof incCountAC>
export const incCountAC = (count: number, stepNumber: number) => {
    return {
        type: 'INC-COUNT',
        count,
        stepNumber

    } as const
}

export type ResetCountActionType = ReturnType<typeof resetCountAC>
export const resetCountAC = (count: number, startValue: number) => {
    return {
        type: 'RESET-COUNT',
        count,
        startValue
    } as const
}

export type SetValueCountActionType = ReturnType<typeof setCountAC>
export const setCountAC = (startValue: number) => {
    return {
        type: 'SET-COUNT',
        startValue
    } as const
}

export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue,

    } as const
}

export type SetStartValueActionType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        startValue,

    } as const
}

export type SetSettingsModeActionType = ReturnType<typeof setSettingsModeAC>
export const setSettingsModeAC = (settingsMode: boolean) => {
    return {
        type: 'SET-SETTINGS-MODE',
        settingsMode,

    } as const
}

export type SetCountErrorActionType = ReturnType<typeof setErrorValueAC>
export const setErrorValueAC = (errorValue: boolean) => {
    return {
        type: 'SET-ERROR-VALUE',
        errorValue,

    } as const
}
