import React, {useState} from "react";
import {Button} from "./Button";
import s from './Button.module.css'

export const ButtonContainer = () => {
    const [count, setAddCount] = useState(0)

    const upCount = () => {
        setAddCount(count + 1)
    }
    const resetCount = () => {
        setAddCount(0)
    }

    return (
        <div className={s.appCont}>
            <Button count={count}
                    upCountCallback={upCount}
                    resetCountCallback={resetCount}/>
        </div>
    )
}