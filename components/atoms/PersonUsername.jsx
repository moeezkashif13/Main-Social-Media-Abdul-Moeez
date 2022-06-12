export const PersonUsername = ({name}) => {

  
  const {firstname,lastname} = name;

  const removedSpaces = String(firstname+lastname).replace(/\s/g, '')

  
  
  // let concatStringsAndRemoveSpaces = firstname.concat 


  return (
    <p className="text-grayAlikeColorText text-sm">@{removedSpaces}</p>
  )
}