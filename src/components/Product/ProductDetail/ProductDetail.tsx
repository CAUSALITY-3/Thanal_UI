import React, { FC, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../Store/hooks'
import { fetchProduct } from '../ProductCard/productCardSlice'
import "./ProductDetail.scss"


export const ProductDetail: FC = () => {

    const product = useAppSelector(state => state.product.productData)
  const loading = useAppSelector(state => state.product.loading)
  const dispatch = useAppDispatch()
  const {id} = useParams();
  useEffect(() => {
    console.log("Ravi")
    dispatch(fetchProduct(id||""))
  }, [])

    
  return (
    <div className="pr0duct-detai1">
      <div className="route-link"></div>
      <div className="product-detail-container"></div>
    </div>
  )
}
