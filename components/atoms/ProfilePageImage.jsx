import defaultImage from '../../tempimages/149071.png';


export const ProfilePageImage = ({image})=>{

return(
    <div className="w-20 h-20 rounded-full  bg-cover bg-center bg-no-repeat " style={{backgroundImage:`url(${image?image:defaultImage.src})`}}  > </div>
    )

}