"use client";

import ThemeToggle from "@/components/theme-toggle"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems= [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/projects",
    name: "Projects"
  },
  {
    path: "/resume",
    name: "Resume"
  },
  {
    path: "/blog",
    name: "Blog"
  },
  {
    path: "/shop",
    name: "Shop"
  }
]

const Header = () => {

  return (
    <div className="flex justify-center space-x-7">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/shop">Shop</Link>
      <ThemeToggle />
    </div>
  );
}

export default Header;
