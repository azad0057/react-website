// import React, { useContext, useEffect, useState } from 'react'
// import { IoMdStar } from 'react-icons/io';
// import { FaHeart } from 'react-icons/fa';
// import axios from 'axios';
// import ResponsivePagination from 'react-responsive-pagination';
// import 'react-responsive-pagination/themes/classic-light-dark.css';
// import { cartContext } from '../common/MainContex.jsx';
// import { useNavigate } from 'react-router';
//  import { ToastContainer, toast } from 'react-toastify';

// export default function Product() {

//     // let getCategories = async()=>{
//     // // let apiRes = await axios.get('https://wscubetech.co/ecommerce-api/categories.php')
//     // // let apiData = await apiRes.data
//     // // let finalData =apiData.data



//     // }
  

//     let [Category,SetCategory]= useState([])
//     let [Brand,SetBrand]= useState([])
//     let [Product,SetProduct]= useState([])
//     let [sorting, setSorting] = useState(null)
//     let [categoryfilter,setcategoryFilter]= useState([])
//     let [brandfilter,setbrandFilter]= useState([])
//     let [priceFilter, setPriceFilter] = useState([null, null])
//     let [rating, setRating] = useState(null)
//     let [discount, setDiscount]= useState([null, null])
//     let [loading,setLoading] = useState(false)
//     let [currentPage, setCurrentPage] = useState(1)
//     let [totalPages, setTotalPages] = useState(null)

//     let getCategories = ()=>{
//     axios.get('https://wscubetech.co/ecommerce-api/categories.php')
//     .then( (apiRes ) => apiRes.data )
//     .then( (finalData)=>{
//         SetCategory( finalData.data)
        
//     })
// }

// // let getAllCheckCategory=(e)=>{
// //     if (e.target.checked){
// //         if (!categoryfilter.includes(e.target.value)){
// //             setcategoryFilter([...categoryfilter,e.target.value])
// //         }

// //     }
// //     else{

// //         let finalData = categoryfilter.filter((value) => value != e.target.value)
// //         setcategoryFilter(finalData)
// //     }
// // }
    


// let getBranded = ()=>{
// axios.get('https://wscubetech.co/ecommerce-api/brands.php')
// .then( (apiRes ) => apiRes.data )
// .then( (finalData)=>{
//     SetBrand( finalData.data)
    
// })
// }

// // let getAllBrandFilter =(e)=>{

// //     if(e.target.checked){

// //         if(!brandfilter.includes (e.target.value)){
// //             setbrandFilter( [...brandfilter, e.target.value])
// //         }
// //     }
   
// //     else{ 

// //         let finalData = brandfilter.filter((value)=> value != e.target.value)
// //         setbrandFilter(finalData)

// //     }

// // }


// let getAllCheck = (e, stateName, stateFunction) => {
//     if (e.target.checked) { 

//         if (!stateName.includes(e.target.value)) {
            
//             stateFunction([...stateName, e.target.value])
//         }

//     }
//     else {

//         let finalData = stateName.filter((value) => value != e.target.value)
//         stateFunction(finalData)

//     }
// }




// let getProducts = ()=>{
//     setLoading(true)
// axios.get('https://wscubetech.co/ecommerce-api/products.php', {
    
// params:{
// page: currentPage,
// limit: 12,
// categories: categoryfilter.toString(),
// brands: brandfilter.toString(),
// price_from: priceFilter[0],
// price_to: priceFilter[1],
// discount_from: discount[0],
// discount_to: discount[1],
// rating,
// sorting,

//     }
// })



// .then( (apiRes ) => apiRes.data )
// .then( (finalData)=>{
//     setLoading(false)
//     SetProduct( finalData.data)
    
//     setTotalPages(finalData.total_pages)
    
// })
// }




// useEffect(()=>{
//     getProducts()
// },[sorting, categoryfilter,brandfilter,priceFilter,discount,rating,currentPage])









//     useEffect(()=>{
//         getCategories()
//         getBranded()
       
//     },[])







//   return (
//     <section className='grid grid-cols-[15%_auto] py-10 gap-5'>
//         <aside className=''>
//             <div className='flex justify-center gap-5'>
//             <div>FILTERS</div>
//             <div>CLEAR ALL</div>
//             </div>
//             <div className='border-2 border-gray-300  h-[250px] overflow-y-scroll'>
//                 <h1 className='p-2 font-bold'> CATEGORIES</h1>
//                 <ul className='p-3'>
//                 {Category.map((items,index)=>{
//                     return(
//                         // <li className='mb-2' key={index} > <input type="checkbox"   onChange={getAllCheckCategory} value={items.slug} /> {items.name} </li> 

