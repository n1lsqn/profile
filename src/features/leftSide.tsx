"use client";

import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { CiMail, CiShoppingCart, CiTwitter } from 'react-icons/ci';
import { SiGithub, SiVrchat } from 'react-icons/si';

export const LeftSide: NextPage = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('owner@n1l.dev');
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <div className='relative w-full md:w-1/2'>
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
          <div className='relative w-40 h-40 md:w-52 md:h-52 transition-all duration-500 ease-out hover:scale-105 hover:rotate-3 cursor-pointer' >
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
      <div className="pt-20 md:pt-32 text-center text-2xl md:text-3xl text-[#212121] dark:text-slate-100 transition-colors duration-500">
        にる / @n1lsqn
      </div>
      <div className="flex flex-row gap-2.5 sm:gap-4 justify-center items-center flex-nowrap mt-10 md:mt-48 mb-8 md:mb-16 px-2 sm:px-4">
        <a
          href="https://twitter.com/n1lsqn"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 dark:border-slate-800 p-1.5 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        >
          <CiTwitter className="w-10 h-10 md:w-12 md:h-12 text-[#212121] dark:text-slate-200" />
        </a>
        <a
          href="https://vrchat.com/home/user/usr_22e0ade6-5183-42a8-b9fa-0c31ad47887e"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 dark:border-slate-800 p-1.5 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        >
          <SiVrchat className="w-10 h-10 md:w-12 md:h-12 text-[#212121] dark:text-slate-200" />
        </a>
        <a
          href="https://vyra.booth.pm/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 dark:border-slate-800 p-1.5 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        >
          <CiShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-[#212121] dark:text-slate-200" />
        </a>
        <a
          href="https://github.com/n1lsqn"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gray-200 dark:border-slate-800 p-1.5 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        >
          <SiGithub className="w-10 h-10 md:w-12 md:h-12 text-[#212121] dark:text-slate-200" />
        </a>
        <div className="relative">
          <button
            onClick={handleCopyEmail}
            className="rounded-full border border-gray-200 dark:border-slate-800 p-1.5 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer"
            title="Click to copy email address"
          >
            <CiMail className="w-10 h-10 md:w-12 md:h-12 text-[#212121] dark:text-slate-200" />
          </button>
          {showTooltip && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-white text-xs rounded shadow-md pointer-events-none whitespace-nowrap animate-bounce">
              コピーしました！🍩
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
