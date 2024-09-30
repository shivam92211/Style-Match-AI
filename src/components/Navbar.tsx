'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between shadow-xl max-container padding-container relative z-30 py-2 px-6 bg-pastel-blue">
      {/* Logo and Brand Name */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo.webp"
          alt="Style Match AI Logo" 
          width={40} // Adjust width as needed
          height={40} // Adjust height as needed
          className="mr-2"
        />
        <h1 className="text-2xl font-bold text-soft-pink">
          StyleMatch AI
        </h1>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-lg text-soft-pink">
        <li>
          <Link href="/" className="hover:text-mint">Home</Link>
        </li>
        <li>
          <Link href="/color" className="hover:text-mint">Color</Link>
        </li>
        <li>
          <Link href="/match-up" className="hover:text-mint">Match-Up</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-mint">About</Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="lg:hidden cursor-pointer">
        {menuOpen ? <AiOutlineClose size={25} className="text-soft-pink" /> : <AiOutlineMenu size={25} className="text-soft-pink" />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] h-full bg-pastelBlue p-10 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
      >
        <div className="flex justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-soft-pink" />
          </div>
        </div>

        <ul className="mt-8 space-y-6 text-lg text-soft-pink">
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/color">Color</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/match-up">Match-up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
