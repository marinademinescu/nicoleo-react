import React from 'react'
import { useSelector } from 'react-redux'

const Title = () => {
    const title = useSelector(({todo}) => todo.title );
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
