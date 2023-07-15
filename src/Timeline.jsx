import SuggestedFriends from "./SuggestedFriends"
import PostsPanel from "./PostsPanel"
export default function Timeline(){
    const isLargeScreen = window.innerWidth > 768;
    
    return (
        <div className="timeline">
            <PostsPanel/>
            <SuggestedFriends/>
        </div>
    )
}