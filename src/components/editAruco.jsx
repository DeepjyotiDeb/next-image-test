import Image from 'next/image';
import React from 'react';

export const EditAruco = () => {
  return (
    <div>
      <Image src={rem2} alt='test1' width={200} height={200} unoptimized />
      <Image src={rem3} alt='test1' width={200} height={200} unoptimized />
    </div>
  );
};
