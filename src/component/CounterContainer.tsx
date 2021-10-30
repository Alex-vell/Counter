import React, {ChangeEvent, useEffect} from 'react'
import {Counter} from './Counter'
import s from './Counter.module.css'
import {BlockSettings} from "./BlockSettings/BlockSettings";
import {
    incCountAC,
    initialState,
    resetCountAC,
    saveValueFromLS,
    setErrorValueAC,
    setMaxValueAC,
    setSettingsModeAC,
    setStartValueAC,
    setValueFromLSThunkCreator
} from "../state/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";


export const CounterContainer = () => {
    // const {counter, maxValue, startValue} = useSelector<AppStateType, number >(state => state.counter)
    // const {errorValue, settingsMode} = useSelector<AppStateType, boolean>(state => state.counter)
    const counter = useSelector<AppStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const errorValue = useSelector<AppStateType, boolean>(state => state.counter.errorValue)
    const settingsMode = useSelector<AppStateType, boolean>(state => state.counter.settingsMode)
    const dispatch = useDispatch()

    const {maxNumberCounter} = initialState

    const disabledInc = counter >= maxValue || settingsMode || errorValue
    const disabledReset = counter === startValue || settingsMode || errorValue
    const disabledSet = errorValue || !settingsMode

    useEffect(() => {
        dispatch(setValueFromLSThunkCreator(counter))  //Thunk
    }, [])

    useEffect(() => {
        (startValue >= maxValue || startValue < 0 || maxValue > maxNumberCounter)
            ? dispatch(setErrorValueAC(true))
            : dispatch(setErrorValueAC(false))
    }, [startValue, maxValue, maxNumberCounter])

    const onIncCount = (count: number, stepNumber: number) => {
        dispatch(incCountAC(count, stepNumber))
    }

    const onResetCount = (count: number, startValue: number) => {
        dispatch(resetCountAC(count, startValue))
    }

    //BlockSettings
    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }
    const setStartValue = (startValue: number) => {
        dispatch(setStartValueAC(startValue))
    }

    const onChangeSettingsValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingsModeAC(true))

        const currentValue = Number(e.currentTarget.value)
        if(e.currentTarget.name === 'startValue') {
            setStartValue(currentValue);
        }
        if (e.currentTarget.name === 'maxValue') {
            setMaxValue(currentValue);
        }
    }

    const saveValue = () => {
        dispatch(setSettingsModeAC(false))
        setStartValue(startValue)
        onResetCount(counter, startValue)
        dispatch(saveValueFromLS())    //Thunk
    }

    return (<>
            <div className={s.countCount}>
                <Counter counter={counter}
                         maxValue={maxValue}
                         startValue={startValue}
                         onIncCountCallback={onIncCount}
                         onResetCountCallback={onResetCount}
                         disabledInc={disabledInc}
                         disabledReset={disabledReset}
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