import React from 'react'
import { useSelector } from 'react-redux'

const Text = () => {
    const text = useSelector(({todo}) => todo.text );
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Text
