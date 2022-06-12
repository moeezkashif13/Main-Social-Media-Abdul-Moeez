

export const CommonButton = ({fullWidth,Icon,text,background}) => {
  

  
  return (
    <div
    
    style={{backgroundColor:`${background?background:'transparent'}`}}
    
    className={`${background?'transparent':'border-2 text-grayAlikeColorText'} ${fullWidth?'w-full py-2':'px-4 py-2'} cursor-pointer rounded-lg inline-flex font-semibold text-white items-center justify-center`}>

{Icon}
<p className={`${Icon?'ml-2':''}`}>{text}</p>


    </div>
  )
}