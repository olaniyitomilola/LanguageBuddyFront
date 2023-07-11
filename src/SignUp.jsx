
import { useState } from "react";

 export default function SignUp(props){
    return(
        <div className="loginPage">

            <ButtonRadioInput options ={['German', 'French']}/>

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
            <label onClick={()=>(handleOptionChange(option))} key={option}>
                {option}
            <input
                type="radio"
                name={option}
                value={option}
            
                checked={selectedOption === option}
            />
            {option.label}
            </label>
        ))}
        </div>

        <button>Continue</button>

    </div>
    
  );
};

