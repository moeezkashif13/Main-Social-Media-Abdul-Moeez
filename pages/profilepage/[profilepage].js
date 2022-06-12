import withAuth from "../../components/hoc";

export default function ProfilePage(){

    return(
        <div className="text-white">PROFILE PAGE</div>
    )

}


export const getServerSideProps = withAuth(context => {
    // Your normal `getServerSideProps` code here
    return { props: {}}
  });