'use client';

export default function SubscribeForm() {
  return (
    <section id='subscribe' className='bg-white px-8 py-16 text-center'>
      <h2 className='text-primary mb-4 text-3xl font-bold'>
        Join Our Newsletter
      </h2>
      <p className='mb-8 text-gray-600'>
        Get updates on new products and offers.
      </p>
      <form className='mx-auto flex max-w-lg flex-col justify-center gap-4 sm:flex-row'>
        <input
          type='text'
          placeholder='Your Name'
          required
          className='w-full flex-grow rounded border p-2 sm:w-auto'
        />
        <input
          type='email'
          placeholder='Your Email'
          required
          className='w-full flex-grow rounded border p-2 sm:w-auto'
        />
        <button
          type='submit'
          className='bg-primary hover: cursor-pointer rounded px-6 py-2 text-white hover:bg-orange-600'
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
