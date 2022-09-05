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
      <h1 className='text-xl mb-2'>Table List Product</h1>
      <button class="p-3 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Detail</th>
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