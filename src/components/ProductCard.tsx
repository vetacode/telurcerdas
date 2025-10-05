'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '@/app/context/CartContext';

export default function ProductCard({
  id,
  name,
  desc,
  kemasan,
  price,
  image,
}: any) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, desc, kemasan, price, image, quantity });
    setQuantity(1);
    toast.success(`${name} added to cart!`, {
      position: 'top-center',
      autoClose: 3000,
      progress: undefined,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className='flex flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 text-center shadow transition-all hover:shadow-lg'
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className='mx-auto mb-4 w-full rounded object-fill'
      />
      <div className='mb-4 flex flex-col items-center justify-center gap-2'>
        <h3 className='mb-1 text-xl font-semibold'>{name}</h3>
        <h2 className='md:text-md mb-1 text-gray-600'>{desc}</h2>
        <h1 className='md:text-md text-tertiary mb-1'>{kemasan}</h1>
        <p className='text-primary mb-4 font-bold'>
          Rp {price.toLocaleString('id-ID')}
        </p>

        <div className='mb-4 flex items-center justify-center gap-2'>
          <label htmlFor={`qty-${id}`} className='text-sm text-gray-600'>
            Qty:
          </label>
          <input
            id={`qty-${id}`}
            type='number'
            min='1'
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className='focus:border-primary w-20 rounded border border-gray-300 px-2 py-1 text-center focus:outline-none'
          />
          {id === 'egg-premium' ? 'Kgs' : 'packs'}
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className='bg-primary flex items-center justify-center gap-2 rounded px-6 py-2 text-white transition-colors hover:cursor-pointer hover:bg-orange-600'
      >
        Add to Cart{' '}
        <ShoppingCartIcon className='h-6 w-6 text-white transition-colors' />
      </button>
    </motion.div>
  );
}
