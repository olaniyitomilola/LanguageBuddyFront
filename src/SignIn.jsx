export default function SignIn(){
    return(
        <div className="loginPage">
            <form className="loginForm">
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <input type="button" value="Log in" />
            </form>
        </div>
    )
}