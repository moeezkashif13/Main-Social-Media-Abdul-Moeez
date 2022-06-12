import defaultImage from '../../tempimages/149071.png'

export const PersonProfileImage = ({image}) => {


  


  return (
    <div className='   rounded-xl min-w-personProfileImageMinWidth min-h-personProfileImageMinHeight bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image?image:defaultImage.src})`}} ></div>
  )
}
