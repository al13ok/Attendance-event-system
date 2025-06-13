import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // ✅ correct import (not curly brackets)

export default function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!mobile.trim() || !password.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    toast.success("Login successful");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-400 px-4">
      <img src="/logo.png" alt="logo" className="mb-4 w-24" />
      <h2 className="text-white text-lg font-semibold mb-2 text-center">
        Welcome to <span className="font-bold">Skoodos Events</span><br />
        <span className="text-white">Check In App!</span>
      </h2>

      <input
        type="tel"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="p-2 border rounded w-full max-w-xs mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded w-full max-w-xs mb-4"
        required
      />

      <p
        onClick={() => navigate("/forgot-password")}
        className="text-yellow-300 text-sm mb-4 cursor-pointer underline"
      >
        Forgot Password?
      </p>

      <button
        onClick={handleLogin}
        className="bg-pink-600 text-white px-6 py-2 rounded font-semibold mb-6 hover:bg-pink-700 transition"
      >
        Login
      </button>

      <img src="/hands.png" alt="painted hands" className="w-full max-w-md mt-4" />
    </div>
  );
}
