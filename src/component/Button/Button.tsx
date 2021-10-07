import React, {MouseEventHandler} from 'react'
import s from './../Counter.module.css'

type ButtonPropsType = {
    incCountCallback: (count: number, stepNumber: number) => void
    resetCountCallback: (count: number, startValue: number) => void
    buttonInc: string
    buttonReset: string
    disabledInc: boolean
    disabledReset: boolean
    stepNumber: number
    count: number
    startValue: number
}

export const Button: React.FC<ButtonPropsType> = (
    {count, stepNumber, startValue, incCountCallback, resetCountCallback, buttonInc, buttonReset,
        disabledInc, disabledReset}) => {

    return (
        <div className={s.buttonCont}>
            <button className={`${s.button} + ${s.incCount}`} onClick={()=>incCountCallback(count, stepNumber)}
                    disabled={disabledInc}>{buttonInc}</button>
            <button className={`${s.button} + ${s.resetCount}`} onClick={()=>resetCountCallback(count ,startValue)}
                    disabled={disabledReset}>{buttonReset}</button>
        </div>
    )
}