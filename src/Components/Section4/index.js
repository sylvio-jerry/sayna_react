import React from 'react'
import quote from '../../assets/img/quote.png'
export const Section4 = () => {
    return (
        <div className="section4 ">
            <div className="section4-container">
                <img src={quote} alt="citation"/>
                <p>I need to understand what’s going on – it’s <br/>  my health and I want to feel secure in it. <br/> With my previous health insurance, I didn’t <br/>  know how any of it worked.</p>
                <h6 className="text-primary">Matthew Young</h6>
                <span className=" p-0 text-muted" >Legal Consultant, United States</span>
            </div>
        </div>
    )
}
