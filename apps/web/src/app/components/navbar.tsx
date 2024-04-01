'use client'
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../public/textify-text-white.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, label: 'Inicio', href: '/' },
    { id: 2, label: 'Sobre Nós', href: '/sobre' },
    { id: 3, label: 'Suporte', href: '/suporte' },
  ];

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex flex-col items-center">
        <img src={Logo.src} alt="Logo" className='w-24' />
        {/* <span className="mt-2 text-xl">Textify</span> */}
      </div>

      <ul className="hidden md:flex space-x-4">
        {links.map(({ id, label, href }) => (
          <li key={id}>
            <Link href={href}>
              <div className="hover:text-green-500">{label}</div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-gray-500"
        >
          {navOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {navOpen && (
        <ul className="md:hidden flex flex-col absolute top-0 left-0 w-full h-screen bg-black text-white">
          {links.map(({ id, label, href }) => (
            <li key={id} className="py-4 text-2xl">
              <Link href={href}>
                <a onClick={() => setNavOpen(false)}>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
