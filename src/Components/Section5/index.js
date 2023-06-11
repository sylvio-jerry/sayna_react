import React from 'react'
import tickDefault from '../../assets/img/shield-1.png'
export const Section5 = (props) => {
    const title=props.title||'100% Satisfaction Guarantee'
    const description=props.description||'We offer no questions asked refund policy for 14 days from the policy date.'
    const tick =props.tick|| tickDefault
    
    return (
        <div className="d-flex my-5  py-3 item-tick my-4 container  shadow rounded bg-white " >
            <img src={tick} alt="tick" className=" shield " />
            <div className="col-7">
                <h4> {title} </h4>
                <p className="p-0 text-muted"> {description} </p>
            </div>
            <div className="col-5 my-auto">
                <div className="container">
                    <button className="btn btn-success" >Get your free Quote</button>
                </div>
            </div>
        </div>
    )
}
