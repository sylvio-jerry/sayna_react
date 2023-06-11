import React from 'react'
import { useEffect,useRef } from 'react'
import tick from '../../assets/img/tick.png'
const styleImg={
    width:'100px',
    height:'100px',
    fontSize:'25px'
}
const styleSpanSav={
    backgroundColor:'#fff4b4'
}
export const Card = (props) => {
    const {title,description,number,color,save}=props

    const items=[]
    description.forEach((element,key) => {
        items.push((<li className="list-group-item text-start fs-6 p-0 text-muted" key={key}> <img src={tick} alt="tick" style={{width:'15%'}}  />{element}</li>))
    });


    const divImg=useRef(null)
    const titleCard=useRef(null) 
    const spanSav=useRef(null)
    const btnChoice=useRef(null)
        useEffect(()=>{
            divImg.current.style.backgroundColor=color
            btnChoice.current.style.backgroundColor=color
            titleCard.current.style.color=color
            if(save){
                spanSav.current.innerHTML=save
            }
        })
    return (
        <div>
            <div className=" p-4 bg-white border shadow  col d-flex align-items-start anime">
                <div className="text-center justify-content-center">
                <h4 className="fw-bold my-3 " ref={titleCard} >{title}</h4>
                <span className=" p-0 text-muted" ref={spanSav} style={styleSpanSav}  ></span>
                    <div ref={divImg} className=" container rounded-circle" style={styleImg}>
                    <div className="py-2" ><span style={{fontSize:'50px'}} > <span style={{fontSize:'16px'}}>$</span>{number}</span> </div>
                    </div>
                    <ul className="list-group list-group-flush my-3" >
                        {items}
                    </ul>
                    <button ref={btnChoice} className="btn" >Choose Plan</button>
                </div>
            </div>
        </div>
    )
}
