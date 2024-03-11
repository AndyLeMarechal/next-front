'use client'
import {useState, useEffect, use} from 'react'

import { Filters, ProductsElem } from '@/components';

const Products = ({searchParams}: {
  searchParams:{
    type: string;
    link: string;
  }

}) => {
    const [dataType, setdataType] = useState('')

  
    return (
        <>
          <Filters data={searchParams.type}/>
          <ProductsElem data={searchParams.type} link={searchParams.link}/>

    </>
    )
}

export default Products;