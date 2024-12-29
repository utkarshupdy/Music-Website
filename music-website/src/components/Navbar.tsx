'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
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
            <HoveredLink href="#upcoming-webinars">FeaturedWebinars</HoveredLink>
            <HoveredLink href="/webinar">All Webinars</HoveredLink>
          </div>
        </MenuItem>
        <Link href= '/contact'>
        <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
