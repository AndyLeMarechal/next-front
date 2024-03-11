'use client'
import axios from 'axios'
import React, { FC, useState, useEffect } from 'react'

import Link from 'next/link.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping,  faHighlighter } from '@fortawesome/free-solid-svg-icons';


interface ProductsElem{
  data: string
  link: string
}

  export default function ProductsElem(props: ProductsElem): ReturnType<FC> {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/type/type`, {params: { type: props.data}})
              .then(res => {
                setProducts(res.data)
                setLoading(false)
              })
              .catch(err => {
                  setError(err.response.data.error)
                  setLoading(false)
              })


      return () => {
  
      }
    }, [])

  return (
    <>
    <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {products &&
            products.map(elem =>
                      <div key={elem.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                          <Link href={`${props.link}/${elem.id}`}>
                            <img src={elem.picture}
                                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{elem.type}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{elem.name}</p>
                                <div className="flex items-center">
                                  <svg className="w-4 h-4 text-yellow-300 me-1"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                  </svg>
                                  <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{elem.note}</p>
                                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                  <p  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</p>
                              </div>
                                      
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">{elem.price + '€'}</p>
                                        <div  className="ml-auto"><FontAwesomeIcon icon={faHeart} /></div>
                                        <div  className="ml-auto"><FontAwesomeIcon icon={faCartShopping} /></div>
                                        <div  className="ml-auto"><button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"><Link href={{pathname: `${elem.id}`}}></Link> Read More</button></div>
                                        
                                </div>
                            </div>
                            </Link>
                        
                    </div>
              )}
              </section>
    </>
  )
}
