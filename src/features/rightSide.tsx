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
            className='text-[#01689A] hover:underline font-medium'
            target='_blank' 
            rel='noopener noreferrer'
          >
            むんきちゃん
          </a>
          {' '}と{' '}
          <a 
            href='https://booth.pm/ja/items/7543853' 
            className='text-[#01689A] hover:underline font-medium'
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
              className='px-3 py-1 bg-[#01689A]/10 text-[#01689A] rounded-full text-sm font-medium border border-[#01689A]/20 transition-all hover:bg-[#01689A]/20'
            >
              {like}
            </span>
          ))}
        </div>

        <p className='mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase'>Works</p>
        <p className='text-base text-[#212121] leading-relaxed'>
          <a 
            href='https://nogiwa.booth.pm/' 
            className='text-[#01689A] hover:underline font-medium'
            target='_blank' 
            rel='noopener noreferrer'
          >
            NOWA_shop
          </a>
          の制作をお手伝いしたりしています。ぜひぜひ～！！
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-black/5'>
        <p className='text-sm text-gray-500 leading-relaxed'>
          このようなサイトを制作しております。お仕事のご依頼やお問い合わせは、左側のDMまたはメールからお気軽にご連絡ください！
        </p>
      </div>
    </div>
  );
};