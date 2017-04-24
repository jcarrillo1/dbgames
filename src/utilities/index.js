export const blobToImage = file => new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    console.log(event);
    return resolve(event.target.result);
  }
  reader.readAsDataURL(file);
});
