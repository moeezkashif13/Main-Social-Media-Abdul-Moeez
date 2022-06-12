import { capitalizeText } from "../../utils/helperFunctions";

const spacesRemovedInLabelFunction = label=>{

    return label.replace(/\s/g,'')

}




const inputFieldsCommonProps  = (label,register,spacesRemovedInLabel )=> {


    return{
    ...register(spacesRemovedInLabel), 
     className:"w-full text-[#4b4b4f] outline-none placeholder:[#5d5e61] py-1 text-md font-semibold  bg-transparent ",
      placeholder: `Your ${capitalizeText(label).trim()}`,
    }

}



export const AuthReleatedInput = ({label,register,errors})=>{


const spacesRemovedInLabel = spacesRemovedInLabelFunction(label);



    
    return(
        <div className=" border-2 border-[#d3d5de] px-5 py-1  rounded-lg">

<p className="text-[#c0c1c6] text-sm">{capitalizeText(label).trim()}</p>

{label==='password'?(
    <input type="password" {...inputFieldsCommonProps(label,register,spacesRemovedInLabel)} />
):

<input type="text" {...inputFieldsCommonProps(label,register,spacesRemovedInLabel)} />
}




<p  className="text-red-500 font-semibold"> {errors[spacesRemovedInLabel]&&errors[spacesRemovedInLabel].message}</p>



        </div>
    )

}
