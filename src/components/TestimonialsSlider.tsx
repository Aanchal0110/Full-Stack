'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "/girl.jpeg",
    quote: "The Fullstack Dev Hub has been an invaluable resource in my development journey. The comprehensive tutorials and real-world examples helped me land my dream job!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Backend Engineer",
    company: "InnovateTech",
    image: "/man.png",
    quote: "As someone transitioning from a different career, the structured learning path and practical projects made it easy to understand complex concepts."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Full Stack Developer",
    company: "StartupX",
    image: "/girl.jpeg",
    quote: "The community support and mentorship opportunities are unmatched. I've grown both technically and professionally through this platform."
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Senior Developer",
    company: "Enterprise Solutions",
    image: "/man.png",
    quote: "The quality of content and the depth of knowledge shared is exceptional. It's like having a senior developer mentor you through every step."
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "DevOps Engineer",
    company: "CloudTech",
    image: "/girl.jpeg",
    quote: "The platform's focus on modern technologies and best practices helped me stay current in this fast-evolving industry."
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Mobile Developer",
    company: "AppWorks",
    image: "/man.png",
    quote: "The hands-on projects and code reviews provided practical experience that directly translated to my professional work."
  }
];

export default function TestimonialsSlider() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Our Community Says
        </h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 