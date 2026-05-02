import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { cartContext } from '../common/MainContex.jsx';
import { useContext } from 'react';


export default function ProductDetails() {


  let {cart,setCart} =useContext(cartContext)

let {id}= useParams()
let [productData, setproductData] = useState(null)

let getProductDetail=()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((apiRes)=>apiRes.data)
    .then((apiData)=> setproductData(apiData))


}
 useEffect( ()=> {

    getProductDetail()
 },[id])

 return (
    <div>

        {productData ?
            <>
                <h1 className='text-4xl font-bold text-center bg-[#ccc] py-5'>
                    {productData.title}
                   
                </h1>
                <div className='max-w-[1320px] mx-auto my-10 grid grid-cols-[40%_auto] gap-10 items-center'>
                    <div>
                        <img src={productData.thumbnail} alt="Product Thumbnail" className='w-full h-auto' />
                        <div className='grid grid-cols-3 gap-4 mt-4'>

                             {productData.images.map((imagePath,index)=>  <img key={index} src={imagePath}  alt="Product Thumbnail" className='w-full h-auto' /> )}

                           
                          
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'> {productData.title}</h2>
                        <p className='mt-2'> {productData.description}</p>
                        <p className='mt-2 text-lg font-semibold'>Price: $ {productData.price}</p>
                        <button onClick={() => setCart(cart + 1)} className='mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Add to Cart</button>
                        <button className='mt-4 ml-4 px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400'>Buy Now</button>
                        <div className='mt-6'>
                            <h3 className='text-xl font-semibold'>Product Details</h3>
                            <p className='mt-2'>Here you can add more details about the product.</p>
                        </div>
                    </div>
                </div>
            </>

            :

            <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div class="flex animate-pulse space-x-4">
    <div class="size-10 rounded-full bg-gray-200"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
        }
    </div>
)
}


