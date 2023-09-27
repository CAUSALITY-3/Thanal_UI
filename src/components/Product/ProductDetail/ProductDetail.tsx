import React, { FC, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../Store/hooks'
import { fetchProduct } from '../ProductCard/productCardSlice'
import "./ProductDetail.scss"


export const ProductDetail: FC = () => {

    const product = useAppSelector(state => state.product.productData)
  const loading = useAppSelector(state => state.product.loading)
  const routeLinkText = `Products > ${product.category || loading} > ${product.name || loading}`
  const dispatch = useAppDispatch()
  const {id} = useParams();
  useEffect(() => {
    console.log("Ravi")
    window.scrollTo(0, 0);
    if(!product?._id || product._id !== id){
      dispatch(fetchProduct(id||""))
    }
  }, [])

    
  return (
    <div className="pr0duct-detai1">
      <div className="route-link">{routeLinkText}</div>
      <div className="product-detail-container"></div>
    </div>
  )
}
