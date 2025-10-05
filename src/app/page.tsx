import Hero from '../components/Hero';
import SubscribeForm from '../components/SubscribeForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='mx-auto max-w-3xl py-20 text-center'>
        <h2 className='text-primary mb-4 text-3xl font-bold'>
          Why Choose Telur Cerdas?
        </h2>
        <p className='text-gray-600'>
          We produce premium-quality eggs with a focus on freshness, nutrition,
          and sustainability.
        </p>
      </section>
      <SubscribeForm />
    </main>
  );
}
