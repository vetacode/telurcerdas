'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Hero from '../components/Hero';
import SubscribeForm from '../components/SubscribeForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='mx-auto max-w-4xl px-8 py-20 text-center'>
        <h2 className='text-primary mar mb-8 text-3xl font-bold'>
          Why Choose Telur Cerdas?
        </h2>

        <div className='relative'>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.8, rotate: -45 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className='z-50 float-right mb-6 ml-12 hidden md:block'
          >
            <Image
              src='/images/logo-full.png'
              alt='Telur Cerdas Logo'
              width={200}
              height={200}
              className='w-auto rounded'
            />
          </motion.div>

          <div className='mx-auto max-w-4xl text-justify text-base leading-relaxed text-gray-700 md:text-lg'>
            <strong className='text-tertiary mb-4 block text-lg font-medium md:text-xl'>
              Nutrisi Pilihan untuk Tumbuh Kembang Optimal
            </strong>

            <span className='mb-4 block'>
              <strong className='text-primary'>Telur Cerdas</strong> adalah
              telur premium yang dirancang khusus untuk mendukung tumbuh kembang
              anak. Diperkaya dengan <strong>Omega-3</strong> dan
              <strong> Herbal Essential Oils alami</strong>, setiap butir Telur
              Cerdas mengandung nutrisi penting yang membantu meningkatkan{' '}
              <em>daya ingat</em>, <em>kemampuan verbal</em>, serta{' '}
              <em>perkembangan otak anak</em> secara optimal.
            </span>

            {/* Mobile Image - appears within text flow on mobile */}
            <div className='my-6 flex justify-center md:hidden'>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.8, rotate: -45 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image
                  src='/images/logo-full.png'
                  alt='Telur Cerdas Logo'
                  width={150}
                  height={150}
                  className='mx-auto w-auto rounded'
                />
              </motion.div>
            </div>

            <span className='mb-4 block'>
              Telur Cerdas juga direkomendasikan untuk{' '}
              <strong>ibu hamil</strong>, guna menjaga kesehatan tubuh sekaligus
              memberikan asupan nutrisi terbaik bagi buah hati sejak dalam
              kandungan.
            </span>

            <span className='mb-6 block text-gray-600 italic'>
              Dengan Telur Cerdas, setiap sajian menjadi wujud kasih sayang dan
              perhatian Anda terhadap keluarga — karena kualitas terbaik pantas
              untuk yang tersayang.
            </span>

            <strong className='text-primary mt-6 block border-t border-gray-200 pt-4 text-center text-lg md:text-xl'>
              We produce premium-quality eggs with a focus on freshness,
              nutrition, and sustainability.
            </strong>
          </div>
        </div>
      </section>
      <SubscribeForm />
    </main>
  );
}
