import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import MainSection from "@/components/MainSection";
import TestimonialCrads from "@/components/TestimonialCrads";
import UpcommingWebinar from "@/components/UpcommingWebinar";
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
      <TestimonialCrads />
      <UpcommingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
