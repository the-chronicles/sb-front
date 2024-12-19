"use client"

import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Search, Shield, Clock,  } from 'lucide-react';
// import LandingNav from '../components/landing/LandingNav';
// import PrototypePopup from '../components/PrototypePopup';

export default function LandingPage() {
//   const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [companyEmail, setCompanyEmail] = useState('');
//   const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

//   const handleCustomerSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Customer subscription:', { customerName, customerEmail });
//     setCustomerName('');
//     setCustomerEmail('');
//   };

//   const handleCompanySubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Company registration:', { companyName, companyEmail });
//     setCompanyName('');
//     setCompanyEmail('');
//   };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <PrototypePopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      /> */}

      {/* Rest of the LandingPage component remains the same */}
      <div className="relative">
        <div className="absolute inset-0">
          {/* <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2070&q=80"
            alt="Vacuum Excavator"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        </div>

        {/* <LandingNav /> */}

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 pt-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simplifying Vacuum Excavator Rentals
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl">
            Fast, simple, and sustainable equipment matching for urgent projects. 
            Find the right vacuum excavator near you, verified and ready to work.
          </p>
          <button
            onClick={() => navigate('/app')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Visit the App
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Vac Ex Dispatch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">Find the perfect equipment based on your location and requirements</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Urgent Response</h3>
              <p className="text-gray-600">Quick booking process for time-critical projects</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Partners</h3>
              <p className="text-gray-600">All equipment providers are thoroughly vetted for quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains unchanged */}
    </div>
  );
}