import React, { useState } from 'react';
import { Button } from './Button';
import { Header } from './Header';


export const Counter = () => {
const [count, setCount] = useState(2);

const handleClick = (value: number)=>{
    setCount(count+value);
}
  return (
    <div>
        <Header textLabel='Counter' />
        {/* <Header >
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
        </Header> */}
        <Header textLabel={`${count}`} />
        <Button buttontext='Add' handleClick={()=> handleClick(1)} />
        <Button buttontext='Reduce' handleClick={()=> handleClick(-1)} />
        
    </div>
  )
}
