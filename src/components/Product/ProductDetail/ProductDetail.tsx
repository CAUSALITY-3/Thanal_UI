import React, { FC, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../Store/hooks'
import { fetchProduct } from '../ProductCard/productCardSlice'


export const ProductDetail: FC = () => {

    const product = useAppSelector(state => state.product.productData)
  const loading = useAppSelector(state => state.product.loading)
  const dispatch = useAppDispatch()
  const {id} = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id||""))
  }, [])

    
  return (
    <div onClick={()=>console.log(product)}>ProductDetail {product.name}</div>
  )
}
