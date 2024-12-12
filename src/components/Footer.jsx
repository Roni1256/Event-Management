import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-fontprimary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap gap-4">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#works" className="hover:text-gray-300">Works</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-2">30,Kombakkadu pudhur, Tiruppur, TamilNadu</p>
          <p className="mb-4">+91 9943184934</p>
          <p className="text-sm text-gray-400">© {currentYear} Perfect Events. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer