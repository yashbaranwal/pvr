import Image from 'next/image';
import React from 'react';

const MediumCard = () => {
  return (
        <div className='relative h-60 w-80 hover:animate-spin transition duration-200'>
            <Image 
                className='rounded-lg hover:scale-110 transform transition duration-300 ease-out cursor-pointer '
                alt="card"
                src="https://links.papareact.com/0fm"
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute bottom-8 left-4 text-white'>
                <h2 className='text-2xl font-semibold'>PUSHPA</h2>
                <p className='text-sm font-semibold mt-1'>HINDI | U/A | ACTION</p>
            </div>
        </div>
        );
};

export default MediumCard;
