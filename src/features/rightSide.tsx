import { NextPage } from 'next';

export const RightSide: NextPage = () => {
  return (
    <div className='bg-white rounded-b-xl md:rounded-r-xl md:rounded-l-none w-full md:w-1/2 p-4'>
      <p className='mb-3 text-lg md:text-base text-[#212121]'>2024/9/11 Join, /13 NU, /19 U, 10/7 KU, 11/2 TU</p>
      <p className='mt-4 text-lg md:text-base text-[#212121]'>
        アバターは
        <a 
          href='https://nanka-tsukurouyo.booth.pm/items/5787485' 
          className='text-[#01689A] hover:underline'
          target='_blank' 
          rel='noopener noreferrer'
        >
          むんきちゃん
        </a>
        と
        <a 
          href='https://nanka-tsukurouyo.booth.pm/items/5787485' 
          className='text-[#01689A] hover:underline'
          target='_blank' 
          rel='noopener noreferrer'
        >
          ししゅかちゃん
        </a>
        を使っています！！かわいいね🍩
      </p>
      <br />
      <p className='mb-2 text-lg md:text-base text-[#212121]'>好きなもの: アジカン / King Gnu / ボカロ / Fallout シリーズ（特に4） / Death Stranding / 攻殻機動隊 ...etc</p>
      <p className='mb-2 text-lg md:text-base text-[#212121]'>
        <a 
          href='https://nogiwa.booth.pm/' 
          className='text-[#01689A] hover:underline'
          target='_blank' 
          rel='noopener noreferrer'
        >
          NOWA_shop、
        </a>
        手伝ったりしてます。ぜひぜひ～！！
      </p>
    </div>
  );
};