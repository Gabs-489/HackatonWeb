// components/navigation/Footer.tsx
import React from "react";


const FooterPunto6 = () => {
  
  return (
    <footer data-testid="main-footer" className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex justify-between items-center w-full">
          <span className="text-xl font-bold">Built By Adult Basit</span>
          <div className="flex space-x-4">
            <span className="text-xl font-bold">About Us | Contact Us</span>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default FooterPunto6;
