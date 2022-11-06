import React from 'react'
import { useState, useEffect } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

const GifApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory)=>{
        const cate = categories.map((e)=> e.toLowerCase())
        if (cate.includes(newCategory.toLowerCase())) return

        setCategories([newCategory, ...categories])
        console.log(newCategory);
    }

  return (
    <>

        <AddCategory onAddCategory={onAddCategory}/>

            {
                categories.map((category)=>(
                    <div>
                        <h3>{category}</h3>
                    <div className='card-grid' key={category}>
                        <GifGrid category={category} key={category}/>
                    </div>

                    </div>
                ))
            }
    </>
  )
}

export default GifApp