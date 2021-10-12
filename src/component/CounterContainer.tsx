import React from 'react'
import {Counter} from './Counter'
import s from './Counter.module.css'
import {BlockSettings} from "./BlockSettings/BlockSettings";
import {
    IncCountAC,
    ResetCountAC,
    SetMaxValueAC,
    SetStartValueAC,
    SetCountAC
} from "../state/count-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";


export const CounterContainer = () => {

// redux , useSelect
    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const dispatch = useDispatch()

    const incCount = (count: number, stepNumber: number) => {
        dispatch(IncCountAC(count, stepNumber))
    }
    const resetCount = (count: number, startValue: number) => {
        dispatch(ResetCountAC(count, startValue))
    }


    // Block Settings
    const setMaxValue = (maxValue: number) => {
        dispatch(SetMaxValueAC(maxValue))
    }
    const setStartValue = (startValue: number) => {
        dispatch(SetStartValueAC(startValue))
    }
    const setCount = (startValue: number) => {
        dispatch(SetCountAC(startValue))
    }


    // useReducer
    //const [count, dispatchAddCount] = useReducer(countReducer, startValue)

    /*const incCount = (count: number, stepNumber: number) => {
        //dispatchCount(IncCountAC(count, stepNumber))
        //setAddCount(count + stepNumber)
        dispatchAddCount(IncCountAC(count, stepNumber))
    }
    const resetCount = (count: number, startValue: number) => {
        //setAddCount(startValue)
        dispatchAddCount(ResetCountAC(count, startValue))
    }
    const setCount = () => {
        dispatchAddCount(SetValueCountAC())
    }*/


    // useState

    /*const [count, setAddCount] = useState<number>(startValue)

    const incCount = (count: number, stepNumber: number) => {
        setAddCount(count + stepNumber)
    }
    const resetCount = (count: number, startValue: number) => {
        setAddCount(startValue)
    }*/


    let disabledInc = count >= maxValue
    let disabledReset = count === startValue


    return (
        <div className={s.counter}>
            <div className={s.appCont}>
                <Counter count={count}
                         maxValue={maxValue}
                         startValue={startValue}
                         incCountCallback={incCount}
                         resetCountCallback={resetCount}
                         disabledInc={disabledInc}
                         disabledReset={disabledReset}/>
            </div>
            <div className={s.blockCont}>
                <BlockSettings startValue={startValue}
                               maxValue={maxValue}
                               setMaxValue={setMaxValue}
                               setStartValue={setStartValue}
                               resetCountCallback={resetCount}
                               count={count}
                               setCountCallback={setCount}/>
            </div>
        </div>
    )
}