import React from 'react'
import { Card } from './Card'

export const Section6 = () => {
    
    const title1='PREMIUM'
    const title2='PROFESSIONAL'
    const title3='Basic'

    const desc1=['Rapidiously strategize value','Progressively visualize leadership','Equity invested supply chains. ']
    const desc2=['Rapidiously strategize value','Progressively visualize leadership','Equity invested supply chains. ','Proactively leverage']
    const desc3=['Rapidiously strategize value','Progressively visualize leadership','Equity invested supply chains. ']
    
    return (
        <div className="py-5 section6">
            <div className="text-center">
                <h2>Honest Pricing</h2>
                <span className="p-0 text-muted">Simple & honest pricing. No hidden fees.</span>
            </div>
            <div className="container ">
                <div className="container px-4 py-5" >
                    <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                        <Card color='#daffd3'  number={9} title={title3} description={desc1} />
                        <Card color='#ffdad1' save={'SAVE 20%'}  number={19} title={title2} description={desc2} />
                        <Card color='#b0f3ff' number={49} title={title1} description={desc3} />
                    </div>
                <p className="text-center p-0 text-muted">*Prices shown per month if paid annually</p>
                </div>
            </div>
            
        </div>
    )
}
