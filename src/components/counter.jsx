import { useState } from "react";

const Counter = () => {
const[count, setCount]=useState(0)
const countHandler=() => {
   setCount(count+1) 
};
const countTaker=() => {
    setCount(count-1) 
 };
 const countclear=() => {
    setCount(0) 
 };

    return(
        <div>
            <h1>{count} </h1>
            <button onClick={countHandler}> Add </button>
            <button onClick={countTaker}> Subtract </button>
            <button onClick={countclear}> Reset </button>
        </div>
    )
};

export default Counter;