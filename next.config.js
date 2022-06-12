

module.exports = {
    images: {
      domains: ['firebasestorage.googleapis.com','media.istockphoto.com'],
    },

    

    future: {
      webpack5: true,
    },
    webpack: function (config, {isServer}) {
      
      if(!isServer){
      
      
        config.resolve.fallback = {
        ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
          // by next.js will be dropped. Doesn't make much sense, but how it is
        fs: false, // the solution
        path:false,
        net:false,
        child_process: false,
        tls:false 

      };



      
  }

      
      return config;
    },
  

    
  }
  