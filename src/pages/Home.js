import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsData } from '../redux/products/ProductActions'
// import Data from '../data/Data'

const Home = () => {

  const products = useSelector((state)=> state.Products.products)
  const dispatch = useDispatch()

  const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    return data
  }

  const filterProducts = (products)=>{
    return products.filter((items)=>{
      let result = ( items.category === "men's clothing" || items.category === "")
      return result
    })
  }

  // console.log(fetchProducts())
  const LoadProducts = async()=>{
    dispatch(productsData (filterProducts(await fetchProducts())))
  }
  useEffect(()=>{
    LoadProducts()
  },[])

  console.log(products)

  return (
    <div>
    </div>
  )
}

export default Home
