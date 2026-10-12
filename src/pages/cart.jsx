import React, { useReducer } from "react";
const reducer = (value, action) => {
    switch (action.state) {
        case 'Incress':
            return value=value+1
        case 'Decress':
            return value=value-1
        case 'reseat':
            return value = 0
        default:
            return 0;
    }
}
const Cart = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ state: 'Incress' })}>+</button>
            <input type="text" value={count} />
            <button onClick={() => dispatch({ state: 'Decress' })}>-</button>
            <button onClick={() => dispatch({ state: 'reseat' })}>0</button>
        </>
    )
}
export default Cart;