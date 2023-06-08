import { useState } from "react";
import "./EmailList.css";

function EmailList() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email Sent");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="emaillist">
      <div className="header">
        <h2>Know What We Are Up To</h2>
     <p>Be the first to get updates from our fast growing community of talents</p> </div>
      <div className="cards">
        
        <input
          id="email"
          className="input"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleOnChange}
        />
        <button onClick={emailValidation}>Subscribe</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default EmailList;
