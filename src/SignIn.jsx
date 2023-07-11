export default function SignIn(props){
    return(
        <div className="loginPage">
            <form className="loginForm">
                <div className="loginHeader">Log in to LB</div>
                <div className="newUserReg">New to LB? &nbsp; <span onClick={()=>props.signUpHandler('sign-up')}>Create Account</span></div>

                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <input type="button" value="Log in" />
            </form>
        </div>
    )
}