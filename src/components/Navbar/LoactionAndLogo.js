import React, { useEffect, useState } from "react";
import amazonLogo from './amazonimage.jpg';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { setCurrentUser } from "../../slices/authSlice";

function LocationAndLogo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp < currentTime) {
          console.log("Token has expired.");
          localStorage.removeItem("accessToken");
          dispatch(setCurrentUser(null));
        } else {
          dispatch(setCurrentUser(decoded));
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("accessToken");
        dispatch(setCurrentUser(null));
      }
    } else {
      dispatch(setCurrentUser(null)); 
    }

    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Link to="/">
        <img
          src={amazonLogo}
          alt="Amazon Logo"
          className="h-10 mr-2.5"
        />
      </Link>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">
          Deliver to {user?.username || "Guest User"}
        </span>
        <strong className="text-sm text-white">Rampur 244901</strong>
      </div>
    </div>
  );
}

export default LocationAndLogo;
