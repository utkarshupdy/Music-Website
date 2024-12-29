'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import data from "../data/webinar.json"

function UpcomingWebinars() {

  const featuredWebinars = data.webinars.filter((webinar)=> webinar.isFeatured)
  // const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Development Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/webinar"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars