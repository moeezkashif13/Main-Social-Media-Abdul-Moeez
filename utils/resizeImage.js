import Resizer from "react-image-file-resizer";


const resizeFile = (file) =>
new Promise((resolve) => {
  Resizer.imageFileResizer(
    file,
    1000,
    1000,
    "JPEG",
    80,
    0,
    (uri) => {
      resolve(uri);
    },
    "base64"
  );
});




const dataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};

export const resizeGivenImage = async receivedImage=>{

    const image = await resizeFile(receivedImage);

    const newFile = dataURIToBlob(image);

            
    return newFile;

};

