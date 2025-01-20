import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      dispatch(setCurrentUser({ username }));

      localStorage.setItem("token", response.data.token);

      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error.response?.data?.message || error.message);
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[350px] bg-white p-6 shadow-md rounded">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-24 mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email or mobile phone number
            </label>
            <input
              type="text"
              placeholder="Enter your email or mobile"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Link
              to="/"
              className="text-sm text-blue-600 hover:underline float-right"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-sm font-medium py-2 rounded"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          New to Amazon?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            I am a new customer
          </Link>
        </p>
        <p className="text-xs text-gray-600 mt-6 text-center">
          By signing in, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Notice
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
