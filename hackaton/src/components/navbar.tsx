"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
          
                    <ul className="hidden md:flex gap-2 ml-4">
                        <li><Link href="/punto1" className="hover:text-gray-400 transition-colors">Reto 1</Link></li>
                        <li><Link href="/punto2" className="hover:text-gray-400 transition-colors">Reto 2</Link></li>
                        <li><Link href="/punto3" className="hover:text-gray-400 transition-colors">Reto 3</Link></li>
                        <li><Link href="/punto4" className="hover:text-gray-400 transition-colors">Reto 4</Link></li>
                        <li><Link href="/punto5" className="hover:text-gray-400 transition-colors">Reto 5</Link></li>
                        <li><Link href="/punto6" className="hover:text-gray-400 transition-colors">Reto 6</Link></li>
                        <li><Link href="/punto7" className="hover:text-gray-400 transition-colors">Reto 7</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;