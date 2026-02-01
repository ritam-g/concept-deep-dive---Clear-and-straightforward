import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increseByAmount } from './redux/features/countSlice'
import { fetchTodo } from './redux/features/todoThunk'

function App() {
  const counterValue = useSelector(state => state.counter.value)
  const { data, loading, error } = useSelector(state => state.todo)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {counterValue}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increseByAmount(5))}>
        increaseByAmount
      </button>

      <hr />

      <button onClick={() => dispatch(fetchTodo())}>
        Fetch Todo
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}

export default App
