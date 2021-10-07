import React from 'react'
import s from './Counter.module.css'

type PropsType = {
    count: number
    maxValue: number
}

export const Counter: React.FC<PropsType> = (
    {count, maxValue}) => {
    let maxClass = count === maxValue ? `${s.item} + ${s.itemMax}` : s.item

    return (
        <div>
            <div className={maxClass}>{count}</div>
        </div>
    )
}