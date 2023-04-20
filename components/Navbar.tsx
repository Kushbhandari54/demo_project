import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-end bg-black">
      <ul className=" rounded-lg inline-flex text-white   gap-2 ">
        <li>
          <Link href="/" className=" hover:text-red-800   p-4 block ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="p-4 block ">
            About
          </Link>
        </li>
        <li>
          <Link href="/careers" className="p-4 block ">
            Careers
          </Link>
        </li>
        <li>
          <Link href="/blog" className="p-4 block">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/login" className="p-4 block ">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
