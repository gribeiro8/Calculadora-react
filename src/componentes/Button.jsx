import React from 'react'
import './Button.css'

export default ({click, label, operation, double, triple}) => {
   let classes = 'button '
   classes += operation ? 'operation ' : ''
   classes += double ? 'double ' : ''
   classes += triple ? 'triple ' : ''
   //console.log(classes);
   

   return <button 
   onClick={e=> click && click(label)}
   className={classes}>
   {label}
   </button>
}
   