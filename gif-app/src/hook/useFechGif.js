import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const useFechGif = (category) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getApi = ()=>{
        const api = `https://api.giphy.com/v1/gifs/search?api_key=mI7oJNFMkBrFZop3ofpWnsSP13AIbxXG&q=${category}&limit=10`

        fetch(api).then((res)=> res.json())
        .then((res) => setData(res.data))
        setIsLoading(false)
    } 
    useEffect(() => {
        getApi()
        console.log(data);
    }, [])

    return{
        data,
        isLoading
    }
}

export default useFechGif