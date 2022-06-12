import { motion } from "framer-motion";
import { Container } from "../components/Container";
import withAuth from "../components/hoc";
import { Sidebar } from "../components/organisms/Sidebar";


const EachNotification = ()=>{
    return(
        <div className="bg-green-400 py-8 rounded-2xl flex  items-center px-4" style={{width:'320px'}}>


<div style={{minWidth:'80px',minHeight:'80px'}} className=" bg-yellow-500 rounded-full"></div>

<p className="pl-2 font-semibold text-white">notifications to be implemented</p>

        </div>
    )
}

const NotificationsArr = [13,213,213,123,123,12397,12312,3213];


export default function Notifications (){

    const eachNotificationVariant = {
     
        visible: index => ({
            opacity: 1,
            transition: {
              delay: index * 0.1,
            },
          }),



        initial:{
            opacity:0,
        }
    }


    return(
        
        <Container>

<Sidebar/>


<motion.div 



className="bg-purple-500  w-full flex flex-wrap justify-center gap-5 py-12">



{NotificationsArr.map((eachNotif,index)=>{

return         <motion.div 

key={index}

custom={index}

variants={eachNotificationVariant} animate="visible" initial="initial"   

className="bg-green-400 py-8 rounded-2xl flex  items-center px-4" style={{width:'320px'}}>


<div style={{minWidth:'80px',minHeight:'80px'}} className=" bg-yellow-500 rounded-full"></div>

<p className="pl-2 font-semibold text-white">notifications will be implemented later</p>

        </motion.div>
})}


</motion.div>



        </Container>
        

    )

}


export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    return { props: {}}
  });