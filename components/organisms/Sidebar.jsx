import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CircleAndCount } from '../atoms/CircleAndCount'
import { PersonProfileImage } from '../atoms/PersonProfileImage'
import { IconAndText } from '../molecules/IconAndText'
import { ProfileImageAndDetails } from '../molecules/ProfileImageAndDetails'

import {getLoggedInUserUID} from '../../utils/authenticationReleated'
import { AuthFirebase } from '../../firebaseConfig'


export const Sidebar = () => {

  

  return (
    <div className='' style={{width:'280px',minWidth:'280px'}}>
      
<ProfileImageAndDetails />

<div className='bg-white p-commonPaddingDifferentElems flex flex-col gap-y-5'>

<IconAndText/>
<IconAndText/>
<IconAndText/>
<IconAndText/>
<IconAndText/>
<IconAndText/>



</div>


    </div>
  )
}
