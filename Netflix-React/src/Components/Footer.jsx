import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';


function Footer() {
  return (
    <div>
      <footer className=' px-8 py-1 text-white'>
        
          <div className='flex justify-evenly'>
          <ul className='flex gap-5'>
            <a href="https://instagram.com/netflix" target="_blank">
            <FaInstagram className="text-red-800 text-3xl" /></a>
            <a href="https://wa.me/919999999999" target="_blank" >
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a href="https://x.com/netflix" target="_blank">
              <FaXTwitter size={30} color="white" />
            </a>
            <a href="https://facebook.com/netflix" target="_blank">
              <FaFacebook size={30} color="#1877F2" />
            </a>
              
          </ul>
          
          <ul >
            <h2 className='text-lg font-bold text-red-800 underline mb-3'>Content</h2>
            <li><a href='#'>Audio</a></li>
            <li><a href='#'>Video</a></li>
            <li><a href='#'>Series</a></li>
          </ul>
          <ul >
            <h2 className='text-lg font-bold text-red-800 underline mb-3'>Help Center</h2>
            <li><a href='#'>Contact-US</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Issues</a></li>
          </ul>
        </div>
        <div className='flex justify-center pt-6'>
          <p className='text-lg font-bold text-red-800 underline mb-3 '><a href='#'>Netflix@Copyright.cccc</a></p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
