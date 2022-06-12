import { CircleAndCount } from "../atoms/CircleAndCount"
import { Contacts } from "../molecules/Contacts"

export const ContactsContainer = () => {
  return (
    <div>


<div className="flex items-center my-4">
    <p className="px-10 font-semibold text-grayAlikeColorText">Contacts</p>
    <CircleAndCount count="68" bgColor='#000'/>
    
</div>


<div className="hideScrollbar h-[540px] flex flex-col  gap-y-4" style={{overflowY:'scroll'}}>

<Contacts/>
<Contacts message/>
<Contacts/>
<Contacts message/>
<Contacts/>
<Contacts/>
<Contacts message/>
<Contacts/>
<Contacts/>
<Contacts/>
<Contacts message/>
<Contacts message/>
<Contacts/>

</div>


    </div>
  )
}