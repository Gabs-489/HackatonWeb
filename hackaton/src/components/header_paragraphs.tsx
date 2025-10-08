import React from 'react';
import { Twitter, Linkedin, Newspaper } from "lucide-react";


const HeaderPunto6 = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex justify-between items-center w-full">
          <span className="text-xl font-bold">Text Analyser</span>
          <div className="flex space-x-4">
            <Newspaper className="w-6 h-6 hover:text-gray-300 transition-colors" />
            <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </div>
        </nav>
      </div>
    </header>

  );
};

export default HeaderPunto6;