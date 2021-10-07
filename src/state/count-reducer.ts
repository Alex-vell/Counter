

export const countReducer = (state: number, action: incCountActionType | ResetCountActionType) => {
  switch (action.type){
      case 'INC-COUNT': {
          return  (action.count + action.stepNumber)
          //(action.count + action.stepNumber)
          //[state].map(f =>  + f.stenNumber)
      }
      case "RESET-COUNT": {
          return (action.startValue)
          /*action.startValue*/
      }
      default:
          return state
  }
}

export type incCountActionType = ReturnType<typeof IncCountAC>
export const IncCountAC = (count: number, stepNumber: number) => {
    return {
        type: 'INC-COUNT',
        count,
        stepNumber

    }as const
}
export type ResetCountActionType = ReturnType<typeof ResetCountAC>
export const ResetCountAC = (count: number, startValue: number) => {
    return {
        type: 'RESET-COUNT',
        count,
        startValue
    }as const
}