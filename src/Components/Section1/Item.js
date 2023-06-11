import React from 'react'
import tick from '../../assets/img/tick.png'
export const Item = (props) => {
    const title=props.title||'title'
    const description=props.description||'description'
    return (
        <div className=" d-flex item-tick anime my-4 p-2">
            <img src={tick} alt="tick" className=" "/>
            <div className="mx-4">
                <h4> {title} </h4>
                <p className="p-0 text-muted"> {description} </p>
            </div>
        </div>
    )
}
