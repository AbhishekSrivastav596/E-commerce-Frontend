import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfilePage() {
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Your Account</h1>
         
        </div>
        <div className="flex items-center mb-6">
         
          <div className="ml-6">
            <h2 className="text-xl font-semibold">{user?.username || "User"}</h2>
            
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Your Information</h3>
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Name:</span>
            <span>{user}</span>
          </div>
        </div>
</div>
</div>
  );
}

export default ProfilePage;
