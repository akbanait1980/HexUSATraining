import React, { useState } from 'react';

const Header = () => {
    const [ number, setNumber ] = useState(0)
    const [ counter, setCounter ] = useState(0);
    const squareNumber = getSquareNumber(number);

    const onChangeHandler = (event) => {
        setNumber(event.target.value)
    }

    const onCounterIncrement = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <h1>UseMemo Demo</h1>
            <input type="number" placeholder='Enter a Number' 
            value={ number } onChange={ onChangeHandler } />
            <div>
                Output: { squareNumber }
            </div>
            <button onClick={ onCounterIncrement }>
               Counter ++ 
            </button>
            <div>
                Counter: { counter }
            </div>

        </div>
    )
}

function getSquareNumber(number){
    console.log('square number calculated');
    return Math.pow(number, 2)
}

export default Header;