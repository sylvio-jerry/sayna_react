import React from 'react'
import { useRef } from 'react'

const buttonStyle={
    color:'white',
    background: 'linear-gradient(to right bottom, rgba(237,163,132,1) 27%, rgba(243,15,124,1) 98%)'
}

export const Cover = () => {
    const colorBg='linear-gradient(to right bottom, rgba(237,163,132,1) 27%, rgba(243,15,124,1) 98%)'
    const button = useRef(null)
    const onButtonHover=()=>{
        button.current.style.color='#ff586b'
        button.current.style.background='white'
    }
    const onButtonOut=()=>{
        button.current.style.color='white'
        button.current.style.background=colorBg
    }
    return (
    <main className="px-3 my-5">
        <span className=" p-0 text-muted">HELLO, WE ARE FINCORP</span>
        <h1>Insurance</h1>
        <h1>made easy.</h1>
        <div className="mb-5">
        <button ref={button} onMouseOver={onButtonHover} onMouseOut={onButtonOut} style={buttonStyle} className="btn btn-lg  fw-bold border-white">Get your free Quote</button>
        </div>
  </main>
    )
}
