import Image from 'next/image'
import React from 'react'

const HerotagIcon = () => {
   return (
      <div style={{ animation: 'slideInLeft 4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
        <style>
          {`
            @keyframes slideInLeft {
              from {
                transform: translateX(-100vw);
              }
              to {
                transform: translateX(0);
              }
            }
          `}
        </style>
        <Image
          src="/images/tag2.png"
          alt="tagIcon"
          width={400}
          height={400}
        />
      </div>
    )
}

export default HerotagIcon