import Image from 'next/image'
import React from 'react'

const Heroitem = () => {
  return (
    <div>
         <Image
                  className="absolute -top-3 z-30"
                  src="/images/arrow.png"
                  alt="idCard"
                  width={260}
                  height={260}
                />
    </div>
  )
}

export default Heroitem