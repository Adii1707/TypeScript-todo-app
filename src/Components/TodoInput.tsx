import React, { useState } from 'react'
import { Button } from './Button'

interface TodosInputProps{
    handleclick: (value: string)=> void;
}


export const TodoInput = ({handleclick}: TodosInputProps) => {
const [currentTodo, setCurrentTodo] = useState('');

const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    setCurrentTodo(e.target.value);
}

const clickHandler = ()=>{
    if(currentTodo!==""){
        handleclick(currentTodo);
    }
}

  return (
    <div>
        <input type="text" value={currentTodo} onChange={changeHandler} />
        <Button buttontext='ADDTodo' handleClick= {clickHandler} />
    </div>
  )
}
