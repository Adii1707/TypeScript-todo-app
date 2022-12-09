import React, { useEffect, useState } from 'react'
import { gettodos } from '../Api';
import { Header } from './Header'
import { TodoInput } from './TodoInput';
import { TodoItem } from './Todoitem';

export type TodoItems = {
    id: number;
    title: string;
    status: boolean;
}

export const Todo = () => {

const [todos, setTodos] = useState<TodoItems[]>([]);

useEffect(()=>{
  gettodos().then((r)=>(
    setTodos(r.data)
  ))
},[])


const handleAdd = (title: string)=>{
    // const payload = {
    //     id: todos.length+1,
    //     title,
    //     status: false,
    // }
    // setTodos([...todos, payload])
    
}

  return (
    <div>
        <Header textLabel='Todos App' />
       
        <TodoInput handleclick={handleAdd} />
        <div>{todos.map((item)=>{
         return <TodoItem key={item.id} {...item} />
        })}
        </div>
    </div>
  )
}
