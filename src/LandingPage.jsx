
import SignIn from "./SignIn";
import SignUp from "./SignUp";


export function LandingPage(props){


    const landingPageNav = ()=>{
        if(props.page !== 'landing-page'){
            props.HandleLogin('landing-page')
        }
    }

    return (
        <div className="landingPage">
            {/* <div className="topOfPage">
                <div onClick={()=> landingPageNav()} id="logo">LANGUAGEBuddy</div>

                {props.page === 'landing-page' ? 
                    <div id="signInAndSignUpBtn">
                        <button onClick={()=>props.HandleLogin('login')}>Log in</button>
                        <button onClick={()=>props.HandleSignUp('sign-up')} id="signUp">Sign up</button>
                    </div>
                    : ""
                }
            </div> */}
            <TopNav page = {props.page} landingPageNav = {landingPageNav} HandleLogin = {props.HandleLogin} HandleSignUp = {props.HandleSignUp}/>
            <div className="bottomOfPage">

                {props.page === 'landing-page'? <>
                    <div className="leftBottomOfPage"><LeftIntroPage/></div>
                    <div className="rightBottomOfPage"><img className="rightImg" src="https://www.babbel.com/static/index_page/en_US/images/hero-large-en.4ea397b62160120f1e32a58b9cbbfff1.webp" alt="" srcset="" /></div>
                </> : props.page === 'login'?  <SignIn signInHandler = {props.signInHandler} signUpHandler = {props.HandleSignUp} /> : <SignUp signUpHandler = {props.HandleSignUp}/>}
               
            </div>
        </div>
    )
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

export function TopNav(props){
    return(
        <div className="topOfPage">
                <div onClick={()=> props.landingPageNav()} id="logo">LANGUAGEBuddy</div>

                {props.page === 'landing-page' ? 
                    <div id="signInAndSignUpBtn">
                        <button onClick={()=>props.HandleLogin('login')}>Log in</button>
                        <button onClick={()=>props.HandleSignUp('sign-up')} id="signUp">Sign up</button>
                    </div>
                    : ""
                }
            </div>
    )
}

