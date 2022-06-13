import { getCookies, removeCookies, setCookies } from 'cookies-next';


export default function withAuth(gssp) {
    
  
    return async (context) => {


      // const getAllCookies = getCookies(context);
      // 

      const {resolvedUrl,req,res} = context;


      

      const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data

const {redirectRequired} = gsspData;



        
        if( resolvedUrl==='/signedout' && !redirectRequired ){
   
          setCookies('previousRoute','/',{req,res})
          return {
            props: {
                ...gsspData.props,
            }
        }
        }else{

        const {IDToken} = getCookies(context);


        if(!IDToken){
            setCookies('previousRoute',resolvedUrl,{req,res})

            return{
              redirect: {
                destination: '/signin',
                permanent: false,
              },
            }
        }else{
            const getFirebaseAdminAuth = await (await (import('../firebaseAdmin'))).default.auth();
    

            
            const getDecodedToken = await  getFirebaseAdminAuth.verifyIdToken(IDToken).then(decodedToken=>{
              return decodedToken;
            }).catch(err=>{
              console.log(err);
                return err;
            });


        if(!getDecodedToken ){
            setCookies('previousRoute',resolvedUrl,{req,res})
    
            return{
              redirect: {
                destination: '/signin',
                permanent: false,
              },
            }
          }
          

const {email,name} = getDecodedToken

console.log(getDecodedToken);

const {photoURL} = await getFirebaseAdminAuth.getUser(getDecodedToken.uid);




          setCookies('userPublicData',{
            email,
            name,
            photoURL
          },{req,res})
            

            return {
                props: {
                    ...gsspData.props,
                    getDecodedToken
                }
            };
          
        }
      }
     
    }
}
