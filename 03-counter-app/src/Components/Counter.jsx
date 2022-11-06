import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Random = ({value}) => {
  const [contador, setcontador] = useState(value)
  function suma() {
    setcontador(contador + 1)
  }
  function resta() {
    if (contador > 1) {
      setcontador(contador - 1)
    }
  }
  function reset() {
      setcontador(value)
  }

  return (
    <>
        <h1>{contador}</h1>
        <button onClick={suma}>
          +1
        </button>
        <button onClick={resta}>
          -1
        </button>
        <button onClick={reset}>
          reset
        </button>
    </>
  )
}
Random.protoType = {
  value: PropTypes.number.isRequired
}
export default Random