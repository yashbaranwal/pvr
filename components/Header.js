import Image from 'next/image';
import React from 'react';

import { ChevronDownIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline'
const Header = () => {
  return (
        <header className='bg-[#1B1B1B] shadow-2xl sticky top-0 z-50'>
            <div className='grid grid-cols-2 md:grid-cols-4 p-5'>
                <div className='relative flex items-center h-10 -mt-4 w-10 p-8 md:max-w-[140px]'>
                    <Image 
                        alt="logo"
                        src="/logo.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className='md:inline-flex hidden items-center h-10 bg-[#373a3c] rounded-lg'>
                    <SearchIcon className='h-4 text-gray-200 mx-2' />
                    <input className='h-10  bg-[#373a3c] outline-none flex-grow ml-5 text-white' type="text" 
                    placeholder='Search movies or theatres..' />
                    <ChevronDownIcon className='h-4 text-white mx-2' />
                </div>
                <div className='md:inline-flex hidden items-center h-10 bg-[#373a3c] rounded-lg md:mx-4'>
                    <SearchIcon className='h-4 text-gray-200 mx-2' />
                    <input className='h-10  bg-[#373a3c] outline-none flex-grow ml-5 text-white' type="text" 
                    placeholder='Search movies or theatres..' />
                    <ChevronDownIcon className='h-4 text-white mx-2' />
                </div>
                <div className='flex items-center -mt-4 justify-end md:mr-5'>
                    <MenuIcon className='cursor-pointer h-8 text-[#ffce26]' />
                </div>
            </div>
            <div className='hidden xl:flex items-center max-w-6xl mx-auto px-4 pb-4 text-xs 
             text-white font-semibold justify-between'>
                    <div className='flex space-x-2 whitespace-nowrap'>
                        <p className='hover:text-[#ffce26] cursor-pointer'>IMAX</p> 
                        <p className='hover:text-[#ffce26] cursor-pointer'>4DX</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Playhouse</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>GOLD</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>LUXE</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>P[XL]</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>ONYX</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Drive-In</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Directors Cut</p>
                        <p className='text-[#ffce26] cursor-pointer'>PVR Cares</p>
                    </div>
                    <div className='flex space-x-2 text-gray-400 whitespace-nowrap'>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Cinemas</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Offers</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Advertise</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Gift Cards</p>
                        <p className='hover:text-[#ffce26] cursor-pointer'>Private Screening</p>
                        <p className='text-[#ffce26] cursor-pointer'>Movie Library</p>
                    </div>
                    
            </div>
                
        </header>
        );
};

export default Header;