//                         <li className='mb-2' key={index}>
//                         <input type="checkbox"
//                             value={items.slug}
//                             onChange={(e) => getAllCheck(e, categoryfilter, setcategoryFilter)} />

//                         {items.name} </li>
//                     )
//                 })}
                   
//                 </ul>
                

//             </div>
//             <div className='border-2 border-gray-300  h-[250px] overflow-y-scroll'>
//                 <h1 className='p-2 font-bold'> BRAND</h1>
//                 <ul className='p-3'>
//                 {Brand.map((items,index)=>{
//                     return(
//                         // <li className='mb-2' > <input type="checkbox" onChange={getAllBrandFilter} value={items.slug}/> {items.name} </li>
//                         <li className='mb-2' key={index}>
//                         <input type="checkbox" onChange={(e) => getAllCheck(e, brandfilter, setbrandFilter)} value={items.slug} />

//                         {items.name} </li> 
//                     )
//                 })}
                   
//                 </ul>
                

//             </div>
//             <div className='border-2 border-gray-300  h-[200px] overflow-y-scroll'>
//                 <h1 className='p-2 font-bold'> Price</h1>
//                 <ul className='p-3'>
//                             <li className='mb-2' > <input type="radio" onClick={() => setPriceFilter([10, 250])} name='priceFilter' />  Rs. 10 to Rs. 250</li>
//                             <li className='mb-2' > <input type="radio" name='priceFilter'
//                                 onClick={() => setPriceFilter([250, 500])}
//                             />  Rs. 250 to Rs. 500</li>
//                             <li className='mb-2' > <input type="radio" name='priceFilter'
//                                 onClick={() => setPriceFilter([500, 1000])}
//                             />  Rs. 500 to Rs. 1000</li>
//                             <li className='mb-2' > <input type="radio" name='priceFilter'
//                                 onClick={() => setPriceFilter([1000, 50000])}
//                             />  Rs. 1000 to Above</li>
//                         </ul>
                

//             </div>
//             <div className='border-2  border-gray-300 h-[200px] overflow-y-scroll'>
//                 <h1 className='p-2 font-bold'> DISCOUNT RANGE</h1>
//                 <ul className='p-3'>
//                       <li className='mb-2'> <input type="radio" onClick={() => setDiscount([5,60])} name='discount' /> 5% and above</li>
//                             <li className='mb-2'> <input type="radio" onClick={() => setDiscount([10,60])} name='discount'  /> 10% and above</li>
//                             <li className='mb-2'> <input type="radio" onClick={() => setDiscount([15,60])} name='discount'  />15% and above</li>
//                             <li className='mb-2'> <input type="radio" onClick={() => setDiscount([20,60])} name='discount'  /> 20% and above</li>
//                 </ul>
                

//             </div>

//             <div className='border-2  border-gray-300 h-[200px] overflow-y-scroll'>
//                         <h3 className='font-bold p-2'>Rating</h3>
//                         <ul className='p-3'>
//                             <li className='mb-2'> <input type="radio" onClick={() => setRating(4)} name='rating' /> 4★ & above250</li>
//                             <li className='mb-2'> <input type="radio" onClick={() => setRating(3)} name='rating' /> 3★ & above250</li>
//                             <li className='mb-2'> <input type="radio" onClick={() => setRating(2)} name='rating' /> 2★ & above250</li>
//                             <li className='mb-2'> <input type="radio" onClick={() => setRating(1)} name='rating' /> 1★ & above250</li>
//                         </ul>
//                     </div>



//         </aside>

//          <div>
//          <div className='flex justify-end pr-[90px]'>
//          {sorting}
//                         <select className='border-1 p-2' onChange={
//                             (e) => setSorting(e.target.value)

//                         }>
//                             <option> Sort by : Recommended</option>
//                             <option value="1">Name : A to Z</option>
//                             <option value="2">Name : Z to A</option>
//                             <option value="3">Price : Low to High</option>
//                             <option value="4">Price : High to Low</option>

//                         </select>
//          </div>


