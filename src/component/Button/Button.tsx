import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    incCountCallback?: (count: number, stepNumber: number) => void
    resetCountCallback?: (count: number, startValue: number) => void
    saveValueCallback?: () => void
    buttonInc?: string
    buttonReset?: string
    buttonSet?: string
    disabledInc?: boolean
    disabledReset?: boolean
    stepNumber?: number
    count?: number
    startValue?: number
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({...restProps}) => {

    return (
        <div>
            <button {...restProps}/>
        </div>
    )
}