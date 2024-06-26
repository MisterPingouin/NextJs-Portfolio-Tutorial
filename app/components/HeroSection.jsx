import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm  Anthony</h1>
        <p className="text-custom-gray text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>       
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
                src="/images/avatar.webp"
                alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
        </div>
        </section>
  )
}

export default HeroSection