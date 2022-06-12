import {capitalizeText} from '../../utils/helperFunctions';


export const NameAndPostedPostTime = ({firstname,lastname,createdAt}) => {
  return (
  
  <div className="flex items-center  w-full">

  <div className=" pl-3">

<p className="font-bold">{capitalizeText(firstname)} {capitalizeText(lastname)}</p>


<p className=" text-grayAlikeColorText">{createdAt=='1 days ago'?'1 day ago':createdAt}</p>

    </div>
  


    </div>
  
  )
}