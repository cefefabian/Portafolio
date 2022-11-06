import React from 'react'

const GifCard = ({gif}) => {
  return (
    <>
        <img src={gif.images.downsized_medium.url} alt={gif.title} />
        <p>{gif.title}</p>
    </>
  )
}

export default GifCard