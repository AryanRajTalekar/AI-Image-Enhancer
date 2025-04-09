import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center text-black items-center h-full'>
      <div className='animate-spin border-t-transparent border-4 w-10 h-10 scale-150  rounded-full border-red-500'></div>
    </div>
  )
}

export default Loading