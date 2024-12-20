"use client";

// import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Suspense } from "react";
import axios from "axios";

function SignupFormContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "customer";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://sb-back.onrender.com/api/auth/signup", {
        ...formData,
        role,
      });

      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      window.location.href = "/";
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "An error occurred during signup.";
      alert(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-50 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Sign Up as {role === "supplier" ? "Supplier" : "Customer"}
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        {role === "supplier" && (
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg  border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 mt-7 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default function SignupForm() {
  return (
    <Suspense>
      <SignupFormContent />
    </Suspense>
  );
}
