import React from 'react'
import Home from './components/Home.jsx'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-8 px-4'>

    {/* Header */}

    <div className='text-center mb-8'>
      <h1 className='text-5xl font-bold mb-2 text-gray-300'>
        AI Image Enhancer{" "}
      </h1>
      <p className='text-2xl text-gray-200'>From Blurry to Brilliant — Instantly!!!</p>
    </div>


    <Home/>


    {/* Footer */}

    <div className='text-lg text-gray-500 mt-8'>
    Your photos deserve the best. So do you.
    </div>

    </div>
  )
}

export default App