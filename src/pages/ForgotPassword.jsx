import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Forgot Password</h2>

      <input
        type="tel"
        placeholder="Enter Mobile Number"
        className="p-2 border rounded w-full max-w-sm mb-4"
      />

      <button className="bg-pink-600 text-white px-6 py-2 rounded w-full max-w-sm font-semibold">
        Submit
      </button>

      <button
        onClick={() => navigate("/login")}
        className="mt-4 text-blue-600 underline text-sm"
      >
        Login with Password
      </button>
    </div>
  );
}
