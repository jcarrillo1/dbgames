import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'jcarrillo1',
  api_key: 532534145685225,
  api_secret: '6E9XzNrsZk4-HhBlsvxL0GnwIko',
})

function uploadImage(file) {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
}

export default { uploadImage };
