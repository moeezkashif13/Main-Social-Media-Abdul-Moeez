import {CircleAndCount} from '../atoms/CircleAndCount';

export const IconAndText = () => {
  return (
    <div className='flex items-center'>

<i>IC&nbsp;</i>  
 <span>Home</span>

{/* if available */}

{/* COUNT COMPONENT */}

<CircleAndCount bgColor="#1877f2" count={0}  />

    </div>
  )
}