'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { useCart } from '@/app/context/CartContext';

export default function ProductCard({ id, name, price, image }: any) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity });
    setQuantity(1);
    alert(`${name} added to cart!`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className='flex flex-col rounded-lg border border-gray-100 bg-white p-6 text-center shadow transition-all hover:shadow-lg'
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className='mx-auto mb-4 rounded object-cover'
      />
      <h3 className='mb-1 text-xl font-semibold'>{name}</h3>
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

// 'use client';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState } from 'react';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
// }

// export default function ProductCard({ id, name, price, image }: Product) {
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const handleCheckout = async () => {
//     try {
//       setLoading(true);
//       const totalAmount = price * quantity;

//       const res = await axios.post('/api/checkout', {
//         productId: id,
//         amount: totalAmount,
//         quantity,
//       });

//       if (res.data?.invoice_url) {
//         window.location.href = res.data.invoice_url;
//       }
//     } catch (error) {
//       console.error('Checkout failed:', error);
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       className='rounded-lg border border-gray-100 bg-white p-6 text-center shadow transition-all hover:shadow-lg'
//     >
//       <Image
//         src={image}
//         alt={name}
//         width={400}
//         height={300}
//         className='mx-auto mb-4 w-full rounded object-cover'
//       />

//       <h3 className='mb-1 text-xl font-semibold'>{name}</h3>
//       <p className='text-primary mb-4 font-bold'>
//         Rp {price.toLocaleString('id-ID')}
//       </p>

//       {/* Quantity Input */}
//       <div className='mb-4 flex items-center justify-center gap-2'>
//         <label htmlFor={`qty-${id}`} className='text-sm text-gray-600'>
//           Qty:
//         </label>
//         <input
//           id={`qty-${id}`}
//           type='number'
//           min='1'
//           value={quantity}
//           onChange={(e) =>
//             setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//           }
//           className='focus:border-primary w-20 rounded border border-gray-300 px-2 py-1 text-center focus:outline-none'
//         />
//       </div>

//       {/* Total Price */}
//       <p className='mb-4 text-gray-700'>
//         <strong>Total:</strong> Rp {(price * quantity).toLocaleString('id-ID')}
//       </p>

//       {/* Checkout Button */}
//       <button
//         onClick={handleCheckout}
//         disabled={loading}
//         className={`${
//           loading ? 'bg-gray-400' : 'bg-primary hover:bg-orange-600'
//         } hover: cursor-pointer rounded px-6 py-2 text-white transition-colors`}
//       >
//         {loading ? 'Processing...' : 'Buy Now'}
//       </button>
//     </motion.div>
//   );
// }
