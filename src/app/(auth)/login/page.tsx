"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://sb-back.onrender.com/api/auth/login", {
        email,
        password,
      });
  
      console.log("Login successful:", response.data);
      alert("Login successful!");
  
      
      localStorage.setItem("authToken", response.data.token);
  
      
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login failed:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Invalid email or password.");
      } else {
        console.error("Login failed:", (error as Error).message);
        alert("Invalid email or password.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center text-black min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md  p-6 ">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

       
        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

         
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>

          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-full bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-px w-full bg-gray-300"></div>
          </div>

         
          <button
            type="button"
            className="w-full py-2 border border-black rounded-lg text-black hover:bg-gray-100 flex items-center justify-center"
          >
            {" "}
            <Image
              src="/assets/images/gg.png"
              alt="g"
              width={30}
              height={30}
              className="w-fit"
            />
            <span>Continue with Google</span>
          </button>
        </form>

       
        <p className="text-center text-gray-700 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-500 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
