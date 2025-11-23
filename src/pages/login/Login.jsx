import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { API_URL, ROUTES } from "../../routes/apiRoutes";

export default function LoginModern() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}${ROUTES.LOGIN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Atualize de acordo com o formato do seu backend
        login(data.user_token || data.token, data.user);
      } else {
        alert(data.error || "Email ou senha inválidos");
      }
    } catch (err) {
      alert("Erro de rede: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Lado imagem */}
      <div className="hidden md:flex w-1/2 h-screen">
        <img
          src="https://media.istockphoto.com/id/1347150429/pt/foto/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=1024x1024&w=is&k=20&c=Z0avjRsxDER0Mj7qJGGMMz1SpHZTjKa3nA3iwS6vzUk="
          alt="Mecânico trabalhando"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lado formulário */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50">
        <div className="bg-white p-12 rounded-r-3xl shadow-2xl w-full max-w-md space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center">
            Bem-vindo de volta
          </h2>
          <p className="text-gray-500 text-center">Faça login na sua conta</p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-700 font-medium">Senha</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transform transition"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-gray-400">
            Ainda não tem conta?{" "}
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
