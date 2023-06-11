import React from 'react'
import { Card } from './Card'
import afterBlue from '../../assets/img/after-blue.png'
import afterPink from '../../assets/img/after-pink.png'


export const Section3 = () => {
    
    const title1='Report Claim'
    const title2='Claim Processing'
    const title3='Final Settlement'

    const desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.'
    
    return (
        <div style={{background:'white'}} className="py-5">
            <div className="text-center">
                <h2>Simplified Claims</h2>
                <span className="p-0 text-muted">Easy as One, Two, Three</span>
            </div>
            <div className="container ">
                <div className="container px-4 py-5" >
                    <div className="container row d-flex justify-content-center   row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                        <Card color='#b0f3ff' number={1} title={title1} description={desc} />
                        <img src={afterBlue} alt="after-blue" className="img-after" />
                        <Card color='#fbd1ff'  number={2} title={title2} description={desc} />
                        <img src={afterPink} alt="after-pink" className="img-after" />
                        <Card color='#daffd3'  number={3} title={title3} description={desc} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
