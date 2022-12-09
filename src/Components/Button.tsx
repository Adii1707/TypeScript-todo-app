import React, { useState } from 'react';

interface ButtonProps{
    buttontext: string,
    handleClick: ()=> void
}

export const Button = (props: ButtonProps) => {
  
    const {buttontext, handleClick} = props;
  
    return (
    <button onClick={handleClick}>{buttontext}</button>
  )
}
