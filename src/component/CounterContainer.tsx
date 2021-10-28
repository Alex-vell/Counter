import React, {ChangeEvent} from 'react'
import {Counter} from './Counter'
import s from './Counter.module.css'
import {BlockSettings} from "./BlockSettings/BlockSettings";
import {
    incCountAC,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC,
    setCountAC, setSettingsModeAC, setErrorValueAC
} from "../state/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";


export const CounterContainer = () => {

    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const errorValue = useSelector<AppStateType, boolean>(state => state.counter.errorValue)
    const settingsMode = useSelector<AppStateType, boolean>(state => state.counter.settingsMode)
    const dispatch = useDispatch()

    const onIncCount = (count: number, stepNumber: number) => {
        dispatch(incCountAC(count, stepNumber))
    }
    const onResetCount = (count: number, startValue: number) => {
        dispatch(resetCountAC(count, startValue))
    }


    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }
    const setStartValue = (startValue: number) => {
        dispatch(setStartValueAC(startValue))
    }
    const setCount = (startValue: number) => {
        dispatch(setCountAC(startValue))
    }


    const onError = () => {
        if (startValue >= maxValue || startValue < 0) {
            dispatch(setErrorValueAC(true))
        } else {
            dispatch(setErrorValueAC(false))
        }
    }
    onError()


    const onChangeSettingsValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingsModeAC(true))

        let currentValue = Number(e.currentTarget.value)
        switch (e.currentTarget.name) {
            case 'startValue':
                setStartValue(currentValue);
                break;
            case 'maxValue':
                setMaxValue(currentValue);
                break;
        }
    }

    const saveValue = () => {
        dispatch(setSettingsModeAC(false))
        setCount(startValue)
        onResetCount(count, startValue)

    }


    let disabledInc = count >= maxValue || settingsMode || errorValue
    let disabledReset = count === startValue || settingsMode || errorValue
    let disabledSet = errorValue || !settingsMode


    return (<>
            <div className={s.countCount}>
                <Counter count={count}
                         maxValue={maxValue}
                         startValue={startValue}
                         onIncCountCallback={onIncCount}
                         onResetCountCallback={onResetCount}
                         disabledInc={disabledInc}
                         disabledReset={disabledReset}
                         onChangeSettingsValueCallback={onChangeSettingsValue}
                         settingsMode={settingsMode}
                         errorValue={errorValue}/>
            </div>
            <div className={s.blockSettCont}>
                <BlockSettings startValue={startValue}
                               maxValue={maxValue}
                               saveValueCallback={saveValue}
                               onChangeSettingsValueCallback={onChangeSettingsValue}
                               errorValue={errorValue}
                               disabledSet={disabledSet}/>
            </div>
        </>
    )
}