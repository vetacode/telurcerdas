'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useCart } from '@/app/context/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert('Your cart is empty!');
    setLoading(true);

    try {
      const res = await axios.post('/api/checkout', {
        items: cart,
        amount: total,
      });

      if (res.data?.invoice_url) {
        clearCart();
        window.location.href = res.data.invoice_url;
      }
    } catch (err) {
      console.error(err);
      alert('Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto max-w-4xl px-6 py-12'>
      <h1 className='text-primary mb-8 text-3xl font-bold'>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className='text-center'>
          <p className='mb-6 text-gray-600'>Your cart is currently empty.</p>
          <Link
            href='/products'
            className='bg-primary rounded px-6 py-3 text-white transition-colors hover:bg-orange-600'
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className='space-y-6'>
            {cart.map((item) => (
              <div
                key={item.id}
                className='flex flex-col gap-4 rounded-lg bg-white p-4 shadow sm:flex-row sm:items-center sm:justify-between'
              >
                {/* Product Info */}
                <div className='flex items-center gap-4 sm:items-start'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className='rounded object-cover'
                  />
                  <div>
                    <h2 className='text-lg font-semibold'>{item.name}</h2>
                    <p className='text-primary'>
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                {/* Quantity + Controls */}
                <div className='flex flex-wrap items-center justify-start gap-4 sm:justify-end'>
                  <input
                    type='number'
                    min='1'
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        Math.max(1, parseInt(e.target.value))
                      )
                    }
                    className='focus:border-primary w-20 rounded border border-gray-300 px-2 py-1 text-center focus:outline-none'
                  />
                  <p className='w-24 text-right sm:text-left'>
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-lg font-bold text-red-500 hover:cursor-pointer hover:text-red-700'
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <div className=''>
              <Link
                href='/products'
                className='bg-primary rounded px-6 py-3 text-white transition-colors hover:bg-orange-600'
              >
                Add More
              </Link>
            </div>
          </div>

          {/* Total + Checkout */}
          <div className='mt-10 flex flex-col items-center justify-between border-t pt-6 sm:flex-row'>
            <h2 className='mb-4 text-2xl font-semibold sm:mb-0'>
              Total:{' '}
              <span className='text-primary'>
                Rp {total.toLocaleString('id-ID')}
              </span>
            </h2>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`${
                loading
                  ? 'bg-gray-400'
                  : 'bg-primary hover:cursor-pointer hover:bg-orange-600'
              } rounded px-8 py-3 text-white transition-colors`}
            >
              {loading ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
