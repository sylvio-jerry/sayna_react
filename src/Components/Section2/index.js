import React from 'react'
import imgSrcCar from '../../assets/img/car-insurance-1.png'
import imgSrcBusiness from '../../assets/img/business-insurance-1.png'
import imgSrcHome from '../../assets/img/home insurance-1.png'
import imgSrcLife from '../../assets/img/life-insurance-1.png'
import imgSrcOther from '../../assets/img/other-insurance-1.png'
import imgSrcTravel from '../../assets/img/travel-insurance-1.png'
import { Card } from './Card'

export const Section2 = () => {
    
    const titleCar='Home Insurance'
    const titleBusiness='Car Insurance'
    const titleHome='Life Insurance'
    const titleLife='Business Insurance'
    const titleOther='Travel Insurance'
    const titleTravel='Other Insurance'

    const desc='Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.'
    
    return (
        <div style={{background:'#eff2f6'}} className="py-5">
            <div className="text-center">
                <h2>Choose your Insurance</h2>
                <span className="p-0 text-muted">Keep Your Life Smile, Safe, and Wealthy</span>
            </div>
            <div className="container ">
                <div className="container px-4 py-5" >
                    <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                        <Card color='#b0f3ff' imageSrc={imgSrcCar} title={titleCar} description={desc} />
                        <Card color='#fbd1ff' imageSrc={imgSrcBusiness} title={titleBusiness} description={desc} />
                        <Card color='#daffd3' imageSrc={imgSrcHome} title={titleHome} description={desc} />
                        <Card color='re#fff4b4d' imageSrc={imgSrcLife} title={titleLife} description={desc} />
                        <Card color='#ffd9d2' imageSrc={imgSrcOther} title={titleOther} description={desc} />
                        <Card color='#d3d3ff' imageSrc={imgSrcTravel} title={titleTravel} description={desc} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
