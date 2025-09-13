"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    // phone: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    // You can later send this data to your backend using fetch or axios
    // Example:
    // await fetch("/api/signup", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 !text-black">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* Name */}
          {/* <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
        </div> */}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              User name / Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone */}
          {/* <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="03XXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
        </div> */}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <Link href="/forgetpassword">
            <div className="my-2 ">
              <span className="text-blue-500 text-sm font-medium cursor-pointer ">
                Forget Password
              </span>
            </div>
          </Link>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
