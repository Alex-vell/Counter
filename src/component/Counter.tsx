import React from 'react'
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {initialState} from "../state/count-reducer";

type PropsType = {
    counter: number
    maxValue: number
    startValue: number
    onIncCountCallback: (count: number, stepNumber: number) => void
    onResetCountCallback: (count: number, startValue: number) => void
    disabledInc: boolean
    disabledReset: boolean
    settingsMode: boolean
    errorValue: boolean
}

export const Counter: React.FC<PropsType> = (
    {
        counter, maxValue, startValue, onIncCountCallback, disabledInc,
        onResetCountCallback, disabledReset, settingsMode, errorValue
    }) => {

    // const {counter, maxValue, startValue, onIncCountCallback, disabledInc,
    //     onResetCountCallback, disabledReset, settingsMode, errorValue} = props

    const {stepNumber, textCountError, textSettingsMode, buttonInc, buttonReset} = initialState

    const onIncCountHandler = () => onIncCountCallback(counter, stepNumber)

    const onResetCountHandler = () => onResetCountCallback(counter, startValue)

    const displayCounter = () => settingsMode ? (errorValue ? textCountError : textSettingsMode) : counter


    //className

    const counterClass = counter === maxValue ? `${s.item} ${s.itemMax}` : s.item
    const classNameButtonInc = disabledInc ? `${s.disabled}` : `${s.button} ${s.incCount}`
    const classNameButtonReset = disabledReset ? `${s.disabled}` : `${s.button} ${s.resetCount}`
    const displayCounterClass = (errorValue || settingsMode) ? `${s.incorrectValue}` : counterClass


    return (
        <div>
            <div className={displayCounterClass}>{displayCounter()}</div>
            <div className={s.buttonCont}>

                <Button className={classNameButtonInc} disabled={disabledInc}
                        stepNumber={stepNumber}
                        counter={counter} onClick={onIncCountHandler}>
                    {buttonInc}
                </Button>

                <Button className={classNameButtonReset}
                        disabled={disabledReset} counter={counter} startValue={startValue}
                        onClick={onResetCountHandler}>
                    {buttonReset}
                </Button>

            </div>

        </div>
    )
}