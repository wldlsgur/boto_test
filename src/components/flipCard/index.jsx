import React, { useState } from 'react';
import * as S from './style.module.css';

const FlipCard = () => {
  const [isFlip, setIsFlip] = useState(false);

  const handleFlipImg = () => {
    setIsFlip((prev) => !prev);
  };

  return (
    <section className={S.container}>
      <h1>3. 클릭하면 뒤집히는 카드를 구현하여 제출해주세요 (원하는 이미지를 사용하세요)</h1>
      <div
        className={`${S.card} ${isFlip ? S.flip : ''}`}
        onClick={handleFlipImg}
      >
        <img
          src='/front.jpg'
          className={`${S.img} ${S.front}`}
          alt='Front'
        />
        <img
          src='/back.png'
          className={`${S.img} ${S.back}`}
          alt='Back'
        />
      </div>
    </section>
  );
};

export default FlipCard;
