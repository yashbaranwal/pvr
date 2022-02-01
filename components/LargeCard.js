import Image from 'next/image';
import React from 'react';

const LargeCard = () => {
  return (
        <div className='relative max-w-7xl md:mx-auto mx-4'>
            <div className='relative min-h-[300px]'>
            <Image 
                className='rounded-lg'
                alt="large card"
                src="https://links.papareact.com/0fm"
                layout='fill'
                objectFit='cover'
            />
            </div>
=            <div className='absolute top-1/3 left-12'>
                <h2 className='text-2xl md:text-3xl w-50 font-semibold'>Introducing an exclusive 
                loyalty program that pays you back!</h2>
                <div className='flex mt-5 items-center space-x-4'>
                    <button className='hover:shadow-2xl hover:scale-105 transition duration-150 ease-out
                     cursor-pointer px-8 py-3 bg-white rounded-lg font-bold text-xs'>KNOW MORE</button>
                    <p className='font-semibold'>ALREADY A MEMBER?</p>
                </div>
            </div>
        </div>
        );
};

export default LargeCard;
