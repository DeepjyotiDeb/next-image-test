import Image from 'next/image';
import React from 'react';
import rem2 from './../../public/images/authImage.png';
import rem3 from './../../public/images/removeBlue.png';

export default function EditAruco() {
  return (
    <div>
      <Image src={rem2} alt='test1' width={200} height={200} unoptimized />
      <Image src={rem3} alt='test1' width={200} height={200} unoptimized />
    </div>
  );
}
