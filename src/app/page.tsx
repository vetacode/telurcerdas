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
              Nutrisi Tepat untuk Tumbuh Kembang Optimal
            </strong>

            <span className='mb-4 block'>
              Bayangkan setiap pagi, si kecil tumbuh lebih ceria, fokus belajar,
              dan cepat tangkap. Itulah manfaat yang terkandung dalam
              <strong className='text-primary'> Telur Cerdas</strong>. Telur
              premium yang diformulasikan khusus untuk mendukung tumbuh kembang
              anak secara alami. Diperkaya dengan{' '}
              <strong>Ramuan Khusus Herbal Penguat Daya Ingat</strong> dan
              <strong> Omega-3</strong>, setiap butir{' '}
              <strong className='text-primary'> Telur Cerdas</strong> membantu
              menutrisi otak, memperkuat <em>daya ingat</em>, serta mengasah{' '}
              <em>kemampuan berpikir</em> dan <em>berbicara anak</em> sejak dini
              secara optimal.
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
                  width={200}
                  height={200}
                  className='mx-auto w-auto rounded'
                />
              </motion.div>
            </div>

            <span className='mb-4 block'>
              <strong className='text-primary'> Telur Cerdas</strong> juga
              direkomendasikan untuk <strong>ibu hamil</strong>, guna menjaga
              kesehatan tubuh sekaligus memberikan asupan nutrisi terbaik bagi
              buah hati sejak dalam kandungan.
            </span>

            <span className='mb-6 block text-gray-600 italic'>
              Dengan <strong className='text-primary'> Telur Cerdas</strong>,
              setiap sajian menjadi wujud kasih sayang dan perhatian Anda
              terhadap keluarga — 💛 Karena setiap anak cerdas berawal dari
              asupan yang cerdas.
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
