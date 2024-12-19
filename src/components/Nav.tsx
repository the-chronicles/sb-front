import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
       
          <Image
            src="https://media.licdn.com/dms/image/v2/D4E22AQGMyRYRNeyA2Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1726384743583?e=1735776000&v=beta&t=GEJFTSwywOXfEHobqerNXJEgtj4HZu8J_wzvm1rw4DI"
            alt="Vac Ex Dispatch"
            className="h-12 w-auto max-w-[280px] object-contain"
            width={500}
            height={500}
          />

       
          <div className="relative">
           
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-white text-black  border-1 border-black transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

         
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/login"
                      className="block text-gray-800 p-2 rounded hover:bg-gray-100 transition"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/signup"
                      className="block text-gray-800 p-2 rounded hover:bg-gray-100 transition"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
