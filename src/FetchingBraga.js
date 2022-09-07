import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchingBraga() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        console.log(res)
        setResults(res.data.products)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div classNameName='h-screen bg-gray-100'>
      <h1 className='text-xl mb-2'>Dashboard</h1>
      <div class="max-w-screen-lg bg-sky-500 rounded-lg mx-9 text-center py-12 mt-4 mb-7">
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 text-left mx-9">
          Total Produk <span className='text-right'>100</span>
        </h2>
      </div>
      {/* <div className='grid grid-cols-4 gap-4'> */}
      <div className='flex flex-wrap'>
        <div class="mb-5 mx-9 basis-1/4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Home Decoration</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">3</p>
        </div>
        <div class="mb-5 mx-2 basis-1/4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Groceries</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">4</p>
        </div>
        <div class="mb-5 mx-9 basis-1/4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skincare</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">2</p>
        </div>
        <div class="mb-5 mx-9 basis-1/4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fragrances</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">3</p>
        </div>
        <div class="mb-5 mx-2 basis-1/4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Smartphone</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">2</p>
        </div>
        <div class="mb-5 mx-9 basis-1/4 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laptop</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">1</p>
        </div>  
      </div>
      <h2 className='text-xl mb-2'>Table List Product</h2>
      <button class="mb-3 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        + Input Data Baru
      </button><br />
      <table className="w-full">
        <thead className='p-5 bg-gray-50 border-2 border-gray-200'>
          <tr className='text-left'>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>No</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Title</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Brand</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Rating</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Detail </th>
          </tr>
        </thead>
        <tbody>
          {
            results.map((result, index) => {
              return (
                <tr key={index}>
                  <td className='p-3 text-sm text-gray-700'>{result.id}</td>
                  <td className='p-3 text-sm text-gray-700'>{result.title}</td>
                  <td className='p-3 text-sm text-gray-700'>{result.category}</td>
                  <td className='p-3 text-sm text-gray-700'>{result.brand}</td>
                  <td className='p-3 text-sm text-gray-700'>{result.price}</td>
                  <td className='p-3 text-sm text-gray-700'>{result.rating}</td>
                  <td className='p-3 text-sm text-blue-500 hover:underline font-bold'>
                    Lihat Detail
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}


export default FetchingBraga

// https://dummyjson.com/products