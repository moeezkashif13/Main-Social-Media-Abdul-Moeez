import { CommonButton } from "../atoms/CommonButton"
import { PersonProfileImage } from "../atoms/PersonProfileImage"


export const FriendRequest = () => {
  return (
    <div className="bg-white px-6 py-6 rounded-xl">

<div className="flex items-center">
    <PersonProfileImage/>

<p className="text-sm pl-2 "><span className="font-bold">Tyrell Barrows</span> wants to add you to friends</p>

</div>

<div className="flex mt-2 gap-x-4 ">


    <CommonButton background='#1877f2' text='Accept' fullWidth />
<CommonButton text='Decline'  fullWidth />
    
</div>


    </div>
  )
}