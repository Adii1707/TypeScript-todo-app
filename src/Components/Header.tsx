import React from 'react';

interface HeaderProps{
    textLabel?: string,
    children?: JSX.Element | JSX.Element[]
}

export const Header = ({textLabel= "default props"}: HeaderProps) => {
 
 
    return (
    <h1>{textLabel}</h1>
  )
}
