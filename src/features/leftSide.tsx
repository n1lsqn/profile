import { NextPage } from 'next';
import Image from 'next/image';
import { CiMail, CiShoppingCart, CiTwitter } from 'react-icons/ci';
import { SiVrchat } from 'react-icons/si';

export const LeftSide: NextPage = () => {
  return (
    <div className='relative bg-white w-full md:w-1/2'>
      <div className='relative w-full aspect-[3/1] overflow-hidden'>
        <Image
          src="/assets/banner.webp"
          alt='banner'
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='relative flex justify-center'>
        <div className='absolute -bottom-16 md:-bottom-24'>
          <div className='relative w-40 h-40 md:w-52 md:h-52' >
            <Image
              src="/assets/n1lsqn_logo_474752.png"
              alt='avatar img'
              fill
              className='rounded-full border-4 shadow-md object-cover'
              sizes='200px'
              priority
            />
          </div>
        </div>
      </div>
      <div className="pt-20 md:pt-32 text-center text-2xl md:text-3xl text-[#212121]">
        にる / @n1lsqn
      </div>
      <div className="flex flex-row gap-4 justify-center mt-10 md:mt-48 mb-8 md:mb-16 px-4">
        <a
          href="https://twitter.com/n1lsqn"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors"
        >
          <CiTwitter className="w-10 h-10 md:w-12 md:h-12 text-[#212121]" />
        </a>
        <a
          href="https://vrchat.com/home/user/usr_22e0ade6-5183-42a8-b9fa-0c31ad47887e"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors"
        >
          <SiVrchat className="w-10 h-10 md:w-12 md:h-12 text-[#212121]" />
        </a>
        <a
          href="https://vyra.booth.pm/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors"
        >
          <CiShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-[#212121]" />
        </a>
        <a
          href="mailto:owner@n1l.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors"
        >
          <CiMail className="w-10 h-10 md:w-12 md:h-12 text-[#212121]" />
        </a>
      </div>
    </div>
  );
};
