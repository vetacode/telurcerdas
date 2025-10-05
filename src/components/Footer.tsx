export default function Footer() {
  return (
    <footer className='bottom-0 mt-12 bg-white py-6 text-center'>
      <p className='copyright text-gray-600'>
        © {new Date().getFullYear()} Telur Cerdas • All Rights Reserved
      </p>
    </footer>
  );
}
