import React from 'react';
import Image from 'next/image';
const Ingredient = () => {
    return (    
        <div className='bg-white border border-grayborder rounded-md p-4 max-w-[300px] space-y-5'>
          <Image
          src="/catrich.jpg"
            width={300}
            height={200}
          />
          <h1>
            Cá trích
          </h1>
          <div className='flex justify-between text-gray text-sm'>  
            <span>200kđ</span>
            <span>2kg</span>
          </div>
        </div>
    );
};

export {Ingredient}