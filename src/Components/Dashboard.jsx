// DashboardPage.jsx
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const DashboardPage = () => {
  const { email , logout } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
        {email ? (
          <div>
            <p>You are logged in as: {email}</p>
            <button
              onClick={logout}
              className="mt-4 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
