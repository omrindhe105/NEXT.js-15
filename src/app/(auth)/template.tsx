"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navlink = [
  { name: "Login", href: "/login" },
  { name: "Forgot-Password", href: "/forgot-password" },
  { name: "Register", href: "/register" },
];

export default function NavLinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} 
      className=" border p-2 mb-2"  placeholder="input"/>

      {navlink.map((link) => {
        const isactive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            href={link.href}
            key={link.name}
            className={isactive ? "text-red-500" : "text-blue-500 p-2"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
