'use client';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: Product) {
  const handleCheckout = async () => {
    const res = await axios.post('/api/checkout', {
      productId: id,
      amount: price,
    });
    if (res.data?.invoice_url) {
      window.location.href = res.data.invoice_url;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='rounded-lg bg-white p-4 text-center shadow'
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className='mb-4 w-auto rounded object-fill'
      />
      <h3 className='mb-2 text-xl font-semibold'>{name}</h3>
      <p className='text-primary mb-4 font-bold'>Rp {price.toLocaleString()}</p>
      <button
        onClick={handleCheckout}
        className='bg-primary rounded px-4 py-2 text-white hover:bg-orange-600'
      >
        Buy Now
      </button>
    </motion.div>
  );
}
