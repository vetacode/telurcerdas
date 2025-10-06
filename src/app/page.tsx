'use client';
import Image from 'next/image';

import Hero from '../components/Hero';
import SubscribeForm from '../components/SubscribeForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='mx-auto max-w-4xl px-8 py-20 text-center'>
        <h2 className='text-primary mb-4 text-3xl font-bold'>
          Why Choose Telur Cerdas?
        </h2>
        <Image
          src='/images/logo-full.png'
          alt='Telur Cerdas Logo'
          width={200}
          height={200}
          className='items m-6 mx-auto w-auto shrink-1 rounded'
        />
        <p className='mx-auto max-w-4xl px-4 text-center text-base leading-relaxed text-gray-700 md:px-0 md:text-lg'>
          <strong className='text-tertiary mb-4 block text-lg font-medium md:text-xl'>
            Nutrisi Pilihan untuk Tumbuh Kembang Optimal
          </strong>

          <span className='mb-4 block'>
            <strong className='text-primary'>Telur Cerdas</strong> adalah telur
            premium yang dirancang khusus untuk mendukung tumbuh kembang anak.
            Diperkaya dengan <strong>Omega-3</strong> dan
            <strong> Herbal Essential Oils alami</strong>, setiap butir Telur
            Cerdas mengandung nutrisi penting yang membantu meningkatkan{' '}
            <em>daya ingat</em>, <em>kemampuan verbal</em>, serta{' '}
            <em>perkembangan otak anak</em> secara optimal.
          </span>

          <span className='mb-4 block'>
            Telur Cerdas juga direkomendasikan untuk <strong>ibu hamil</strong>,
            guna menjaga kesehatan tubuh sekaligus memberikan asupan nutrisi
            terbaik bagi buah hati sejak dalam kandungan.
          </span>

          <span className='mb-6 block text-gray-600 italic'>
            Dengan Telur Cerdas, setiap sajian menjadi wujud kasih sayang dan
            perhatian Anda terhadap keluarga — karena kualitas terbaik pantas
            untuk yang tersayang.
          </span>

          <strong className='text-primary mt-6 block border-t border-gray-200 pt-4 text-lg md:text-xl'>
            We produce premium-quality eggs with a focus on freshness,
            nutrition, and sustainability.
          </strong>
        </p>
      </section>
      <SubscribeForm />
    </main>
  );
}
