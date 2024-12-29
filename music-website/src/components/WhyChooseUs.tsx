
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    "title": "Comprehensive Course Library",
    "description": "Access a wide range of expertly designed courses tailored to your career goals."
  },
  {
    "title": "Experienced Instructors",
    "description": "Learn from industry experts with years of professional experience."
  },
  {
    "title": "Affordable Pricing",
    "description": "High-quality courses at prices that won't break the bank."
  },
  {
    "title": "Interactive Learning",
    "description": "Engage with peers and instructors through forums, quizzes, and projects."
  },
  {
    "title": "Flexible Schedules",
    "description": "Learn at your own pace with self-paced and live classes available."
  },
  {
    "title": "Global Community",
    "description": "Join a vibrant community of learners from around the world."
  },
  {
    "title": "Lifetime Access",
    "description": "Enjoy unlimited access to your purchased courses forever."
  },
  {
    "title": "Certification Programs",
    "description": "Earn industry-recognized certificates to boost your resume."
  },
  {
    "title": "Real-World Projects",
    "description": "Work on practical projects that simulate real-world scenarios."
  },
  {
    "title": "24/7 Support",
    "description": "Receive assistance anytime with our dedicated support team."
  },
  {
    "title": "Mobile-Friendly Platform",
    "description": "Learn on the go with our fully mobile-responsive platform."
  },
  {
    "title": "Frequent Updates",
    "description": "Stay up-to-date with regularly updated course content."
  },
  {
    "title": "Career Guidance",
    "description": "Receive career tips and guidance from experienced mentors."
  },
  {
    "title": "Community Webinars",
    "description": "Participate in live webinars hosted by experts across domains."
  },
  {
    "title": "Gamified Learning",
    "description": "Earn rewards and badges to keep your learning journey exciting."
  }
];



function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs