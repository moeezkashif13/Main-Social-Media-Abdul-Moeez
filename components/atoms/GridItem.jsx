export const GridItem = ({backgroundImage}) => {
  
  return (
    <div style={{backgroundImage:`url(${backgroundImage})`}} className={`mx-4  h-full rounded-2xl flex-grow bg-cover bg-no-repeat bg-center`}></div>
  )
}