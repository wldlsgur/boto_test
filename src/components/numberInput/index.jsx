import React from 'react';
import { useNumberInput } from './hooks';

const NumberInput = () => {
  const { value, handleInputValue } = useNumberInput();

  return (
    <section>
      <h1>
        2. input을 만들고 그 입력창에는 숫자만 입력이 가능하게 하고 표시되는 내용에는 ,를 포함해서
        표시할 수 있게 하여 제출해주세요 (해당 입력창 타입은 double 타입을 입력할 수 있습니다.)
      </h1>
      <input
        type='number'
        onChange={handleInputValue}
      />
      <p>결과 : {value}</p>
    </section>
  );
};

export default NumberInput;
