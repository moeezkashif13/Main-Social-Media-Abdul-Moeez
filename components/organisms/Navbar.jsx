
import {GrNotification,GrBike,GrSearch,GrSettingsOption,GrLogout} from 'react-icons/gr';

import {AiFillHome,AiOutlineUsergroupAdd} from 'react-icons/ai';

import {BsPen} from 'react-icons/bs';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notificationReleatedActions } from '../../redux/actions';
import Link from 'next/link';
import { getLoggedInUserDetails, getUserProfileData } from '../../utils/firestoreReleated';
import { capitalizeText, signOutUser } from '../../utils/helperFunctions';
import { getCookies } from 'cookies-next';
import defaultImage from '../../tempimages/149071.png'
import { useRouter } from 'next/router';


const Navbar = ()=>{

    const dispatch = useDispatch();

    const {notificationsAction} = bindActionCreators(notificationReleatedActions,dispatch);

    const totalNotifications = useSelector(state=>state.notificationsReducer.notifications);

const {receivedRequestArray=[],modificationIndicator=0} = totalNotifications;
    

const [userData,setUserData] = useState({});

const {photoURL,name} = userData;

const {userPublicData} = getCookies();



// useEffect(()=>{
//     notificationsAction();
// },[])


useEffect(()=>{

    const parsing = JSON.parse(decodeURIComponent(userPublicData));
    
    setUserData({...parsing})

},[userPublicData])



// useEffect(()=>{
    
    
//     document.querySelector('.notificationIcon').classList.add('shake');

//         setTimeout(() => {
//         document.querySelector('.notificationIcon').classList.remove('shake');
            
//         }, 2000);
    

// },[modificationIndicator,receivedRequestArray.length])




const router = useRouter();

    
    return(
        <nav className="bg-containerBG px-8 py-5 flex" >
            
            
            <div>

logo

            </div>

<ul className="flex ml-auto items-center gap-x-7">

<Link href={'/'}>
<li >
    <a href="#!" className="flex gap-x-2 bg-white py-2 px-3 rounded-3xl items-center">
    <i className='text-3xl'><AiFillHome/></i>
    <p className='font-semibold'>Home</p>
    </a>
</li>
</Link>

<Link href='/notifications'>
<li   className=' notificationIcon '>
    <a href="#!" className=" flex relative" >

<span className='text-3xl'><GrNotification/></span>
<div className="font-semibold bg-yellow-500 text-white w-7 h-7 rounded-full absolute -right-4 -top-3 flex items-center justify-center">{receivedRequestArray.length}</div>

    </a>
</li >
</Link>

<Link href='/settings'>
<li   className='  '>
    <a href="#!" className=" flex relative" >

<span className='text-3xl'><GrSettingsOption/></span>


    </a>
</li >

</Link>

<Link href='/createpost'>
<li   className='  '>
    <a href="#!" className=" flex relative" >

<span className='text-3xl'><BsPen/></span>


    </a>
</li >

</Link>


<Link href='/searchusers'>
<li   className='  '>
    <a href="#!" className=" flex relative" >

<span className='text-3xl'><GrSearch/></span>

    </a>
</li >

</Link>

<Link href='/receivedrequests'>
<li   >
    <a href="#!" className=" flex relative" >

<span className='text-3xl'><AiOutlineUsergroupAdd/></span>
<div className="font-semibold bg-yellow-500 text-white w-7 h-7 rounded-full absolute -right-4 -top-3 flex items-center justify-center">0</div>

    </a>
</li >

</Link>

<li   >
    <a href="#!" className=" flex relative" >

<span className='text-3xl'><GrLogout onClick={()=>{

signOutUser(router);


}}/></span>


    </a>
</li >

<li className='flex py-2 pl-2 pr-7 rounded-3xl bg-orange-500 items-center gap-x-2'>
    <div className="w-9 h-9 rounded-full  bg-green-500 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${photoURL?photoURL:defaultImage.src})`}}    ></div>
    <p className='font-semibold text-white'>{capitalizeText(name)}</p>
</li>


</ul>

        </nav>
    )

}



export default Navbar;
   