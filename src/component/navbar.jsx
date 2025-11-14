"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const listNav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "product",
      link: "/product",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Regester",
      link: "/regester",
    },
    {
      name: "Todo",
      link: "/todos",
    },
    {
      name: "Todo Server",
      link: "/todos/todoserver",
    },
    {
      name: "Add Todo",
      link: "/todos/addtodos",
    },
    {
      name: "Add Todo Server",
      link: "/todos/addtodos/addtodoserver",
    },
  ];

  const path = usePathname();

  return (
    <div className="bg-amber-100 flex justify-around px-10 items-center py-3 ">
      <h2 className="text-2xl font-bold text-rose-700">Navbar</h2>
      <ul className="flex list-none  text-green-600 text-md gap-7 items-center">
        {listNav.map((item, index) => (
          <li className={path === item.link ? "text-red-500" : ""} key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
