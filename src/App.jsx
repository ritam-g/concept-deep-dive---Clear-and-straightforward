import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increseByAmount } from './redux/features/countSlice'

function App() {
  const counterValue=useSelector(state=>state.counter.value)
  const dispatch=useDispatch()

  return (
    <div>
      <h1>{counterValue}</h1>
      <button
      onClick={()=>{dispatch(increment())}}
      >increment</button>
      <button
      onClick={()=>{dispatch(decrement())}}
      >decrement</button>
      <button onClick={()=>{dispatch(increseByAmount(5))}}>increseBYamount</button>
    </div>
  )
}

export default App
