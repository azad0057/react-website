import React from 'react'
import Header from '../common/Header'
import './Login.css'
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";


export default function Login() {
  return (
         <>
          
          

            

<section class="bg-gray-50 dark:bg-gray-900 py-10">
    <div class=" mx-auto max-w-[800px] grid lg:grid-cols-2">
        <div class="grid grid-cols text-center py-10 text-white bg-blue-400 dark:bg-blue-400">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-3xl dark:text-white">K-WD</h1>
            <p class="py-8 text-lg font-normal text-white  ">With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
            <div class="text-sm py-10 font-medium text-white dark:text-white">
                        Not registered yet? <a class="text-white hover:underline dark:text-blue-500">Create account</a>
                    </div>
                    <div class="text-sm py-8 font-medium text-white dark:text-white">
                        Read our terms and conditions</div>
            
        </div>
        <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                   Account Login
                </h2>
                <form class="mt-8 space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                        </div>
                        <div class="ms-3 text-sm">
                        <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                        </div>
                        <a href="#" class="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                   
                    <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>Log in</button>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='h-px bg-gray-400 w-14'></div>
                        <div className='font-normal'>or login with</div>
                        <div className='h-px bg-gray-400 w-14'></div>
                    </div>
                    <div className='space-y-3'>
                        
                        <div> 
                             <button class="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 gap-1">
                                <div> <FaGoogle /></div>
                                Login to your account</button> 
                            </div>
                        <button class="w-full flex items-center justify-center border border-blue-500 text-blue-600 py-2 rounded hover:bg-blue-50 gap-1">
            <FaFacebook />

            Login with Facebook
          </button>
                     

                    </div>

                </form>
            </div>
        </div>
    </div>
</section>

           
               </>
         
  )
}
