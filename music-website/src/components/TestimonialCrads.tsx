'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    "quote": "This course platform transformed my career. The instructors are knowledgeable and engaging.",
    "name": "Alex Johnson",
    "title": "Software Developer"
  },
  {
    "quote": "I never thought online learning could be this effective. Highly recommend it!",
    "name": "Sophia Miller",
    "title": "Digital Marketer"
  },
  {
    "quote": "The practical approach in the courses made complex topics easy to understand.",
    "name": "Ethan Brown",
    "title": "Data Analyst"
  },
  {
    "quote": "Affordable and high-quality courses! I gained a lot of confidence in my field.",
    "name": "Olivia Smith",
    "title": "Graphic Designer"
  },
  {
    "quote": "The best platform to upskill while working a full-time job. Thank you for the flexibility!",
    "name": "Liam Wilson",
    "title": "Project Manager"
  },
  {
    "quote": "The instructors here are industry experts who know how to teach effectively.",
    "name": "Emily Davis",
    "title": "Content Creator"
  },
  {
    "quote": "I completed a coding bootcamp here, and it helped me land my first job in tech.",
    "name": "Noah Thompson",
    "title": "Junior Developer"
  },
  {
    "quote": "This platform offers a fantastic learning experience. I can't wait to take another course!",
    "name": "Isabella Garcia",
    "title": "Entrepreneur"
  },
  {
    "quote": "Courses are structured in a way that makes even tough subjects enjoyable to learn.",
    "name": "Mason White",
    "title": "Marketing Specialist"
  },
  {
    "quote": "I appreciated the hands-on assignments. They gave me a chance to apply what I learned.",
    "name": "Ava Martinez",
    "title": "Photographer"
  },
  {
    "quote": "Amazing platform! The community forums were a bonus for clarifying doubts.",
    "name": "Lucas Lee",
    "title": "Business Consultant"
  },
  {
    "quote": "The mobile app development course was a game changer for me. Highly recommended.",
    "name": "Mia Perez",
    "title": "App Developer"
  },
  {
    "quote": "Exceptional instructors and top-notch materials. Worth every penny.",
    "name": "Ethan Clark",
    "title": "Financial Analyst"
  },
  {
    "quote": "I loved how interactive the webinars were. They added so much value to my learning.",
    "name": "Charlotte Adams",
    "title": "Freelancer"
  },
  {
    "quote": "The leadership course was fantastic. I now feel more prepared to manage my team.",
    "name": "Henry King",
    "title": "Team Leader"
  }
]
;

function MusicSchoolTestimonials() {
  return (
    <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials