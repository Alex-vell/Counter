import React, {ChangeEvent} from 'react'
import s from './Counter.module.css'
import {Button} from "./Button/Button";
import {initialState} from "../state/count-reducer";

type PropsType = {
    count: number
    maxValue: number
    startValue: number
    onIncCountCallback: (count: number, stepNumber: number) => void
    onResetCountCallback: (count: number, startValue: number) => void
    disabledInc: boolean
    disabledReset: boolean
    onChangeSettingsValueCallback: (e: ChangeEvent<HTMLInputElement>) => void
    settingsMode: boolean
    errorValue: boolean
}

export const Counter: React.FC<PropsType> = (
    {
        count, maxValue, startValue,
        onIncCountCallback, disabledInc,
        onResetCountCallback, disabledReset,
        onChangeSettingsValueCallback, settingsMode, errorValue,
        ...restProps
    }) => {

    const {stepNumber, textCountError, textSettingsMode, buttonInc, buttonReset} = initialState

    const onIncCountHandler = () => { onIncCountCallback(count, stepNumber) }
    const onResetCountHandler = () => { onResetCountCallback(count, startValue) }

    const displayCounter = () => settingsMode ? (errorValue ? textCountError : textSettingsMode) : count

    //className

    let disabledButton = `${s.disabled}`
    let maxClass = count === maxValue ? `${s.item} + ${s.itemMax}` : s.item
    let classNameButtonInc = disabledInc ? disabledButton : `${s.button} + ${s.incCount}`
    let classNameButtonReset = disabledReset ? disabledButton : `${s.button} + ${s.resetCount}`
    let incorrectValue = `${s.incorrectValue}`
    let displayCounterClass = errorValue || settingsMode ? incorrectValue : maxClass

    return (
        <div>
            <div className={displayCounterClass}>{displayCounter()}</div>
            <div className={s.buttonCont}>

                <Button className={classNameButtonInc} disabled={disabledInc}
                        stepNumber={stepNumber}
                        count={count} onClick={onIncCountHandler}>
                    {buttonInc}
                </Button>

                <Button className={classNameButtonReset}
                        disabled={disabledReset} count={count} startValue={startValue}
                        onClick={onResetCountHandler}>
                    {buttonReset}
                </Button>

            </div>

        </div>
    )
}