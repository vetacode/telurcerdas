'use client';
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useCart } from '@/app/context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-md'>
      {/* Logo */}
      <div className='flex items-center gap-3'>
        <Image
          src='/images/logo.svg'
          alt='Telur Cerdas Logo'
          width={60}
          height={60}
          className='rounded'
        />
        <h1 className='text-primary text-xl font-bold'>
          <Link href='/'>Telur Cerdas</Link>
        </h1>
      </div>

      {/* Desktop Nav */}
      <ul className='hidden items-center gap-6 md:flex'>
        <li>
          <Link href='/' className='hover:text-primary'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/products' className='hover:text-primary'>
            Products
          </Link>
        </li>
        <li>
          <a
            href='#subscribe'
            className='bg-primary rounded px-4 py-2 text-white transition-colors hover:bg-orange-600'
          >
            Subscribe
          </a>
        </li>
        {/* Cart */}
        <li className='relative'>
          <Link href='/cart' className='flex items-center gap-2'>
            <ShoppingCartIcon className='hover:text-primary h-6 w-6 text-gray-800 transition-colors' />
            {totalItems > 0 && (
              <span className='bg-primary absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold text-white'>
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='focus:outline-none md:hidden'
      >
        {menuOpen ? (
          <XMarkIcon className='hover:text-primary h-7 w-7 text-gray-800 hover:cursor-pointer' />
        ) : (
          <Bars3Icon className='hover:text-primary h-7 w-7 text-gray-800 hover:cursor-pointer' />
        )}
      </button>

      {/* Mobile Sheet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className='fixed inset-y-0 right-0 z-40 flex w-3/4 flex-col bg-white p-6 shadow-xl md:hidden'
          >
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-primary text-xl font-bold'>Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <XMarkIcon className='h-7 w-7 text-gray-800' />
              </button>
            </div>

            <ul className='flex flex-col gap-4 text-lg'>
              <li>
                <Link
                  href='/'
                  onClick={() => setMenuOpen(false)}
                  className='hover:text-primary'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/products'
                  onClick={() => setMenuOpen(false)}
                  className='hover:text-primary'
                >
                  Products
                </Link>
              </li>
              <li>
                <a
                  href='#subscribe'
                  onClick={() => setMenuOpen(false)}
                  className='bg-primary inline-block rounded px-4 py-2 text-white transition-colors hover:bg-orange-600'
                >
                  Subscribe
                </a>
              </li>
              <li className='hover:text-primary'>
                <Link
                  href='/cart'
                  onClick={() => setMenuOpen(false)}
                  className='flex items-center gap-2'
                >
                  <ShoppingCartIcon className='hover:text-primary h-6 w-6 text-gray-800' />
                  Cart
                  {totalItems > 0 && (
                    <span className='bg-primary ml-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold text-white'>
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
