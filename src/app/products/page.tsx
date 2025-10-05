import ProductCard from '../../components/ProductCard';

const products = [
  {
    id: 'egg-premium',
    name: 'Premium Brown Eggs (1 Kg)',
    price: 31000,
    image:
      'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'egg-organic',
    name: 'Organic Free-Range Eggs (10 pcs)',
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'telur-cerdas',
    name: 'Telur Cerdas - Large Premium Eggs for Smarter Life (10 pcs)',
    price: 50000,
    image: '/images/telurcerdas.png',
    // 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function ProductsPage() {
  return (
    <main className='px-8 py-16'>
      <h2 className='text-primary mb-12 text-center text-4xl font-bold'>
        Our Products
      </h2>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
