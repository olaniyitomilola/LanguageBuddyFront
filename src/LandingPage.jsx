export default function LandingPage(){


    return (
        <div className="landingPage">
            <div className="topOfPage">
                <div id="logo">LANGUAGEBuddy</div>
                <div id="signInAndSignUpBtn">
                    <button>Log in</button>
                    <button id="signUp">Sign up</button>
                </div>
            </div>
            <div className="bottomOfPage">
                <div className="leftBottomOfPage"><LeftIntroPage/></div>
                <div className="rightBottomOfPage"><img className="rightImg" src="https://www.babbel.com/static/index_page/en_US/images/hero-large-en.4ea397b62160120f1e32a58b9cbbfff1.webp" alt="" srcset="" /></div>
            </div>
        </div>
    )
}


function SignInForm(){

}

function LeftIntroPage(){
    return (
        <div className="leftIntroPage">
            <h2>Which language do you want to learn</h2>
            <div className="languageButtons">
                <button><img src="https://www.babbel.com/static/index_page/en_US/images/DEU.b8b00b7f031d59ea8876a31566aadea3.svg" alt="german logo" srcset="" />GERMAN</button>
                <button><img src="https://www.babbel.com/static/index_page/en_US/images/FRA.94819e02add5f52a1566f64df0ba527b.svg" alt="french logo" srcset="" /> FRENCH</button>
            </div>
        </div>
    )
}