//          <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[10px]'> 
//          { loading ?
//          <>
//            <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
//   <div className="flex animate-pulse space-x-4">
//     <div className="size-10 rounded-full bg-gray-200"></div>
//     <div className="flex-1 space-y-6 py-1">
//       <div className="h-2 rounded bg-gray-200"></div>
//       <div className="space-y-3">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="col-span-2 h-2 rounded bg-gray-200"></div>
//           <div className="col-span-1 h-2 rounded bg-gray-200"></div>
//         </div>
//         <div className="h-2 rounded bg-gray-200"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
//   <div className="flex animate-pulse space-x-4">
//     <div className="size-10 rounded-full bg-gray-200"></div>
//     <div className="flex-1 space-y-6 py-1">
//       <div className="h-2 rounded bg-gray-200"></div>
//       <div className="space-y-3">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="col-span-2 h-2 rounded bg-gray-200"></div>
//           <div className="col-span-1 h-2 rounded bg-gray-200"></div>
//         </div>
//         <div className="h-2 rounded bg-gray-200"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
//   <div className="flex animate-pulse space-x-4">
//     <div className="size-10 rounded-full bg-gray-200"></div>
//     <div className="flex-1 space-y-6 py-1">
//       <div className="h-2 rounded bg-gray-200"></div>
//       <div className="space-y-3">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="col-span-2 h-2 rounded bg-gray-200"></div>
//           <div className="col-span-1 h-2 rounded bg-gray-200"></div>
//         </div>
//         <div className="h-2 rounded bg-gray-200"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
//   <div className="flex animate-pulse space-x-4">
//     <div className="size-10 rounded-full bg-gray-200"></div>
//     <div className="flex-1 space-y-6 py-1">
//       <div className="h-2 rounded bg-gray-200"></div>
//       <div className="space-y-3">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="col-span-2 h-2 rounded bg-gray-200"></div>
//           <div className="col-span-1 h-2 rounded bg-gray-200"></div>
//         </div>
//         <div className="h-2 rounded bg-gray-200"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
//   <div className="flex animate-pulse space-x-4">
//     <div className="size-10 rounded-full bg-gray-200"></div>
//     <div className="flex-1 space-y-6 py-1">
//       <div className="h-2 rounded bg-gray-200"></div>
//       <div className="space-y-3">
//         <div className="grid grid-cols-3 gap-4">
//           <div className="col-span-2 h-2 rounded bg-gray-200"></div>
//           <div className="col-span-1 h-2 rounded bg-gray-200"></div>
//         </div>
//         <div className="h-2 rounded bg-gray-200"></div>
//       </div>
//     </div>
//   </div>
// </div>

//          </>
         
//         :

//         <>
//          {Product.map((items,index)=>( 
//              <ProductData key={index} data={items} />
//          )
          
//          )}
//         </>
//         }
         
         

    




//     </div>
//     <div className='py-4'>
//     <ResponsivePagination
//                                 current={currentPage} //1
//                                 total={totalPages}
//                                 onPageChange={setCurrentPage}
//                             />
//                             </div>
// <ToastContainer />
//          </div>
   

//     </section>
//   )
// }

// function ProductData({data}){

//        let  navigate=useNavigate()

//     let { cart, setCart } = useContext(cartContext)
//     let checkIteminCart = cart.find((item) => item.pid == data.id)
//     // let l=[{},{},{},{}] //Find,filter
//     let addTocart = () => {
//             let cartObj = {
//                 pid: data.id,
//                 name: data.name,
//                 price: data.price,
//                 image: data.image,
//                 qty: 1
//             }
//             setCart([cartObj,...cart])
//              toast.success("Item added to cart");
            
//             setTimeout(()=>{
//                 navigate('/cart')
//             },5000)
//     }

//     return(

// <div className='shadow-lg  p-2'>
//       <div className='relative'> 
//         <img src= {data.image} alt="" className='w-50 h-50' />
//       <div className='text-red-600 text-[25px] absolute top-[10px] right-[10px]'> <FaHeart /></div>
//       </div>
      
//       <h3 className='font-bold'>{data.name}</h3>
//       <h5 className='font-bold text-[#B45309]'>Rs. {data.price}</h5>
//       <p className='py-2'>{data.description}</p>
//       <div className='flex justify-between text-center'>
//         <div className='flex items-start text-yellow-500 '>
//           <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
//         </div>
//         <div>
//         {checkIteminCart
        
//         ? 
        
//         <button  className='bg-red-600 p-1 rounded-lg text-white'> REMOVE FROM CART </button>


//          : 
         
//          <button onClick={addTocart} className='bg-green-600 p-1 rounded-lg text-white'> ADD TO CART </button>
//         }
//          </div>
//       </div>
//     </div>




//     )
// }




import React, { useContext, useEffect, useState } from 'react'
import { IoMdStar } from 'react-icons/io';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
import { cartContext } from '../common/MainContex.jsx';
import { useNavigate } from 'react-router';
 import { ToastContainer, toast } from 'react-toastify';

