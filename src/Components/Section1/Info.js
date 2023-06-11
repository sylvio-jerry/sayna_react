import React from 'react'
import { Item } from './Item'



export const Info = () => {
    const title1='Comprehensive Insurance'
    const description1='Dynamically repurpose e-business users rather than granular products.'
    const title2='Support is just a call away'
    const description2='Rapidiously customize value-added platforms compliant action items.'
    const title3='Say goodbye to paperwork.'
    const description3='Globally deliver economically sound communities relationships. '
    return (
        <div className="info my-5  " >
            <div className="feature-icon bg-primary bg-gradient">
            </div>
            <h3>Monotonectally deploy seamless data and resource maximizing systems.</h3>
            <h5>Great for individuals and small families up to 4 members..</h5>
            <p className=" p-0 text-muted">
                A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence, creativity and attention to detail to ensure you are getting the best “bang for your buck” each and every year.
            </p>
            <Item title={title1} description={description1} />
            <Item title={title2} description={description2} />
            <Item title={title3} description={description3} />
        </div>
    )
}
