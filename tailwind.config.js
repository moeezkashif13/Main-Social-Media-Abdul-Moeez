module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        grayAlikeColorIcons: '#abb9c9',
        grayAlikeColorText: '#49607e',
        grayAlikeColorIconAndTextActive : '#1877f2',
containerBG : '#f9fafb',



      },

      padding: {

        commonPaddingDifferentElems : '2rem 2rem',

        

      },

      width: {
        eachStoryWidth:'210px'
      },

      height:{
        eachStoryHeight:'310px',

      },

      gridTemplateRows: {
        
        forUserPosts : 'repeat(2, minmax(0,200px))',
        
      },

      minWidth:{
        personProfileImageMinWidth : '45px'
      },

      minHeight:{
        personProfileImageMinHeight : '45px'

      },

      gap:{
        commonGapProfilePagePosts : '8px',
      }



    },
   
  },

  plugins: [],
}
