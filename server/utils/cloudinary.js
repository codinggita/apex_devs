import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
      
// cloudinary.config({ 
//   cloud_name: process.env.COUDINARY_CLOUD_NAME, 
//   api_key: process.env.COUDINARY_API_KEY, 
//   api_secret: process.env.COUDINARY_API_SECRET
// });
          

//  CLOUDINARY CONFIGURATION
cloudinary.config({ 
  cloud_name: 'djkjt3zgy', 
  api_key: '595112789444384', 
  api_secret: 'KCSp5ed0hwe4wsyYrjxtKMb1Zmo' 
});



const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if(!localFilePath==null)return null;

        //upload the file on cloudinary
        const response = cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        console.log("File is uploaded on cloudinary", response.url)
    }catch(error){
        //it will remove the locall saved temp file
        fs.unlinkSync(localFilePath)
    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });