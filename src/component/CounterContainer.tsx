import React, {useReducer, useState} from 'react'
import {Counter} from './Counter'
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {countReducer, IncCountAC, ResetCountAC} from "../state/count-reducer";

export type CountType = {
    startValue: number
    maxValue: number
    stenNumber: number
    buttonInc: string
    buttonReset: string
}

export const CounterContainer = () => {
    let startValue = 0
    let maxValue = 5
    let stepNumber = 1
    let buttonInc = 'inc'
    let buttonReset = 'reset'

    const [count, dispatchAddCount] = useReducer(countReducer, startValue)

    const incCount = (count: number, stepNumber: number) => {
        //dispatchCount(IncCountAC(count, stepNumber))
        //setAddCount(count + stepNumber)
        dispatchAddCount(IncCountAC(count, stepNumber))
    }
    const resetCount = (count: number, startValue: number) => {
        //setAddCount(startValue)
        dispatchAddCount(ResetCountAC(count ,startValue))
    }

    let disabledInc = count >= maxValue
    let disabledReset = count === startValue

    return (
        <div className={s.appCont}>
            <Counter count={count}
                     maxValue={maxValue}/>
            <Button incCountCallback={incCount}
                    resetCountCallback={resetCount}
                    buttonInc={buttonInc}
                    buttonReset={buttonReset}
                    disabledInc={disabledInc}
                    disabledReset={disabledReset}
                    count={count}
                    stepNumber={stepNumber}
                    startValue={startValue}/>
        </div>
    )
}