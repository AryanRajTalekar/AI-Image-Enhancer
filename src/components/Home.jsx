import React from 'react'
import ImageUpload from './imageUpload'
import ImagePreview from './imagePreview'
import { useState } from 'react'
import { enhancedImageAPI } from '../utils/enhancedImageAPI'

const Home = () => {

  const [uploadImage, setuploadImage] = useState(null)
  const [enhancedImage, setenhancedImage] = useState(null)
  const [loading, setloading] = useState(false)

  const UploadImageHandler = async (file) =>{
    setuploadImage(URL.createObjectURL(file));
    setloading(true);

    try{

      const enhancedURL = await enhancedImageAPI(file);
      setenhancedImage(enhancedURL);
      setloading(false);

    }
    catch(error){
      console.log(error);
      alert("Error while Enhancing the image.Please try again later")
    }
    //call the api
  }

  return (
    <div className='w-full flex flex-col items-center'>

      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview  
      loading={loading} 
      uploaded={uploadImage} 
      enhanced={enhancedImage?.image}
       />

    </div>
  )
}

export default Home