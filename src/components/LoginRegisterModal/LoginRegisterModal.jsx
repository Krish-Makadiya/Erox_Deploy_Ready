import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginRegisterModal.css";
import IconInputBar from "../IconInputBar/IconInputBar";

const LoginRegisterModal = ({ toggleModal }) => {
   const [isLogin, setIsLogin] = useState(true);

   const toggleLoginRegister = () => {
      setIsLogin(!isLogin);
   };

   return (
      <div className="modal-overlay" onClick={toggleModal}>
         <div id="login-register-modal" onClick={(e) => e.stopPropagation()}>
            <img
               src={isLogin ? assets.login_image : assets.register_image}
               alt=""
            />
            <div id="login-register-form">
               <h1>{isLogin ? "LOGIN" : "REGISTER"}</h1>
               {!isLogin && (
                  <IconInputBar
                     type={"text"}
                     placeholder={"Enter your name"}
                     icon={assets.user_icon}
                  />
               )}
               <IconInputBar
                  type={"email"}
                  placeholder={"Enter your email address"}
                  icon={assets.email_icon}
               />
               <IconInputBar
                  type={"password"}
                  placeholder={"Enter your password"}
                  icon={assets.password_hide_icon}
                  toggleIcon={assets.password_hide_icon}
               />
               {isLogin && <p>Forgot password ?</p>}
               <button>{isLogin ? "LOGIN" : "REGISTER"}</button>
            </div>

            <div id="login-register-footer">
               <div className="login-register-divider">
                  <div> </div>
                  <span>OR</span>
                  <div> </div>
               </div>
               <button>
                  <img src={assets.google_logo} alt="" />
                  Sign in with Google
               </button>
               <p onClick={toggleLoginRegister}>
                  {isLogin ? "Create an account?" : "Already registerd?"}{" "}
                  <span>{isLogin ? "Sign up" : "Login"}</span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default LoginRegisterModal;
