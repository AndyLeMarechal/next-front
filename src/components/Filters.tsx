'use client'
import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

interface Filters {
  data: string
}

export default function Filters(props: Filters): ReturnType<FC> {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [filtersAreas, setfiltersAreas] = useState<any[]>([])
  const [filtersCategories, setfiltersCategories] = useState<any[]>([])
  const [filtersProducers, setfiltersProducers] = useState<any[]>([])
  const [filtersTastes, setfiltersTastes] = useState<any[]>([])
  const [filtersYears, setfiltersYears] = useState<any[]>([])

  const [valueArea, setvalueArea] = useState('')
  const [valueCategorie, setvalueCategorie] = useState('')
  const [valueProducer, setvalueProducer] = useState('')
  const [valueTaste, setvalueTaste] = useState('')
  const [valueYear, setvalueYear] = useState('')


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/filters/type/`, {params: { type: props.data}})
  .then(res => {
    console.log(res.data)
    setfiltersAreas(res.data.filterAreas)
    setfiltersCategories(res.data.filterCategories)
    setfiltersProducers(res.data.filterProducers)
    setfiltersTastes(res.data.filterTastes)
    setfiltersYears(res.data.filterYears)

  })
  .catch(err => {
    setError(err.response.data.error)
  })
}, []);

  return (
 <>
    <div className='p-6 max-w-2xl mx-auto font-sans antialiased'>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">

  <div className="relative">
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
        <span className="text-sm font-medium"> Areas </span>

        <span className="transition group-open:-rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </summary>

      <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div className="w-96 rounded border border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
          {filtersAreas && filtersAreas.map(elem =>
            <li>
                    <button key={elem} value={elem}>{elem}</button>
            </li>)}

          </ul>
        </div>
      </div>
    </details>
  </div>

  <div className="relative">
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
        <span className="text-sm font-medium"> Categories </span>

        <span className="transition group-open:-rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </summary>

      <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div className="w-96 rounded border border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
          {filtersCategories && filtersCategories.map(elem =>
            <li>
                    <button key={elem} value={elem}>{elem}</button>
            </li>)}

          </ul>
        </div>
      </div>
    </details>
  </div>

  <div className="relative">
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
        <span className="text-sm font-medium"> Producers </span>

        <span className="transition group-open:-rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </summary>

      <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div className="w-96 rounded border border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
          {filtersProducers && filtersProducers.map(elem =>
            <li>
                <button key={elem} value={elem}>{elem}</button>
            </li>)}

          </ul>
        </div>
      </div>
    </details>
  </div>

  <div className="relative">
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
        <span className="text-sm font-medium"> Tastes </span>

        <span className="transition group-open:-rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </summary>

      <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div className="w-96 rounded border border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
          {filtersTastes && filtersTastes.map(elem =>
            <li>
                 <button key={elem} value={elem}>{elem}</button>
            </li>)}

          </ul>
        </div>
      </div>
    </details>
  </div>
  
  <div className="relative">
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
        <span className="text-sm font-medium"> Years </span>

        <span className="transition group-open:-rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </summary>

      <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div className="w-96 rounded border border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
          {filtersYears && filtersYears.map(elem =>
            <li>
                <button key={elem} value={elem}>{elem}</button>
            </li>)}

          </ul>
        </div>
      </div>
    </details>
  </div>

  <div className="relative">
    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
        <span className="text-sm font-medium"> Price </span>

        <span className="transition group-open:-rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </span>
      </summary>

      <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
        <div className="w-96 rounded border border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <span className="text-sm text-gray-700"> The highest price is $600 </span>

            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
              Reset
            </button>
          </header>

          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">$</span>

                <input type="number" id="FilterPriceFrom" placeholder="From" className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"></input>
              </label>

              <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">$</span>

                <input type="number" id="FilterPriceTo" placeholder="To" className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"></input>
              </label>
            </div>
          </div>
        </div>
      </div>
    </details>
  </div>
</div>
</div>
    </>
  )
}
