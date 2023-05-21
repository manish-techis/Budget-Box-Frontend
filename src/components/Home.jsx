import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import image from "../Assets/image.png";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <div className="left">
          <h1>Sign up and Manage your Budget</h1>
          <p>
            Note down your expenditure and income,<br />then check your balance
            everyday
          </p>
          <form>
            <label htmlFor="email">Email address</label>
            <br />
            <input type="text" placeholder="Type Your Email" id="email" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder="Type Password" id="password" />
            <br />
            <input
              type="password"
              placeholder="Re-type Password"
              id="password"
            />
            <br />
            <br />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
            <img src={image} alt="budget"  className="image"/>     
      </div>
    </div>
    </div>
  );
};

export default Home;
