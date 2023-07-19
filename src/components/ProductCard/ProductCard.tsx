import React, { FC, ReactNode } from 'react'
import "./ProductCard.scss"

interface Props {
    props: {
        name:string,
        price: number
    }
}


const ProductCard: FC<Props> = ({props}) => {

    let checkForDrag:number;
    const mouseDownCoords = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        checkForDrag = e?.clientX;
      };
      const clickOrDrag = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)  => {
        const mouseUp = e.clientX;
        if (
          mouseUp < checkForDrag + 5 &&
          mouseUp > checkForDrag- 5
        ) {
            window.open('https://google.com', "_blank");
        }
      };

  return (
    <div className='poduct-box' onMouseDown={e => mouseDownCoords(e)}
    onMouseUp={e => clickOrDrag(e)}>
        <h2>ProductCard</h2>
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default ProductCard