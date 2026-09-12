import Image from 'next/image'
import React from 'react'

const Heroarrow = () => {
  return (
    <div style={{ animation: 'slideInRight 4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
      <style>
        {`
          @keyframes slideInRight {
            from {
              transform: translateX(100vw);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
      <Image
        src="/images/arrow.png"
        alt="arrow"
        width={260}
        height={260}
      />
    </div>
  )
}

export default Heroarrow