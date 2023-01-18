import React from "react";
import Button from "../../components/UI/button/Button";

import "./home.css";

function Home() {
  const handleClick = () => {
    console.log("TO CREATE AN ACCOUNT");
  };
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="welcome-text">
          <h2>WRITE YOUR THOUGHTS. WRITE YOURSELF</h2>
          <Button onClick={handleClick} className="btn-primary">
            SIGN IN
          </Button>
        </div>
      </div>
      <div className="lower-section">
        <div>
        <div className="first">
          <div></div>
          <h4>
            “Good writing is supposed to evoke sensation in the reader – not the
            fact that it is raining, but the feeling of being rained upon.”
            <h3>E.L Doctorow</h3>
          </h4>
        </div>
        <div className="first right-section">
          <h4>
            “There is no greater agony than bearing an untold story inside you.”
            <h3>Maya Angelou</h3>
          </h4>
          <div></div>
        </div>
      </div>
      <div className="sign-in">
        <h3>Create an account now and join the community</h3>
        <Button className="btn-primary" onClick={handleClick}>CREATE AN ACCOUNT</Button>
      </div>
      </div>

    </div>
  );
}

export default Home;
