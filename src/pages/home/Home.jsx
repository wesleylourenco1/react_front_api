import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Home() {
  const { userData, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo, {userData?.name}</h1>
        <p className="text-gray-600 mb-6">{userData?.email}</p>
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default Home;