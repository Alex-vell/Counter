import React from "react";
import s from './Button.module.css'

type PropsType = {
    count: number
    upCountCallback: () => void
    resetCountCallback: () => void
}

export const Button: React.FC<PropsType> = (props) => {
    let disabledInc = props.count >= 5 ? true : false
    let disabledReset = props.count === 0 ? true : false
    let maxClass = props.count === 5 ? s.itemMax : s.item
    const upCountHandler = () => {
        props.upCountCallback()
    }
    const resetCountHandler = () => {
        props.resetCountCallback()
    }


    return (
        <div>
            <div className={maxClass}>{props.count}</div>
            {/*<input value={props.count} className={maxClass}/>*/}
            <div className={s.buttonItem}>
                <button className={s.upCountHandler} onClick={upCountHandler} disabled={disabledInc}>+</button>
                <button className={s.resetCountHandler} onClick={resetCountHandler} disabled={disabledReset}>reset
                </button>
            </div>
        </div>
    )
}