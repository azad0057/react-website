import React, { useState } from 'react'
import './Home.css'
import Header from '../common/Header';

import { IoMdStar } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default function Home() {


let[Products,setProducts]= useState([])




  let getProductInfo= ()=>{

     axios.get('https://dummyjson.com/products')
     .then((apiRes)=>apiRes.data)
     .then((apiData)=>setProducts(apiData.products))

   

  }



  useEffect(() => {
    getProductInfo();
  }, []);












  return (
    <>


<section className="w-[100%] my-[90px] pl-5">
  <div className=' max-w-[1320px] mx-auto grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'> 
  <div>
    <h1 className='text-[50px] font-bold pt-10'>The experience makes all the difference.</h1>
  <p className='text-[20px] pb-10'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
  <div>
  <button className='bg-red-700 font-bold text-white rounded-lg p-2 my-4'>Get Started</button>
   <button className='rounded-lg p-2 my-4 mx-5'>OFFERS</button>
</div> 

  </div>
  
  <div className='w-full pt-5' >
    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt=""  />
  </div>
  

</div>

</section>


 <section className="py-10 px-4 bg-white pl-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="relative">
            <img
              src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
              alt="Women"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bottom-4 left-[50%] transform -translate-x-[50%]">
              <button className="bg-white text-sm px-4 py-1 rounded shadow font-medium hover:bg-gray-100">
                Women
              </button>
            </div>
          </div>

          
          <div className="grid grid-rows-2 gap-6">
            <div className="relative">
              <img
                src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                alt="Shoes"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button className="bg-white text-sm px-4 py-1 rounded shadow font-medium hover:bg-gray-100">
                  Shoes
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                alt="Watches"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-4 left-[50%] transform -translate-x-[50%]">
                <button className="bg-white text-sm px-4 py-1 rounded shadow font-medium hover:bg-gray-100">
                  Watches
                </button>
              </div>
            </div>
          </div>

        
          <div className="relative">
            <img
              src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
              alt="Accessories"
              className="w-full h-full object-cover rounded"
            />
         <div className="absolute bottom-4 left-[50%] transform -translate-x-[50%]">
              <button className="bg-white text-sm px-4 py-1 rounded shadow font-medium hover:bg-gray-100">
                Accessories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>



<section className="w-[100%] py-5 mx-auto pl-5 ">
  <div> 
    <h1 className='text-[50px] font-bold  text-center'>Get difference Product</h1>
  </div> 

  <div className='max-w-[1320px] mx-auto grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
  {Products.map((product) => (
  <Link key={product.id} to={`/productdetails/${product.id}`}>
    <ProductItems product={product}  />
  </Link>
))}
  </div>
</section>

    </>
    
  )
}

function ProductItems({ product }) {
  
  return (
    <div  className='shadow-lg p-2 '>
      <div className='relative'> 
        <img src={product.thumbnail} alt="" className='w-full' />
      <div className='text-red-600 text-[25px] absolute top-[10px] right-[10px]'> <FaHeart /></div>
      </div>
      
      <h3 className='font-bold'>{product.title}</h3>
      <h5 className='font-bold text-[#B45309]'>Rs. {product.price}</h5>
      <p className='py-2'>{product.brand}</p>
      <div className='flex justify-between items-center'>
        <div className='flex items-start text-yellow-500 '>
          <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
        </div>
        <button className='bg-blue-600 p-1 rounded-lg text-white'>ADD</button>
      </div>
    </div>
  )
}
