import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {jwtDecode} from "jwt-decode"; 
import { setCurrentUser } from "../slices/authSlice";

function ProfilePage() {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-20 bg-white shadow-lg rounded-lg">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.username || "Guest User"}
            </h2>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="text-gray-600">
              {user?.username || "Not Available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
