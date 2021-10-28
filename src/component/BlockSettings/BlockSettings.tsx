import React, {ChangeEvent} from "react";
import s from './BlockSettings.module.css'
import {Button} from "../Button/Button";
import {initialState} from "../../state/count-reducer";


type BlockSettingsType = {
    startValue: number
    maxValue: number
    saveValueCallback: () => void
    onChangeSettingsValueCallback: (e: ChangeEvent<HTMLInputElement>) => void
    errorValue: boolean
    disabledSet: boolean
}


export const BlockSettings: React.FC<BlockSettingsType> = (
    {
        startValue, maxValue, saveValueCallback,
        onChangeSettingsValueCallback, errorValue, disabledSet
    }) => {

    const {titleOneInput, titleSecondInput, buttonSet} = initialState

    let inputClass = errorValue ? s.errorInput : s.input
    let disabledButton = `${s.disabled}`
    let buttonSetClass = disabledSet ? disabledButton : `${s.button}`

    return (
        <div className={s.blockCont}>
            <div className={s.valueCont}>
                <div className={s.control}>
                    <span className={s.valueName}>{titleOneInput}</span>
                    <span>
              <input className={inputClass} type='number' value={maxValue} onChange={onChangeSettingsValueCallback}
                     name={'maxValue'}/>
          </span>
                </div>
                <div className={s.control}>
                    <span className={s.valueName}>{titleSecondInput}</span>
                    <span>
              <input className={inputClass} type='number' value={startValue} onChange={onChangeSettingsValueCallback}
                     name={'startValue'}/>
          </span>
                </div>
            </div>
            <div className={s.buttonCont}>
                <Button className={buttonSetClass} onClick={saveValueCallback} disabled={disabledSet}>
                    {buttonSet}
                </Button>
            </div>
        </div>
    )
}