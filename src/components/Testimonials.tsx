'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Lina Maryana',
    role: 'Marketing Manager',
    message:
      'Telur Cerdas membuat anak saya lebih fokus belajar! Rasanya juga segar dan gurih. Sekarang setiap sarapan wajib Telur Cerdas!',
    image: '/images/testimonial-1.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priskila',
    role: 'Owner Kafe Sehat',
    message:
      'Kualitas Telur Cerdas luar biasa! Kuningnya cerah, dan teksturnya padat. Cocok untuk semua menu sehat di kafe saya.',
    image: '/images/testimonial-2.jpeg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dewi Kartika',
    role: 'Guru TK',
    message:
      'Anak-anak jadi lebih aktif, ceria, dan cepat belajar. Terima kasih Telur Cerdas, produk lokal dengan kualitas premium!',
    image: '/images/testimonial-3.png',
    rating: 4,
  },
  {
    id: 4,
    name: 'Dr. Fernando',
    role: 'Dokter Anak',
    message:
      'Saya tidak pernah absen stok Telur Cerdas di rumah. Anak-anak suka, dan saya tenang dengan kandungan nutrisinya.',
    image: '/images/testimonial-4.png',
    rating: 5,
  },
];

function renderStars(rating: number) {
  return (
    <div className='mt-2 flex justify-center'>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Helper: ambil 3 item berurutan (wrap around)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(index + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className='from-#fff7ef overflow-hidden bg-gradient-to-t to-white py-16 text-center'>
      <div className='mx-auto max-w-7xl px-8'>
        <h2 className='text-primary mb-12 text-3xl font-bold'>
          Apa Kata Mereka?
        </h2>

        {/* ✅ Desktop carousel (3 visible, slide animation) */}
        <div className='relative hidden md:block'>
          <div className='overflow-hidden px-8'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 gap-8 md:grid-cols-3'
              >
                {getVisibleTestimonials().map((t) => (
                  <div
                    key={t.id}
                    className='rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl'
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={100}
                      height={100}
                      className='mx-auto mb-4 h-20 w-20 rounded-full object-cover shadow'
                    />
                    <p className='mb-4 text-gray-600 italic'>“{t.message}”</p>
                    <h4 className='text-primary font-semibold'>{t.name}</h4>
                    <p className='text-sm text-gray-500'>{t.role}</p>
                    {renderStars(t.rating)}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop navigation buttons */}
          <div className='absolute inset-0 -mx-10 flex items-center justify-between px-6'>
            <button
              onClick={prevTestimonial}
              className='text-primary rounded-full bg-orange-200 p-2 opacity-70 shadow-md transition hover:cursor-pointer hover:bg-orange-300'
            >
              <ChevronLeftIcon className='h-6 w-6' />
            </button>
            <button
              onClick={nextTestimonial}
              className='text-primary rounded-full bg-orange-200 p-2 opacity-70 shadow-md transition hover:cursor-pointer hover:bg-orange-300'
            >
              <ChevronRightIcon className='h-6 w-6' />
            </button>
          </div>
        </div>

        {/* ✅ Mobile carousel (1 visible, same animation) */}
        <div className='relative mx-auto w-full max-w-xs md:hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className='rounded-lg bg-white p-6 shadow-lg'
            >
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={100}
                height={100}
                className='mx-auto mb-4 h-20 w-20 rounded-full object-cover shadow'
              />
              <p className='mb-4 text-gray-600 italic'>
                “{testimonials[index].message}”
              </p>
              <h4 className='text-primary font-semibold'>
                {testimonials[index].name}
              </h4>
              <p className='text-sm text-gray-500'>
                {testimonials[index].role}
              </p>
              {renderStars(testimonials[index].rating)}
            </motion.div>
          </AnimatePresence>

          {/* Mobile navigation */}
          <div className='absolute inset-0 -mx-8 flex items-center justify-between px-2'>
            <button
              onClick={prevTestimonial}
              className='text-primary rounded-full bg-orange-200 p-2 opacity-60 shadow-md transition hover:bg-orange-300'
            >
              <ChevronLeftIcon className='h-6 w-6' />
            </button>
            <button
              onClick={nextTestimonial}
              className='text-primary rounded-full bg-orange-200 p-2 opacity-60 shadow-md transition hover:bg-orange-300'
            >
              <ChevronRightIcon className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
