import React from 'react'
import { Cover } from './Cover'
import { useRef  } from 'react'
import { Info } from './Info'
import imgBanner from '../../assets/img/banner-1.png'

export const Section1 = () => {
    const section=useRef(null)
    return (
        <div ref={section} className=" Section1">
            <div className="container">
                <Cover/>
                <img src={imgBanner} alt="banner" className="banner"/>
                <div className="d-flex align-items-center flex-column title-center">
                    <div >
                    <h2 >A new take on insurance</h2> <br/>
                    <p  className="text-center p-0 text-muted "> Great for inpiduals and business</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <Info/>
                </div>
            </div>
        </div>
    )
}
