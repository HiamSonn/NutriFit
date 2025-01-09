import React from 'react';
import Image from 'next/image';
const Ingredient = () => {
    return (    
        <div className='bg-white border border-grayborder rounded-md p-4 max-w-[300px] lg:space-y-5 md:space-y-4 sm:space-y-3 space-y-2'>
          <Image
          src="/catrich.jpg"
            width={300}
            height={200}
          />
          <h1 className='lg:text-lg md:text-base sm:text-sm text-xs '>
            Cá trích
          </h1>
          <div className='flex justify-between text-gray text-xs'>  
            <span>200kđ</span>
            <span>2kg</span>
          </div>
        </div>
    );
};

export {Ingredient}