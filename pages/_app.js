


import '../styles/globals.css'

import '../styles/ModalAndCSSLoader.css';
import '../styles/RippleLoader.css';

import {wrapper} from '../redux/store';





function MyApp({ Component, pageProps }) {

  


  return (
  // <QueryClientProvider client={queryClient}>
  // <Hydrate state={pageProps.dehydratedState}>
    <Component {...pageProps} />
  // </Hydrate>
  // </QueryClientProvider>
  )
  {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}

}



export default wrapper.withRedux(MyApp);
