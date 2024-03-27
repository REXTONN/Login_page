import React, { useCallback, useContext, useState } from "react";
import axios from "axios";
import photo from "../img/Rectangle 1.jpg";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Login = () => {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  // const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      });

      console.log(response.data); // Handle the response data as needed
      login(email);
      navigate("/dashboard");


    } catch (error) {
      setError("Invalid email or password");
    }
  },[password,login,navigate])


  return (
    <section className="flex flex-col md:flex-row h-screen items-center gap-20">
      <div className="bg-white hidden lg:block w-full md:w-1/3 xl:w-2/3 h-screen ">
        <img src={photo} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-center h-full  bg-white">
        <div className="bg-white p-8 rounded-lg shadow-md  w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <p className="text-gray-600 text-center mb-6">
            Login your account in a seconds
          </p>
          <form onSubmit={handleLogin}>
            {error && (
              <div className="text-red-500 mb-4 text-center">{error}</div>
            )}
            <div className="mb-4">
              <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address/Username"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  // checked={keepLoggedIn}
                  // onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Keep me logged in
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forget password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mb-4"
            >
              Log in
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
