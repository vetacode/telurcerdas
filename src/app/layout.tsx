import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CartProvider } from './context/CartContext';

export const metadata = {
  title: 'Telur Cerdas',
  description: 'Smart, fresh, and quality eggs for everyone.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col'>
        <CartProvider>
          <Navbar />
          <main className='flex-grow'>
            {children}
            <ToastContainer
              position='top-right'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
              toastClassName='!rounded-lg !shadow-lg'
              className='!text-gray-800'
              progressClassName='!bg-primary'
            />
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