export default function Product() {

    // let getCategories = async()=>{
    // // let apiRes = await axios.get('https://wscubetech.co/ecommerce-api/categories.php')
    // // let apiData = await apiRes.data
    // // let finalData =apiData.data



    // }
  

    let [Category,SetCategory]= useState([])
    let [Brand,SetBrand]= useState([])
     let [Product,SetProduct]= useState([])
     let [sorting, setSorting] = useState(null)
       let [categoryfilter,setcategoryFilter]= useState([])

        let [brandfilter,setbrandFilter]= useState([])
    let [priceFilter, setPriceFilter] = useState([null, null])
    let [rating, setRating] = useState(null)
    let [discount, setDiscount]= useState([null, null])
    let [loading,setLoading] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let [totalPages, setTotalPages] = useState(null)


    let getCategories = ()=>{
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
    .then( (apiRes ) => apiRes.data )
    .then( (finalData)=>{
        SetCategory( finalData.data)
        
    })
}

   let getBranded = ()=>{
    axios.get('https://wscubetech.co/ecommerce-api/brands.php')
    .then( (apiRes ) => apiRes.data )
    .then( (finalData)=>{
        SetBrand( finalData.data)
        
    })
}


//   let getAllCheckCategory = ()=>{

// if(e.target.checked){

// if(!categoryfilter.includes(e.target.value)){

//   setcategoryFilter([...categoryfilter,e.target.value])






// }else{

//   let filterData = categoryfilter.filter((value) => value != e.target.value)


// setcategoryFilter(filterData)



// }



// }


//   }  


// let getAllCheckbrand = ()=>{

// if(e.target.checked){

// if(!brandfilter.includes(e.target.value)){

//   setbrandFilter([...brandfilter,e.target.value])






// }else{

//   let filterData = brandfilter.filter((value) => value != e.target.value)


// setbrandFilter(filterData)



// }



// }


//   }  


let getAllCheck = (e,stateName,stateFunction)=>{

if(e.target.checked){

if(!stateName.includes(e.target.value)){

  stateFunction([...stateName,e.target.value])

}
}

else{

  let filterData = stateName.filter((value) => value != e.target.value)


  stateFunction(filterData)



}






  }  













let getProducts = ()=>{
  setLoading(true)

axios.get('https://wscubetech.co/ecommerce-api/products.php', {
    
params:{
page: currentPage,
limit: 12,
categories: categoryfilter.toString(),
brands: brandfilter.toString(),
price_from: priceFilter[0],
price_to: priceFilter[1],
discount_from: discount[0],
discount_to: discount[1],
rating,
sorting,

    }
})



.then( (apiRes ) => apiRes.data )
.then( (finalData)=>{
    setLoading(false)
    SetProduct( finalData.data)
     setTotalPages(finalData.total_pages)
   
    
})
}




useEffect(()=>{
    getProducts()
},[sorting, categoryfilter,brandfilter,priceFilter,discount,rating,currentPage])









    useEffect(()=>{
        getCategories()
        getBranded()
       
    },[])







  return (
    <section className='grid grid-cols-[15%_auto] py-10 gap-5'>
        <aside className=''>
            <div className='flex justify-center gap-5'>
            <div>FILTERS</div>
            <div>CLEAR ALL</div>
            </div>
            <div className='border-2 border-gray-300  h-[250px] overflow-y-scroll'>
                <h1 className='p-2 font-bold'> CATEGORIES</h1>
                <ul className='p-3'>
                {Category.map((items,index)=>{
                    return(
                        // <li className='mb-2' key={index} > <input type="checkbox"   onChange={getAllCheckCategory} value={items.slug} /> {items.name} </li> 

                        <li className='mb-2' key={index}>
                        <input type="checkbox"
                            value={items.slug}
                              onChange={(e)=>getAllCheck(e, categoryfilter, setcategoryFilter)}/>

                        {items.name} </li>
                    )
                })}
                   
                </ul>
                

            </div>
            <div className='border-2 border-gray-300  h-[250px] overflow-y-scroll'>
                <h1 className='p-2 font-bold'> BRAND</h1>
                <ul className='p-3'>
                {Brand.map((items,index)=>{
                    return(
                        // <li className='mb-2' > <input type="checkbox" onChange={getAllBrandFilter} value={items.slug}/> {items.name} </li>
                        <li className='mb-2' key={index}>
                        <input type="checkbox"  value={items.slug} onChange={(e)=>getAllCheck(e, brandfilter, setbrandFilter)} />

                        {items.name} </li> 
                    )
                })}
                   
                </ul>
                

            </div>
            <div className='border-2 border-gray-300  h-[200px] overflow-y-scroll'>
                <h1 className='p-2 font-bold'> Price</h1>
                <ul className='p-3'>
                            <li className='mb-2' > <input type="radio" onClick={() => setPriceFilter([10, 250])} name='priceFilter' />  Rs. 10 to Rs. 250</li>
                            <li className='mb-2' > <input type="radio" name='priceFilter'
                                onClick={() => setPriceFilter([250, 500])}
                            />  Rs. 250 to Rs. 500</li>
                            <li className='mb-2' > <input type="radio" name='priceFilter'
                                onClick={() => setPriceFilter([500, 1000])}
                            />  Rs. 500 to Rs. 1000</li>
                            <li className='mb-2' > <input type="radio" name='priceFilter'
                                onClick={() => setPriceFilter([1000, 50000])}
                            />  Rs. 1000 to Above</li>
                        </ul>
                

            </div>
            <div className='border-2  border-gray-300 h-[200px] overflow-y-scroll'>
                <h1 className='p-2 font-bold'> DISCOUNT RANGE</h1>
                <ul className='p-3'>
                      <li className='mb-2'> <input type="radio" onClick={() => setDiscount([5,60])} name='discount' /> 5% and above</li>
                            <li className='mb-2'> <input type="radio" onClick={() => setDiscount([10,60])} name='discount'  /> 10% and above</li>
                            <li className='mb-2'> <input type="radio" onClick={() => setDiscount([15,60])} name='discount'  />15% and above</li>
                            <li className='mb-2'> <input type="radio" onClick={() => setDiscount([20,60])} name='discount'  /> 20% and above</li>
                </ul>
                

            </div>

            <div className='border-2  border-gray-300 h-[200px] overflow-y-scroll'>
                        <h3 className='font-bold p-2'>Rating</h3>
                        <ul className='p-3'>
                            <li className='mb-2'> <input type="radio" onClick={() => setRating(4)} name='rating' /> 4★ & above250</li>
                            <li className='mb-2'> <input type="radio" onClick={() => setRating(3)} name='rating' /> 3★ & above250</li>
                            <li className='mb-2'> <input type="radio" onClick={() => setRating(2)} name='rating' /> 2★ & above250</li>
                            <li className='mb-2'> <input type="radio" onClick={() => setRating(1)} name='rating' /> 1★ & above250</li>
                        </ul>
                    </div>



        </aside>

         <div>
         <div className='flex justify-end pr-[90px]'>
         {sorting}
                        <select className='border-1 p-2'  onChange={(e)=>setSorting(e.target.value)}>
                            <option> Sort by : Recommended</option>
                            <option value="1">Name : A to Z</option>
                            <option value="2">Name : Z to A</option>
                            <option value="3">Price : Low to High</option>
                            <option value="4">Price : High to Low</option>

                        </select>
         </div>


         <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[10px]'> 
         { loading ?
         <>
           <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
<div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
<div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
<div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
<div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>

         </>
         
        :

        <>
         {Product.map((items,index)=>( 
             <ProductData key={index} data={items} />
         )
          
         )}
        </>
        }
         
         

    




    </div>
    <div className='py-4'>

      <ResponsivePagination
                                current={currentPage} //1
                                total={totalPages}
                                onPageChange={setCurrentPage}
                            />
    
                            </div>
<ToastContainer />
         </div>
   

    </section>
  )
}

