import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

import {motion} from "framer-motion"
import "./Carousel.scss"

interface Props {
    children?: ReactNode;
    type:string;
}

const Carousel: FC<Props> = ({ children, type }) => {
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(carousel.current){
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 30)
        }
        
    },[])


    return (
        <>
            <motion.div  className='carousel' >
                <h1 className='carousel-title'>{type}</h1>
                <motion.div style={{ width: carousel?.current?.scrollWidth }} drag='x' dragConstraints = {{right:0, left: -width }} ref = {carousel}  className="child">{children}</motion.div>
            </motion.div>
        </>

    )
}

export default Carousel