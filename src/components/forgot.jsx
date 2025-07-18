import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this email to your backend for OTP or password reset logic
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          🔐 Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to receive a reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm text-gray-600">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-4">
          Remember your password? <Link to="/"><a href="/login" className="text-blue-600">Login</a></Link>
        </p>
      </div>
    </div>
  );
}
