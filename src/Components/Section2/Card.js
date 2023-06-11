import React from 'react'
import { useEffect,useRef } from 'react'
const styleImg={
    width:'100px',
    height:'100px'
}
export const Card = (props) => {
    const {title,description,imageSrc,color}=props

    const divImg=useRef(null)
        useEffect(()=>{
            divImg.current.style.backgroundColor=color
        })

    return (
        <div>
            <div className=" p-4 bg-white col d-flex card-section2 anime align-items-start">
                <div className="text-center justify-content-center">
                    <div ref={divImg} className=" container rounded-circle" style={styleImg}>
                    <img src={imageSrc} alt="logo" className="my-4  "/>
                    </div>
                    <h4 className="fw-bold my-3">{title}</h4>
                    <p className="p-0 text-muted">{description}</p>
                </div>
            </div>
        </div>
    )
}
