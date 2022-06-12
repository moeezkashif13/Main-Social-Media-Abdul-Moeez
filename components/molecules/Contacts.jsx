import {PersonProfileImage} from '../atoms/PersonProfileImage';

import {BsThreeDots} from 'react-icons/bs'
import { CircleAndCount } from '../atoms/CircleAndCount';

export const Contacts = ({message}) => {
  return (
    <div className='flex items-center px-6 '>

<PersonProfileImage/>

<div className='flex  items-center w-full'>

<p className='font-semibold ml-4 mr-auto'>Amanda Miles</p>


{message?(
  <div className='-mr-1'>
  <CircleAndCount  bgColor='#ff4154' count='3' />
</div>
):<BsThreeDots className='text-2xl cursor-pointer'/>}


</div>

    </div>
  )
}