import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import MainSection from "@/components/MainSection";
import TestimonialCrads from "@/components/TestimonialCrads";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <MainSection />
      <section id="featured-courses">
        <FeaturedCourses />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="testimonials">
        <TestimonialCrads />
      </section>
      <section id="upcoming-webinars">
        <UpcommingWebinar />
      </section>
      <section id="instructors">
        <Instructors />
      </section>
      <Footer />
    </main>
  );
}
