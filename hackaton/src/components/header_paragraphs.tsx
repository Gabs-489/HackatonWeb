import React from 'react';
import { Twitter, Linkedin, Newspaper } from "lucide-react";


const HeaderPunto6 = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* We use Link for the link to the home page */}
          <span className="text-xl font-bold">Text Analyser</span>
          <Newspaper className="w-6 h-6 hover:text-gray-800 transition-colors" />
          <Twitter className="w-6 h-6 hover:text-blue-500 transition-colors" />
          <Linkedin className="w-6 h-6 hover:text-blue-700 transition-colors" />

      </div>
    </header>
  );
};

export default HeaderPunto6;