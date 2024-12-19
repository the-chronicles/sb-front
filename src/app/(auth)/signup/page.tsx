"use client";

import { PersonStanding, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Signup() {
  const [selectedRole, setSelectedRole] = useState(""); 
  const router = useRouter(); 

  interface RoleSelectHandler {
    (role: string): void;
  }

  const handleRoleSelect: RoleSelectHandler = (role) => {
    setSelectedRole(role);
  };

  const handleCreateAccount = () => {
    if (selectedRole) {
      router.push(`/signup-form?role=${selectedRole}`); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-gray-50 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Join as a Customer or Supplier
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div
          onClick={() => handleRoleSelect("customer")}
          className={`cursor-pointer border-2 hover:border-blue-500 rounded-lg px-11 py-11 text-center ${
            selectedRole === "customer" ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <span className="text-4xl mb-2 inline-block">
            <PersonStanding />
          </span>
          <p className="font-semibold text-lg">I’m a Customer</p>
        </div>

        <div
          onClick={() => handleRoleSelect("supplier")}
          className={`cursor-pointer border-2 hover:border-blue-500 rounded-lg px-11 py-11 text-center ${
            selectedRole === "supplier" ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <span className="text-4xl mb-2 inline-block">
            <Truck />
          </span>
          <p className="font-semibold text-lg">I’m a Supplier</p>
        </div>
      </div>

     
      <button
        onClick={handleCreateAccount}
        disabled={!selectedRole}
        className={`w-full md:w-64 py-2 rounded-lg text-white font-semibold ${
          selectedRole
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Create Account
      </button>

     
      <p className="mt-4 text-sm text-gray-700">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 font-medium hover:underline">
          Log In
        </a>
      </p>
    </div>
  );
}
