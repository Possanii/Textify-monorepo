import Image from 'next/image';
import Logo from '../../../public/Logo_with_black_text.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="flex items-center justify-between">
        <div>
          <img src={Logo.src} alt="Logo" className='w-full items-center justify-center' />
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Sobre</a></li>
          <li><a href="#" className="text-white">Contato</a></li>
          <button>Upload a video</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
