import classNames from 'classnames';
import { useEffect } from 'react';

const MAX_SUM = 29999;
const MIN_SUM = 10;

const RightSideInfo = ({
  sumToAdd,
  formData,
  handleAddToSum,
  handleChangeInput,
  tooglePaySystem,
}) => {
  useEffect(() => {
    const sumToAddElem = document.getElementById('sum-to-add');

    sumToAddElem.oninput = (event) => {
      const unparsedValue = event.srcElement.textContent.split(' ').join('');
      const inputDataNum = Number(unparsedValue);

      if (!isNaN(inputDataNum)) {
        if (inputDataNum > MAX_SUM) {
          handleAddToSum(MAX_SUM);
        } else {
          handleAddToSum(inputDataNum);
        }
      } else {
        handleAddToSum(0);
      }
    };
  }, []);

  return (
    <div className='w-1/2'>
      <div className='flex justify-center mt-[48px] mb-[32px]'>
        <div className='gradient-wrapper'>
          <div className='rounded-[21px] bg-white p-6 m-[3px]'>
            <div className='flex justify-center gap-[7px] items-center'>
              <span className='text-sm font-semibold leading-4'>
                Сума поповнення
              </span>
              <img src='./images/money.png' alt='money' width='16px' />
            </div>
            <div
              className={classNames(
                'flex justify-center pt-5 leading-[normal] text-[#1b1c21]',
                { empty: sumToAdd === 0 },
                { incorrect: sumToAdd > 0 && sumToAdd < MIN_SUM },
              )}
            >
              <div
                className='outline-0 text-[48px] font-bold'
                inputMode='decimal'
                contentEditable
                id='sum-to-add'
              >
                {sumToAdd}
              </div>
              <div className='text-[48px] font-bold'>&nbsp;₴</div>
            </div>
            <div
              id='incorrect-sum-message'
              className='hidden-elem text-[#808080] text-xs mb-[16px] text-center mt-[-6px]'
            >
              Сума повинна бути від 10 ₴ до 29 999 ₴
            </div>
            <div className='flex gap-4'>
              <div
                className='font-medium rounded-2xl flex-1 border border-[#ccc] border-solid h-[42px] flex justify-center items-center text-[#1b1c21] cursor-pointer'
                onClick={() => handleAddToSum(100)}
              >
                +100&nbsp;₴
              </div>
              <div
                className='font-medium rounded-2xl flex-1 border border-[#ccc] border-solid h-[42px] flex justify-center items-center cursor-pointer'
                onClick={() => handleAddToSum(500)}
              >
                +500&nbsp;₴
              </div>
              <div
                className='font-medium rounded-2xl flex-1 border border-[#ccc] border-solid h-[42px] flex justify-center items-center cursor-pointer'
                onClick={() => handleAddToSum(1000)}
              >
                +1&nbsp;000&nbsp;₴
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <form className='flex flex-col w-[340px]'>
          <div className='field border boder-[#ccc] border-solid rounded-2xl h-[58px] px-4 mb-4'>
            <input
              className={classNames('h-[41px] mt-3 outline-0 w-[100%]', {
                active: formData.name.length > 0,
              })}
              type='text'
              onChange={(e) => handleChangeInput(e, 'name')}
              value={formData.name}
            />
            <label className='[transition:all_0.1s_ease] relative top-[-38px] inline-block opacity-60'>
              Ваше ім'я (необов'язково)
            </label>
            <span className='h-2'></span>
          </div>
          <div className='field border boder-[#ccc] border-solid rounded-2xl h-[58px] px-4 mb-4'>
            <input
              className={classNames('h-[41px] mt-3 outline-0 w-[100%]', {
                active: formData.comment.length > 0,
              })}
              type='text'
              onChange={(e) => handleChangeInput(e, 'comment')}
            />
            <label className='[transition:all_0.1s_ease] relative top-[-38px] inline-block opacity-60'>
              Коментар (необов'язково)
            </label>
            <span className='h-2'></span>
          </div>
          <button
            className='flex justify-center bg-black rounded-lg py-[11px] w-full mb-4 hover:bg-[#3c4043]'
            onClick={(e) => tooglePaySystem(e, 'Mono Pay')}
          >
            <img src='./icons/mono_pay.svg' alt='monopay' />
          </button>
          <button
            className='flex justify-center bg-black rounded-lg py-[11px] w-full hover:bg-[#3c4043]'
            onClick={(e) => tooglePaySystem(e, 'Google Pay')}
          >
            <img src='./icons/g_pay.svg' alt='gpay' className='h-[26px]' />
          </button>
          <div className='mt-6 mb-2 border-t-[0.5px] border-solid border-[#ccc]'></div>
          <div className='flex justify-center p-2'>
            <div
              className='flex justify-center gap-2 cursor-pointer'
              onClick={(e) => tooglePaySystem(e, 'Bank card')}
            >
              <img src='./icons/card.svg' alt='card' />
              <span className='text-[#e85e5b] font-semibold text-sm leading-[24px]'>
                Оплатити карткою
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSideInfo;
