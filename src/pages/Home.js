import React, { useState } from "react";
import "./Home.css";
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {login} from '../features/userSlice'
import {useHistory} from 'react-router-dom';



function Home() {
  const [toggle, setToggle] = useState(false);
  const history=useHistory();
  const {register,watch,errors,handleSubmit} =useForm();
  const dispatch=useDispatch();

  const OnSubmit =(formData)=>{
     dispatch(login(formData));
     history.push("/project1")
  }
  return (
    <div>
      <div className="home">
        <div
          className={`container ${toggle ? "right-panel-active" : " "}`}
          id="container"
        >
          {/* container having my sign up form */}
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit(OnSubmit)}>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="/" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="/" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use email for registration</span>
              <input type="text" placeholder="name" name="name" ref={register({required:true})}/>
              {errors.name&&(<h6 className="error">enter name</h6>)}
              <input type="email" placeholder="email" name="email" ref={register({required:true})}/>
              {errors.email&&(<h6 className="error">enter email</h6>)}

              <input type="text" placeholder="username" name="username"  ref={register({required:true})} />
              {errors.username&&(<h6 className="error">enter username</h6>)}

              <input type="password" placeholder="password" name="password" ref={register({required:true,pattern:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/})} />
              {errors.password&&(<h6 className="error">password must contain capital and small letters,numbers and a special character </h6>)}

              <button type="submit" >Sign Up</button>
            </form>
          </div>
         
         
          {/* container having my sign in form*/}
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign In</h1>
              <h3>(Not Working)</h3>
              <div className="social-container">
                <a href="/" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="/" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="email" name="email" />
              <input type="password" placeholder="password" name="password" />
              <button type="button">Sign In</button>
            </form>
          </div>


{/* overlay that keeps on moving on both the containers */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>WELCOME BACK!</h1>
                <p>
                  Sign in option is under development
                </p>
                <button className="ghost" id="signIn" onClick={()=>setToggle(false)}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello,Friend!</h1>
                <p>Enter your personal details to see my work </p>
                <button className="ghost" id="signUp" onClick={()=>setToggle(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
