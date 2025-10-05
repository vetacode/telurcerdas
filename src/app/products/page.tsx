import ProductCard from '../../components/ProductCard';

const products = [
  {
    id: 'egg-premium',
    name: 'Premium Brown Eggs (1 Kg)',
    desc: 'Table Eggs, Telur Pilihan, Kualitas Terbaik',
    price: 31000,
    image:
      'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'egg-organic',
    name: 'Herbal Low-Cholesterol Eggs (10 pcs)',
    desc: 'Telur Herbal Rendah Kolesterol, Tidak Amis, Tidak Menyebabkan Alergi, Cocok Untuk Vegetarian, Kualitas Terbaik',
    price: 48000,
    image:
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'telur-cerdas',
    name: 'Telur Cerdas - Premium Eggs for Smart Life (10 pcs)',
    desc: 'Telur Premium yang diperkaya Omega-3, Antioksidan, Selenium Organik, serta Herbal Essential Oils. Setiap butir Telur Cerdas membantu menutrisi otak, menjaga daya tahan tubuh, dan mendukung energi harian secara alami. Hanya seharga segelas kopi di kafe, Anda sudah bisa menghadirkan nutrisi berkualitas untuk keluarga tercinta. 🌿 Karena tumbuh kembang anak dan kesehatan keluarga adalah investasi terbaik. Telur Cerdas – Otak Kuat, Anak Hebat',
    price: 55000,
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
