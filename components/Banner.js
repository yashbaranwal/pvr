import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
        <div className='relative h-[300px] md:h-[200px] lg:h-[300px] 2xl:h-[530px]'>
            <Image 
                alt="banner"
                src="https://links.papareact.com/0fm"
                layout='fill'
                objectFit='cover'
            />
        </div>
        );
};

export default Banner;
