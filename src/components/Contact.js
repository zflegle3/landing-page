
import { ReactComponent as OperaSvg } from '../images/icon-error.svg';


function Contact(props) {


    const handleSubmit = (e) => {
        e.preventDefault();
        //get email input
        let emailIn = document.getElementById("email").value;
        console.log("email:",emailIn);
        //reset error state
        let inputContainer = document.getElementById("input-container");
        inputContainer.className="";
        let inputError = document.getElementById("input-err");
        inputError.textContent="Email Error";
        //validate length
        if (emailIn.length > 1) {
            if (validateEmailFormat(emailIn)) {
                //If working site add email submission here
                document.querySelector("form").reset();
            } else {
                inputContainer.className="invalid";
                inputError.textContent="Whoops, make sure it's an email";
            }
        } else {
            //handle length error
            inputContainer.className="invalid";
            inputError.textContent="Whoops, the email field can't be empty";
        }

    }

    const validateEmailFormat = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };


  return (
    <div className="contact">
        <p>35,000+ ALREADY JOINED</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <form>
            <div id="input-container">
                <input type="email" id="email" name="email" placeholder="Enter your email address"></input>
                <p id="input-err">Email Error</p>
                <OperaSvg />
            </div>
            <button onClick={handleSubmit}>Contact Us</button>
        </form>
    </div>
  );
}

export default Contact;
