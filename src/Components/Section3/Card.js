import React from 'react'
import { useEffect,useRef } from 'react'
const styleImg={
    width:'100px',
    height:'100px',
    fontSize:'25px',
    padding:'auto'
}
const styleNumber={
    padding:'auto'
}
export const Card = (props) => {
    const {title,description,number,color}=props

    const divImg=useRef(null)
        useEffect(()=>{
            divImg.current.style.backgroundColor=color
        })
    return (
        <div>
            <div className=" p-4 bg-white col anime d-flex align-items-start">
                <div className="text-center justify-content-center">
                    <div ref={divImg} className=" text-center container rounded-circle" style={styleImg}>
                    <div className="py-4" style={styleNumber} >{number}</div>
                    </div>
                    <h4 className="fw-bold my-3">{title}</h4>
                    <p className="p-0 text-muted">{description}</p>
                </div>
            </div>
        </div>
    )
}
