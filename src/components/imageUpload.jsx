import React from 'react'

const imageUpload = (props) => {

  const ShowImageHandler = (e)=>{
    const file = e.target.files[0];
    if(file){
      props.UploadImageHandler(file);
    }
  }



  return (
    <div className='text-black bg-white shadow-lg rouded-2xl p-6 w-full max-w-2xl'>
      <label htmlFor="fileInput" className='block w-full p-6 text-center transition-all hover:border-blue-500 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg'>
        
        <input type="file" id="fileInput" className='hidden' onChange={ShowImageHandler}/>
        {/* we have used hidden - this means the widget or element is not present there but its funstionality remains
        we did this because input file element has a default text which we do not want */}
        <span className='text-lg font-medium text-gray-600'>Click and drag to upload your image</span>
      </label>
    </div>
  )
}

export default imageUpload