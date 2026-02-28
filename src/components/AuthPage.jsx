import { useState } from "react";
import "../styles/AuthPage.css";
import logo from "../assets/durgalogo.png";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="auth-page">
      <div className="auth-shell container">
        <aside className="auth-left">
          <img src={logo} alt="Durga Logo" className="auth-logo" loading="lazy" />
          <h1>Build Better Projects With Better Access</h1>
          <p>
            Sign in to manage your consultations, project documents, and
            redevelopment updates in one secure dashboard.
          </p>
        </aside>

        <div className="auth-card">
          <div className="auth-tabs">
            <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
              Login
            </button>

            <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
              Sign Up
            </button>
          </div>

          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

          <p className="auth-subtitle">
            {isLogin
              ? "Login to continue with Durga Construction"
              : "Join Durga Construction today"}
          </p>

          <form className="auth-form">
            {!isLogin && <input type="text" placeholder="Full Name" required />}

            <input type="email" placeholder="Email Address" required />

            <input type="password" placeholder="Password" required />

            {!isLogin && <input type="password" placeholder="Confirm Password" required />}

            {isLogin && (
              <div className="auth-extra">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="auth-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="auth-footer">
            {isLogin ? (
              <>
                Don&apos;t have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
