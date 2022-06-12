import Link from 'next/link';
import withAuth from '../components/hoc'

export default function SignedOut(){


    return(
        <div className="h-[100vh] bg-red-500 flex items-center justify-center font-bold flex-col text-4xl">


<h1>YOU HAVE SIGNED OUT SUCCESSFULLY</h1>

<p className='text-green-500  my-4'><Link href={'/signin'}>Signin Again? </Link></p>


        </div>
    )


}

export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    
    
    return { props: {
        redirectRequired:false
    }}
  

});