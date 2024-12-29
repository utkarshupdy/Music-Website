"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center max-w-2xl mx-auto p-4">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#featured-courses">Featured Courses</HoveredLink>
              <HoveredLink href="/courses">All Courses</HoveredLink>
            </div>
          </MenuItem>
          <Link href="#testimonials">
            <MenuItem setActive={setActive} active={active} item="Testimonials" />
          </Link>
          <Link href="#why-choose-us">
            <MenuItem setActive={setActive} active={active} item="Why Choose Us" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Webinars">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#upcoming-webinars">Featured Webinars</HoveredLink>
              <HoveredLink href="/webinar">All Webinars</HoveredLink>
            </div>
          </MenuItem>
          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-black-50 shadow-lg">
        <div className="text-xl font-bold"></div>
        <button
          className="text-gray-600 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {/* Hamburger Menu */}
          <div className="space-y-2">
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
          </div>
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 flex justify-end">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="#featured-courses">Featured Courses</HoveredLink>
              <HoveredLink href="/courses">All Courses</HoveredLink>
            </div>
          </MenuItem>
          <Link href="#testimonials">
            <MenuItem setActive={setActive} active={active} item="Testimonials" />
          </Link>
          <Link href="#why-choose-us">
            <MenuItem setActive={setActive} active={active} item="Why Choose Us" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Webinars">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink href="#upcoming-webinars">Featured Webinars</HoveredLink>
              <HoveredLink href="/webinar">All Webinars</HoveredLink>
            </div>
          </MenuItem>
          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
