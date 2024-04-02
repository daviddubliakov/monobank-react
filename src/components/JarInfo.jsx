// Core
import { useState } from 'react';

// Components
import LeftSideInfo from './LeftSideInfo';
import RightSideInfo from './RightSideInfo';

const JarInfo = () => {
  const [jarSumAmount, setJarSumAmount] = useState(0);
  const [sumToAdd, setSumToAdd] = useState(0);
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
  });

  const handleAddToSum = (amountToAdd) => {
    const sumResult = amountToAdd + sumToAdd;
    setSumToAdd(sumResult);
  };

  const handleChangeInput = (event, key) => {
    event.preventDefault();

    setFormData({ ...formData, [key]: event.target.value });
  };

  const tooglePaySystem = (event, paySystemName) => {
    event.preventDefault();

    const sumResult = jarSumAmount + sumToAdd;

    setJarSumAmount(sumResult);
    setSumToAdd(0);
    alert(`
      Метод оплати: ${paySystemName};
      Ім'я: ${formData.name || '-'};
      Коментар: ${formData.comment || '-'};
    `);
  };

  return (
    <section className='flex my-4 min-w-full rounded-3xl min-h-[680px] overflow-hidden bg-white'>
      <LeftSideInfo sumAmount={jarSumAmount} />
      <RightSideInfo
        handleAddToSum={handleAddToSum}
        handleChangeInput={handleChangeInput}
        tooglePaySystem={tooglePaySystem}
        sumToAdd={sumToAdd}
        formData={formData}
      />
    </section>
  );
};

export default JarInfo;