function ProductData({data}){

       let  navigate=useNavigate()

    let { cart, setCart } = useContext(cartContext)
    let checkIteminCart = cart.find((item) => item.pid == data.id)
    // let l=[{},{},{},{}] //Find,filter
    let addTocart = () => {
            let cartObj = {
                pid: data.id,
                name: data.name,
                price: data.price,
                image: data.image,
                qty: 1
            }
            setCart([cartObj,...cart])
             toast.success("Item added to cart");
            
            setTimeout(()=>{
                navigate('/cart')
            },5000)
    }

    return(

<div className='shadow-lg  p-2'>
      <div className='relative'> 
        <img src= {data.image} alt="" className='w-50 h-50' />
      <div className='text-red-600 text-[25px] absolute top-[10px] right-[10px]'> <FaHeart /></div>
      </div>
      
      <h3 className='font-bold'>{data.name}</h3>
      <h5 className='font-bold text-[#B45309]'>Rs. {data.price}</h5>
      <p className='py-2'>{data.description}</p>
      <div className='flex justify-between text-center'>
        <div className='flex items-start text-yellow-500 '>
          <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
        </div>
        <div>
        {checkIteminCart
        
        ? 
        
        <button  className='bg-red-600 p-1 rounded-lg text-white'> REMOVE FROM CART </button>


         : 
         
         <button onClick={addTocart} className='bg-green-600 p-1 rounded-lg text-white'> ADD TO CART </button>
        }
         </div>
      </div>
    </div>




    )
}

