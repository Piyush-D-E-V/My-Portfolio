'use client'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const ContactButton = () => {
   const subject = encodeURIComponent("Let's work together");
  const body = encodeURIComponent(
    "Hi Piyush, I found your portfolio and wanted to get in touch."
  );

  return (
    <a
      href={`mailto:piyush140705@gmail.com?subject=${subject}&body=${body}`}
      className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
    >
      Email Me
    </a>
  );
};

export default ContactButton