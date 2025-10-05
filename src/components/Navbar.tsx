'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { useCart } from '@/app/context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 shadow-md'>
      <h1 className='text-primary text-2xl font-bold'>
        <Link href='/'>Telur Cerdas</Link>
      </h1>

      <ul className='flex items-center gap-6'>
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

        {/* 🛒 Cart Icon */}
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
    </nav>
  );
}

// 'use client';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className='flex items-center justify-between bg-white px-8 py-4 shadow-md'>
//       <h1 className='text-primary text-2xl font-bold'>Telur Cerdas</h1>
//       <ul className='flex gap-6'>
//         <li>
//           <Link href='/'>Home</Link>
//         </li>
//         <li>
//           <Link href='/products'>Products</Link>
//         </li>
//         <li>
//           <a
//             href='#subscribe'
//             className='bg-primary rounded px-4 py-2 text-white'
//           >
//             Subscribe
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
