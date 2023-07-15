
export default function SuggestedFriends(){
    
    const friends = [{
        name: "Agbonde Oluseyi",
        language: "German",
        level: "Business"
    }, {
         name: "Joyce Chukuka",
        language: "German",
        level: "Intermediate"
    },{
        name: "Chiemezie Bradley",
        language: "German",
        level: "Beginner"
    }]
    return (
        <div className="suggestedFriends">
            <div>Suggested Friends</div>
            <div className="friendList">
                {friends.map((friend)=>
                    <div id="eachSuggestedFriend" key={friend.name}>
                        
                        <div id="suggestedFriendName">{friend.name}<button>Follow</button></div>
                        <div className="suggestedFriendLanguageAndLevel">
                            <div id="suggestedLanguage">{friend.language}</div>
                            <div id="suggestedLevel">{friend.level}</div>

                        </div>
                        
                        </div>
                )}
            </div>
        </div>
        
    )
}