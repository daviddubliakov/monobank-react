// Utils
import getNumberWithSpaces from '../utils/getNumberWithSpaces';

const CURRENCY_SYMBOL = '₴';

const LeftSideInfo = ({ sumAmount }) => {
  return (
    <div className='w-1/2 bg-[#f2f4f5]'>
      <img src='./images/logo_short.png' className='mt-[42px] mb-6 mx-auto' />
      <div className='mb-[20px] mt-[93.5px] mx-auto w-[fit-content]'>
        <div className='relative pb-1'>
          <img src='./images/jar_bg.png' width='215px' />
          <div className="bottom-[14px] left-[128px] z-[2] rounded-[36px] absolute bg-[length:100%_100%] w-[56px] h-[56px] bg-[url('https://jar-img.monobank.com.ua/N92.30.0021591888.jpg?ts=2023-07-20T14:33:15.758636825')]"></div>
          <div className='absolute top-[50%] left-[51%] scale-[.97] -translate-x-1/2 -translate-y-1/2'>
            <img
              src='./images/uah_50.png'
              className='max-w-[155px] w-[155px] h-[203px]'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <span className='text-sm font-medium leading-4'>Сергій С. збирає</span>
      </div>
      <div className='flex justify-center mt-1'>
        <span className='text-[22px] font-black leading-[normal]'>
          На поточний RUSORIZ
        </span>
      </div>
      <div className='flex justify-center mt-3 px-[20px]'>
        <span className='text-sm font-medium text-center leading-[140%]'>
          Постійна банка для закупівлі FPV. Наша мета — купувати хоча б 100
          дронів на день та передавати швидко на фронт!
        </span>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='px-5 py-3 bg-white rounded-2xl'>
          <div className='flex gap-4'>
            <img src='./icons/collected.svg' alt='Collected' />
            <div className='flex flex-col'>
              <span className='text-sm text-[#808080] leading-[17px]'>
                Накопичено
              </span>
              <span className='font-medium'>
                {getNumberWithSpaces(sumAmount)} {CURRENCY_SYMBOL}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideInfo;
