import React from 'react'
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {initialState} from "../state/count-reducer";

type PropsType = {
    count: number
    maxValue: number
    startValue: number
    incCountCallback: (count: number, stepNumber: number) => void
    resetCountCallback: (count: number, startValue: number) => void
    disabledInc: boolean
    disabledReset: boolean
}

export const Counter: React.FC<PropsType> = (
    {
        count, maxValue,
        incCountCallback, disabledInc,
        resetCountCallback, disabledReset, startValue,
        ...restProps
    }) => {

    const incCountCallbackHandler = () => {
        incCountCallback(count, initialState.stepNumber)
    }
    const resetCountCallbackHandler = () => {
        resetCountCallback(count, startValue)
    }


    // classes

    let maxClass = count === maxValue ? `${s.item} + ${s.itemMax}` : s.item
    const classNameButtonInc = `${s.button} + ${s.incCount}`
    const classNameButtonReset = `${s.button} + ${s.resetCount}`

    let disabledAll = startValue >= maxValue || startValue < 0

    let countError = 'Incorrect value'
    let windowValue = disabledAll ? countError : count
    //

    let incorrectValue = `${s.incorrectValue}`
    let windowValueClass = windowValue === countError ? incorrectValue : maxClass

    let disabledIncAll = disabledAll || disabledInc
    let disabledResAll = disabledAll || disabledReset

    return (
        <div>
            <div className={windowValueClass}>{windowValue}</div>
            <div className={s.buttonCont}>

                <Button className={classNameButtonInc} disabled={disabledIncAll} stepNumber={initialState.stepNumber}
                        count={count} onClick={incCountCallbackHandler}>
                    {initialState.buttonInc}
                </Button>

                <Button className={classNameButtonReset}
                        disabled={disabledResAll} count={count} startValue={startValue}
                        onClick={resetCountCallbackHandler}>
                    {initialState.buttonReset}
                </Button>

            </div>

        </div>
    )
}