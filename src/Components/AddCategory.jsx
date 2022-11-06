import React from 'react'
import { useState } from 'react'

const AddCategory = ({onAddCategory}) => {
// 
    const [input, setInput] = useState([])
    
    const inputValue = (e)=>{ 
        let valor = e.target.value
        setInput([valor]);
        console.log(valor);
    }    
// 
    
    const onSubmit = (e)=>{
        e.preventDefault()
        let valor = e.target.children[0].value
        if (valor.trim().length >= 1){
            onAddCategory(valor)
            setInput('')
        }
    }
    
  return (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={inputValue} value={input}/>
        <button>Agregar</button>
    </form>
  )
}

export default AddCategory