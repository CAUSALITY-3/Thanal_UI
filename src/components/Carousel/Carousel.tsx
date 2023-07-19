import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

import {motion} from "framer-motion"
import "./Carousel.scss"

interface Props {
    children?: ReactNode;
}

const Carousel: FC<Props> = ({ children, ...props }) => {
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(carousel.current){
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 40)
        }
        
    },[])


    return (
        <>
            <motion.div  className='carousel' >
                <h3>Carousel</h3>

                <motion.div style={{ width: carousel?.current?.scrollWidth , background:"white" }} drag='x' dragConstraints = {{right:0, left: -width }} ref = {carousel}  className="child">{children}</motion.div>
            </motion.div>
        </>

    )
}

export default Carousel