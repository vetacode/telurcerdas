import Hero from '../components/Hero';
import SubscribeForm from '../components/SubscribeForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='mx-auto max-w-3xl px-8 py-20 text-center'>
        <h2 className='text-primary mb-4 text-3xl font-bold'>
          Why Choose Telur Cerdas?
        </h2>
        <p className='text-gray-600'>
          Telur Cerdas adalah telur khusus anak yang kaya akan kandungan Omega3
          dan Herbal Essential Oils. Telur Cerdas sangat direkomendasikan untuk
          balita dan anak-anak karena padat nutrisi, khusus untuk memperkuat
          daya ingat, kemampuan verbal dan memaksimalkan perkembangan otak anak.
          Telur Cerdas juga direkomendasikan untuk dikonsumsi oleh ibu hamil
          untuk kesehatan optimal ibu dan sang buah hati. <br />
          <strong>
            We produce premium-quality eggs with a focus on freshness,
            nutrition, and sustainability.{' '}
          </strong>
        </p>
      </section>
      <SubscribeForm />
    </main>
  );
}
