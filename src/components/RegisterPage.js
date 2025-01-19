import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailAgain, setEmailAgain] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (email !== emailAgain) {
      alert("Emails do not match!");
      return;
    }

    if (password !== passwordAgain) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username: name,
        email,
        password,
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 201) {
        alert("Account created successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error.response.data.message);
      alert("Error creating account. Please try again.");
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
        <h2 className="text-xl font-semibold mb-4 text-center">Create account</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email again</label>
            <input
              type="email"
              placeholder="Re-enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={emailAgain}
              onChange={(e) => setEmailAgain(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="At least 6 characters"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password again</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              required
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-sm font-medium py-2 rounded"
          >
            Create your Amazon account
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
