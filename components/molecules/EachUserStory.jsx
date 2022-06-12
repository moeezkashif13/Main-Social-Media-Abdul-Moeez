import { ProfilePicInStories } from "../atoms/ProfilePicInStories"
import { UsersStory } from "../atoms/UsersStory"

export const EachUserStory = ({index}) => {
  return (
    
    <UsersStory  index={index}>

<ProfilePicInStories/>

    </UsersStory>
    
  )
}