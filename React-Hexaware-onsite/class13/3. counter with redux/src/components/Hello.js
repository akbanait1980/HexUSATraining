import React from 'react';
import {useSelector } from 'react-redux';

const Hello = () => {
    const counter = useSelector((state) => state.counter)
    return(
        <div>
            <h1>Counter: { counter }</h1>
        </div>
    )
}
export default Hello;