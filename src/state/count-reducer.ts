export type InitialStateType = typeof initialState

export const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 5,
    stepNumber: 1,
    buttonInc: 'inc',
    buttonReset: 'reset',
    buttonSet: 'Set'
}


type ActionType = IncCountActionType | ResetCountActionType | SetValueCountActionType
    | SetMaxValueActionType | SetStartValueActionType

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
        default:
            return state
    }
}

export type IncCountActionType = ReturnType<typeof IncCountAC>
export const IncCountAC = (count: number, stepNumber: number) => {
    return {
        type: 'INC-COUNT',
        count,
        stepNumber

    } as const
}

export type ResetCountActionType = ReturnType<typeof ResetCountAC>
export const ResetCountAC = (count: number, startValue: number) => {
    return {
        type: 'RESET-COUNT',
        count,
        startValue
    } as const
}

export type SetValueCountActionType = ReturnType<typeof SetCountAC>
export const SetCountAC = (startValue: number) => {
    return {
        type: 'SET-COUNT',
        startValue
    } as const
}

export type SetMaxValueActionType = ReturnType<typeof SetMaxValueAC>
export const SetMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue,

    } as const
}

export type SetStartValueActionType = ReturnType<typeof SetStartValueAC>
export const SetStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        startValue,

    } as const
}
