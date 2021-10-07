import React from 'react';
import s from './component/Counter.module.css'
import {CounterContainer} from "./component/CounterContainer";

const App = () => {
    return (
        <div className={s.app}>
            <CounterContainer/>
        </div>
    );
}

export default App;
