import { useState } from "react";
import "../styles/login.css"
function Login() {
  return (
    <>
      <main className="flex justify-center items-center text-center h-screen w-full">
        <form autoComplete="off">
          <div className="h-95 w-100 flex flex-col rounded-4xl text-center items-center justify-center shadow-2xl bg-gray-400 gap-12">
            <h2 className="font-medium text-4xl">Sign in</h2>
            <div className="items-center rounded-2xl shadow-2xl bg-white flex justify-center gap-2 ">
              <i className="fa-solid fa-envelope-open text-2xl ml-3 "></i>
              <input
                id="email"
                autoComplete="off"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="h-11 w-65 border-none outline-none text-2xl placeholder:"
              />
            </div>
            <div className="Password" id="user-up">
              <i className="fa-solid fa-lock"></i>
              <input
                id="password"
                autoComplete="off"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="create_button">
              <button type="submit" id="btn">
                Sign in
              </button>
            </div>
            <p>
              Don't have an account? <a href="./sign_up.html">Sign up</a>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;
