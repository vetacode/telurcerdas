'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-white px-8 py-4 shadow-md'>
      <h1 className='text-primary text-2xl font-bold'>Telur Cerdas</h1>
      <ul className='flex gap-6'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/products'>Products</Link>
        </li>
        <li>
          <a
            href='#subscribe'
            className='bg-primary rounded px-4 py-2 text-white'
          >
            Subscribe
          </a>
        </li>
      </ul>
    </nav>
  );
}
