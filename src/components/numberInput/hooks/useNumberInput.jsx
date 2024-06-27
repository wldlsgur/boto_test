import { useState } from 'react';

const useNumberInput = () => {
  const [value, setValue] = useState('');

  const handleInputValue = ({ target }) => {
    const { value } = target;

    if (!value) {
      return setValue('');
    }

    if (value.includes('.')) {
      const [inter, decimal] = value.split('.');
      const convertedInter = parseInt(inter).toLocaleString().toString();

      return setValue(`${convertedInter}.${decimal}`);
    }

    setValue(parseInt(value).toLocaleString().toString());
  };

  return { value, handleInputValue };
};

export default useNumberInput;
