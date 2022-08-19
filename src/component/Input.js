import React from 'react'

const Input = ({text, onTextChange}) =>{
    console.log("printing text", text)
return (
    <>
    <input value={text} onChange={(e)=>onTextChange(e.target.value)}/>
    </>
)
}

export default Input