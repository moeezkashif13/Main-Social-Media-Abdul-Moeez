import tempImage from './tempimage.jpg';
import {useEffect} from 'react'


const commonProps = 'bg-cover bg-center bg-no-repeat';




const BigBox = ()=>(

    
    <div id='BigBox' className={` ${commonProps} gridColumn`} style={{backgroundImage:`url(${tempImage.src})`,gridColumn:'span 5'}}></div>

)


const HorizontalDivAndTwoBoxes = ()=>(

<div id='HorizontalDivAndTwoBoxes' className="gridColumn grid gap-commonGapProfilePagePosts" style={{gridColumn:'span 5'}}>
    

    <div style={{backgroundImage:`url(${tempImage.src})`}} className={` ${commonProps}`}></div>
    
    <div className="flex  gap-commonGapProfilePagePosts">
        <div style={{backgroundImage:`url(${tempImage.src})`}} className={`w-1/2  ${commonProps}`}></div>
        <div style={{backgroundImage:`url(${tempImage.src})`}} className={`w-1/2  ${commonProps}`}></div>
    </div>
    
    
    </div>

)

const VerticalDiv = ()=>(
    <div id='VerticalDiv' className="gridColumn grid" style={{gridColumn:'span 2'}}>
    
    <div style={{backgroundImage:`url(${tempImage.src})`}} className={` ${commonProps}`}></div>
    
    </div>
)


const TwoBoxesColumns = ()=>(

    <div id='TwoBoxesColumns' className="gridColumn grid  gap-commonGapProfilePagePosts" style={{gridColumn:'span 3'}}>
    
    <div  style={{backgroundImage:`url(${tempImage.src})`}} className={` ${commonProps}`}></div>
    <div style={{backgroundImage:`url(${tempImage.src})`}} className={` ${commonProps}`}></div>
    
    </div>

)





const FirstType = ()=>(

<>


<TwoBoxesColumns/>
    
    
    <BigBox/>
    
    <div className=" grid gap-commonGapProfilePagePosts" style={{gridColumn:'span 4'}}>
    
        
    
    <HorizontalDivAndTwoBoxes/>
    
    
    </div>
    </>

)

const SecondType = ()=>(

    <>
    
    <BigBox/>



    <HorizontalDivAndTwoBoxes/>




<VerticalDiv/>

    
    </>


)

const ThirdType = ()=>(

    <>
    
   <VerticalDiv/>


<HorizontalDivAndTwoBoxes/>

<BigBox/>


    
    </>


)





const userPostTest = [

    {text:'it"s a post by a user',time:'25 mins ago',images:[123,456,789]},
    {text:'it"s second post posted by a user',time:'42 mins ago',images:[222,333,444]},
    {text:'it"s third post posted by a user',time:'12 mins ago',images:[999,7777,888]},


];


const decideWhichColumnToRender = ()=>{

    
    const selectPreviousColumnRendered = document.querySelector('#BigBox')

const getColumnSpanOfMainElement = selectPreviousColumnRendered.style.gridColumnStart.split(" ")[1];


const gridColumns = Array.from(document.querySelectorAll('.gridColumn'));

const allElementsExceptAboveElement =  gridColumns.filter(eachColumn=>{


    return eachColumn.id !== selectPreviousColumnRendered.id;
    

})

function getDifference(a, b) {
    return Math.abs(a - b);
  }


allElementsExceptAboveElement.forEach((eachColumn,index)=>{


// const getColumnSpan = eachColumn.style.gridColumnStart.split(" ")[1];

// const addingCurrentColumnAndPreviousColumn = parseInt(getColumnSpanOfMainElement)+parseInt(getColumnSpan);







});




}



export const UserProfilePagePosts = ()=>{


    useEffect(()=>{
        decideWhichColumnToRender();

    },[])

    return(
        
        <div className="grid grid-cols-12 gap-commonGapProfilePagePosts" style={{gridAutoRows:'400px'}}>

{/* <FirstType/>

<SecondType/>

<ThirdType/> */}



<BigBox/>

<VerticalDiv/>
<HorizontalDivAndTwoBoxes/>
<TwoBoxesColumns/>





        </div>
    )

}