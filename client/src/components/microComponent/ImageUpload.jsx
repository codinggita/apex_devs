import React, { useState } from 'react';
import '../styles/ImageUpload.css'

function CloudinaryImage() {
  const [imageUrl, setImageUrl] = useState('');

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'waplgf2w');

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/djkjt3zgy/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setImageUrl(data.secure_url); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='image-upload-container'>
      <input 
      type="file" 
      onChange={(e) => uploadImage(e.target.files[0])}
       />

      {imageUrl ? <img src={imageUrl} alt="Uploaded" height="180px" width="260px"/> : 
      <div className='image-upload-text'>Upload Image Here</div>
      }
    </div>
  );
}

export default CloudinaryImage;
