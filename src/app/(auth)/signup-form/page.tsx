"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

export default function SignupForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role"); 

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
    const response = await axios.post("http://localhost:5000/api/auth/signup", {
      ...formData,
      role, 
    });

    console.log("Signup successful:", response.data);
    alert("Signup successful!");

    window.location.href = "/";
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Signup failed:", error.response?.data || error.message);
    } else {
      console.error("Signup failed:", (error as Error).message);
    }
    const errorMessage = axios.isAxiosError(error) ? error.response?.data?.message : "An error occurred during signup.";
    alert(errorMessage);
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-50 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Sign Up as {role === "supplier" ? "Supplier" : "Customer"}
      </h1>

      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md "
      >
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

        
        <div className="text-center my-4 text-black">OR</div>

        
        <button
          type="button"
          className="w-full py-2 border border-black rounded-lg text-black hover:bg-gray-100 flex items-center justify-center"
        >
            {/* <Image src='/assets/images/g.svg' width={300} height={40} alt="g" className="" /> */}
          <span className="mr-2">
            <Image src='/assets/images/gg.png' alt="g" width={30} height={30} className="w-fit"/>
            </span> Sign Up with Google
        </button>
      </form>
    </div>
  );
}
