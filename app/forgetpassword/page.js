"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password request for:", email);

    // Later you can connect with backend:
    // await fetch("/api/forgot-password", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen !text-black bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
          <p className="text-gray-600 text-center text-sm">
            Enter your registered email address. We’ll send you a link to reset
            your password.
          </p>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
