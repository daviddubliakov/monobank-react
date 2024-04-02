// Utils
import redirectTo from '../utils/redirectTo';

const Footer = () => {
  return (
    <footer className='flex justify-between items-center min-w-full mb-4'>
      <p className='text-white/80 text-xs font-medium'>
        АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від <br />
        20.01.1994, у держреєстрі банків №226
      </p>
      <div className='flex gap-4'>
        <div
          className='px-4 transition duration-200 ease-in-out bg-white/[.08] mt-2 border border-solid border-white border-opacity-40 rounded-2xl h-10 cursor-pointer hover:bg-white/20'
          onClick={() =>
            redirectTo('https://send.monobank.ua/owner.html?sendId=dzBdJ3737')
          }
        >
          <div className='flex items-center justify-center gap-2 h-full'>
            <img src='./icons/cup.svg' alt='Cup' width='16px' height='16px' />
            <span className='font-semibold text-white text-sm'>
              Провести розіграш
            </span>
          </div>
        </div>
        <div
          className='px-4 transition duration-200 ease-in-out bg-white/[.08] mt-2 border border-solid border-white border-opacity-40 rounded-2xl h-10 cursor-pointer hover:bg-white/20'
          onClick={() =>
            redirectTo(
              'https://send.monobank.ua/widget/builder.html?longJarId=NZc6STYSe5P47sw3dfvVoRYbfSnV82&sendId=dzBdJ3737',
            )
          }
        >
          <div className='flex items-center justify-center gap-2 h-full'>
            <img src='./icons/gamepad.svg' alt='Cup' />
            <span className='font-semibold text-white text-sm'>
              Віджет для стрімів
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
