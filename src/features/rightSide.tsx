import { NextPage } from 'next';

const likes = [
  "ASIAN KUNG-FU GENERATION", "King Gnu", "VOCALOID", 
  "Fallout 4", "Death Stranding", 
  "攻殻機動隊", "METRO", "ESCAPE FROM TARKOV"
];

export const RightSide: NextPage = () => {
  return (
    <div className='w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-between dark:text-slate-100 transition-colors duration-500'>
      <div>
        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 dark:text-slate-500 uppercase'>Activity Logs</p>
        <p className='mb-5 text-sm text-[#212121] dark:text-slate-200 bg-black/5 dark:bg-white/5 p-3 rounded-lg border border-black/5 dark:border-white/5 font-mono transition-colors duration-500'>
          2024/9/11 Join, /13 NU, /19 U, 10/7 KU, 11/2 TU
        </p>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 dark:text-slate-500 uppercase'>VRChat Avatars</p>
        <p className='mb-5 text-base text-[#212121] dark:text-slate-200 leading-relaxed transition-colors duration-500'>
          アバターは{' '}
          <a 
            href='https://nanka-tsukurouyo.booth.pm/items/5787485' 
            className='text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 hover:underline font-medium transition-colors'
            target='_blank' 
            rel='noopener noreferrer'
          >
            むんきちゃん
          </a>
          {' '}と{' '}
          <a 
            href='https://booth.pm/ja/items/7543853' 
            className='text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 hover:underline font-medium transition-colors'
            target='_blank' 
            rel='noopener noreferrer'
          >
            ししゅかちゃん
          </a>
          {' '}を使っています！！かわいいね🍩
        </p>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 dark:text-slate-500 uppercase'>Likes</p>
        <div className='flex flex-wrap gap-2 mb-5'>
          {likes.map((like) => (
            <span 
              key={like} 
              className='px-3 py-1 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-medium border border-violet-100 dark:border-violet-900/50 transition-all hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:border-violet-200'
            >
              {like}
            </span>
          ))}
        </div>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 dark:text-slate-500 uppercase'>Works</p>
        <div className='flex flex-wrap gap-2 items-center'>
          <a 
            href='https://nogiwa.booth.pm/' 
            className='inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-medium border border-violet-100 dark:border-violet-900/50 transition-all hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:border-violet-200 hover:scale-105 active:scale-95'
            target='_blank' 
            rel='noopener noreferrer'
          >
            <span>NOWA_shop</span>
            <span className='text-xs opacity-80'>↗</span>
          </a>
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-black/5 dark:border-white/5 transition-colors duration-500'>
        <p className='text-sm text-gray-500 dark:text-slate-400 leading-relaxed transition-colors duration-500'>
          このようなサイトを制作しております。お仕事のご依頼やお問い合わせは、左側のDMまたはメールからお気軽にご連絡ください！
        </p>
      </div>
    </div>
  );
};