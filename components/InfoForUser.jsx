import { useState } from "react"

export const InfoForUser = ({children})=>{

    const [hide,setHide] = useState(false);

    const handleHideModal = ()=>{

        setHide(true);

    }

    return(

        <div style={{backgroundColor:'rgba(0,0,0,0.3)'}} className={`${hide?'hidden':''} z-100 absolute w-full h-full flex items-center justify-center   `}>

<div className="w-[50%] h-[85%] z-20 bg-red-500 py-5 px-8">

<div onClick={handleHideModal} className="text-3xl cursor-pointer  font-bold text-right">
    X
</div>

<ul className="pt-5 list-disc font-semibold text-xl flex flex-col gap-y-3 " style={{lineHeight:'35px'}}>
{children}
</ul>

</div>

        </div>

    )

}