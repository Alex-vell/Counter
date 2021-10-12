import React, {ChangeEvent} from "react";
import s from './BlockSettings.module.css'
import {Button} from "../Button/Button";
import {initialState} from "../../state/count-reducer";

type BlockSettingsType = {
    startValue: number
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    resetCountCallback: (count: number, startValue: number) => void
    count: number
    setCountCallback: (startValue: number) => void
}


export const BlockSettings: React.FC<BlockSettingsType> = (
    {
        startValue, maxValue, setMaxValue, count, setCountCallback,
        setStartValue, resetCountCallback
    }) => {

    const maxValueEnterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)

    }
    const startValueEnterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
    }

    const saveValueHandler = () => {
        setCountCallback(startValue)
        resetCountCallback(count, startValue)
    }

    let disabledAll = startValue >= maxValue || startValue < 0
    let inputClass = disabledAll ? s.errorInput : s.input

    return (
        <div className={s.blockCont}>
            <div className={s.valueCont}>
                <div className={s.valueName}>
                    maxValue:
                    <span className={inputClass}>
              <input type='number' value={maxValue} onChange={maxValueEnterHandler}/>
          </span>
                </div>
                <div className={s.valueName}>
                    startValue:
                    <span className={inputClass}>
              <input type='number' value={startValue} onChange={startValueEnterHandler}/>
          </span>
                </div>
            </div>
            <div className={s.buttonCont}>
                <Button className={s.button} onClick={saveValueHandler} disabled={disabledAll}>
                    {initialState.buttonSet}
                </Button>
            </div>
        </div>
    )
}