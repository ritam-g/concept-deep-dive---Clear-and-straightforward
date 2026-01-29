import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterReducer';
function App() {
  const dispatch=useDispatch()
  let num=useSelector(state=>state.counter.value)
  
  return (
    <main>
      <h1>{num}</h1>
      <button
      onClick={()=>{
dispatch(increment())
      }}
      >increase</button>
      <button
      onClick={()=>{
        dispatch(decrement())
      }}
      >decrease</button>
    </main>
  )
}

export default App
