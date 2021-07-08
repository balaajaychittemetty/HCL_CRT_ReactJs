import React from "react";
import "../App.css";

class login extends React.Component {
  render() {
    return (
      <div>
        <div class="hero">
          <div class="form-box">
            <div class="button-box">
              <div id="btn"></div>
              <button type="button" class="toggle-btn" onclick="login()">
                Log In
              </button>
              <button type="button" class="toggle-btn" onclick="register()">
                Sign Up
              </button>
            </div>
            <div class="social-icons">
              <img src="../../images/fb.png" alt="..." />
              <img src="../../images/tw.png" alt="..." />
              <img src="../../images/gp.png" alt="..." />
            </div>
            <form id="login" class="input-group">
              <input
                type="text"
                class="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Enter Password"
                required
              />
              <input type="checkbox" class="check-box" />
              <span>Remember Password</span>
              <button type="submit" class="submit-btn">
                Log in
              </button>
            </form>
            <form id="register" class="input-group">
              <input
                type="text"
                class="input-field"
                placeholder="User Id"
                required
              />
              <input
                type="email"
                class="input-field"
                placeholder="Email Id"
                required
              />
              <input
                type="password"
                class="input-field"
                placeholder="Enter Password"
                required
              />
              <input type="checkbox" class="check-box" />
              <span>I agree to the terms & conditions</span>
              <button type="submit" class="submit-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
