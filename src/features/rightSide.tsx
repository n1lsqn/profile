import { NextPage } from 'next';

const likes = [
  "ASIAN KUNG-FU GENERATION", "King Gnu", "VOCALOID", 
  "Fallout 4", "Death Stranding", 
  "攻殻機動隊", "METRO", "ESCAPE FROM TARKOV"
];

export const RightSide: NextPage = () => {
  return (
    <div className='w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-between'>
      <div>
        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase'>Activity Logs</p>
        <p className='mb-5 text-sm text-[#212121] bg-black/5 p-3 rounded-lg border border-black/5 font-mono'>
          2024/9/11 Join, /13 NU, /19 U, 10/7 KU, 11/2 TU
        </p>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase'>VRChat Avatars</p>
        <p className='mb-5 text-base text-[#212121] leading-relaxed'>
          アバターは{' '}
          <a 
            href='https://nanka-tsukurouyo.booth.pm/items/5787485' 
            className='text-violet-600 hover:text-violet-800 hover:underline font-medium'
            target='_blank' 
            rel='noopener noreferrer'
          >
            むんきちゃん
          </a>
          {' '}と{' '}
          <a 
            href='https://booth.pm/ja/items/7543853' 
            className='text-violet-600 hover:text-violet-800 hover:underline font-medium'
            target='_blank' 
            rel='noopener noreferrer'
          >
            ししゅかちゃん
          </a>
          {' '}を使っています！！かわいいね🍩
        </p>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase'>Likes</p>
        <div className='flex flex-wrap gap-2 mb-5'>
          {likes.map((like) => (
            <span 
              key={like} 
              className='px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-sm font-medium border border-violet-100 transition-all hover:bg-violet-100 hover:border-violet-200'
            >
              {like}
            </span>
          ))}
        </div>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase'>Works</p>
        <div className='flex flex-wrap gap-2 items-center'>
          <a 
            href='https://nogiwa.booth.pm/' 
            className='inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 text-white rounded-full text-sm font-medium shadow-sm transition-all hover:bg-violet-700 hover:scale-105 active:scale-95'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <span>NOWA_shop</span>
            <span className='text-xs opacity-80'>↗</span>
          </a>
          <span className='text-sm text-gray-500 ml-1'>
            の制作をお手伝いしています
          </span>
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-black/5'>
        <p className='text-sm text-gray-500 leading-relaxed'>
          このようなサイトを制作しております。お仕事のご依頼やお問い合わせは、左側のDMまたはメールからお気軽にご連絡ください！
        </p>
      </div>
    </div>
  );
};