import React from 'react'
import useFechGif from '../hook/useFechGif'
import GifCard from './GifCard'

const GifGrid = ({category}) => {

    const {data, isLoading} = useFechGif(category)

  return (
    <>
        {
            isLoading ? (<h2>cargando...</h2>):
            (data.map((gif)=>
            (<div className='card' key={gif.id}>
                <GifCard gif={gif}/>
            </div>
            )))
            
        }
    </>
  )
}

export default GifGrid