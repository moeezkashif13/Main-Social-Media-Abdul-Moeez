import { capitalizeText } from "../../utils/helperFunctions";

export const PersonName = ({name}) => {

  let finalOutputOfName;

  if(name){

  if(typeof name=='string'){

    finalOutputOfName = capitalizeText(name);
  }else{

    const {firstname,lastname} = name;
    finalOutputOfName = `${capitalizeText(firstname)} ${capitalizeText(lastname)}`
  }
}
  
  return (

    <p className="font-bold text-sm">{finalOutputOfName}</p>
  )
}