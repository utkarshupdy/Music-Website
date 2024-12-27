import FeaturedCourses from "@/components/FeaturedCourses";
import MainSection from "@/components/MainSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Tara aur Tarini</h1> */}
      <MainSection/>
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
