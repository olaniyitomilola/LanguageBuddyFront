
import { useState } from "react";

 export default function SignUp(props){

    const [signUpState, setSignUpState] = useState('choose-language')
    
    const handleSignUpState = (option)=>{
        setSignUpState(option)
    }
    
    return(
        <div className="loginPage">

            {signUpState === 'choose-language'?<ButtonRadioInput signUpHandler = {setSignUpState} options ={['German', 'French']}/> : signUpState === 'user-details' ? <RegistrationForm signUpHandler = {props.signUpHandler}/> : "" }

        </div>
    )
}



const ButtonRadioInput = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (

    <div className="languageSelection">
        <h2>Which Language do you want to learn?</h2>
        <div className="radio-group">
        {props.options.map((option) => (
            <label key={option}>
                {option}
            <input
                type="radio"
                name={option}
                value={option}
                onChange={() => handleOptionChange(option)}
                checked={selectedOption === option}
            />
            
            </label>
        ))}
        </div>

        <button onClick={()=>{props.signUpHandler('user-details')}}>Continue</button>

    </div>
    
  );
};

const RegistrationForm = (props)=>{
    return(
        <div className="registerForm">
            <h2>Register a new LB Account</h2>
            <div className="alreadyAccount">Already have an Account? &nbsp; <span onClick={()=>props.signUpHandler('login')}>Log in</span></div>
            <form>
                <input type="text" placeholder="First Name" name="firstName" />
                <input type="text" placeholder="Last Name" name="lastName" />
                <input type="email"  placeholder="Email" name="email"/>
                <input type="password" placeholder="password" name="password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="button" value="Register"/>
            </form>
        </div>
    )
}

