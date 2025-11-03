import { NextPage } from 'next';
import Image from 'next/image';
import { CiTwitter } from 'react-icons/ci';
import { SiMisskey, SiVrchat } from 'react-icons/si';

export const LeftSide: NextPage = () => {
  return (
    <div className='bg-white rounded-t-xl rounded-bl-none md:rounded-tl-xl  md:rounded-bl-xl w-full md:w-1/2 '>
      <div className='flex justify-center'>
        <Image
          src="/assets/banner.png"
          alt='banner'
          width={0}
          height={0}
          className='rounded-t-xl md:rounded-tl-xl md:rounded-tr-none'
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className='flex justify-center -mt-12 md:-mt-24'>
        <Image
          src="/assets/25-05-09 02-23-43 at_2.png"
          alt='avatar img'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '50%', maxWidth: '200px', height: 'auto' }}
          className='rounded-full border-4 shadow-md'
        />
      </div>
      <div className='md:text-3xl text-2xl text-center my-2 text-[#212121]'>にる</div>
      <div className='flex flex-row gap-4 justify-center mt-8 md:mt-48 mb-8 md:mb-16 px-4'>
        <a href="https://vrchat.com/home/user/usr_22e0ade6-5183-42a8-b9fa-0c31ad47887e" target="_blank" rel="noopener noreferrer" className='rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors'>
          <SiVrchat className='w-10 h-10 md:w-12 md:h-12 text-[#212121]'/>
        </a>
        <a href="https://twitter.com/n1lsqn" target="_blank" rel="noopener noreferrer" className='rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors'>
          <CiTwitter className='w-10 h-10 md:w-12 md:h-12 text-[#212121]'/>
        </a>
        <a href="https://papi.n1l.dev/@n1lsqn" target="_blank" rel="noopener noreferrer" className='rounded-full border p-1.5 hover:border-[#111734] hover:bg-gray-100 transition-colors'>
          <SiMisskey className='w-10 h-10 md:w-12 md:h-12 text-[#212121]'/>
        </a>
      </div>
    </div>
  );
};