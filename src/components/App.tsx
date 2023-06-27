import React, { useState } from 'react'

interface Props {
    value?: number
}

const Counter: React.FC<Props> = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prevState) => prevState - 1)
  }

  const onPlus = () => {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
    </div>
  )
}

export default Counter
