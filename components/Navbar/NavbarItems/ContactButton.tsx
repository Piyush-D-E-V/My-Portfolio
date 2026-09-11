"use client";

export default function ContactButton() {
  const handleContactClick = () => {
    // 1. Build the Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=piyush140705@gmail.com&su=New Connection Initiated`;
    
    // 2. Define the size of the floating window
    const popupWidth = 800;
    const popupHeight = 600;
    
    // 3. Calculate the exact center of the user's screen
    const left = (window.innerWidth / 2) - (popupWidth / 2) + window.screenX;
    const top = (window.innerHeight / 2) - (popupHeight / 2) + window.screenY;
    
    // 4. Spawn the floating, app-like popup window
    window.open(
      gmailUrl, 
      'GmailCompose', 
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`
    );
  };

  return (
    <button
      type="button"
      onClick={handleContactClick}
      className="relative group inline-flex items-center justify-center outline-none bg-transparent border-none p-0 cursor-pointer"
    >
      {/* 1. The Light Source (Behind the glass) */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5E35F2] via-[#a364f2] to-[#EAAEF2] opacity-70 blur-[20px] group-hover:opacity-100 group-hover:blur-[25px] transition-all duration-500 scale-95 group-hover:scale-105"></div>

      {/* 2. The Hollow Glass Shell */}
      <div className="relative flex items-center gap-3 px-8 py-3.5 rounded-full 
        bg-white/5 backdrop-blur-xl border border-white/20 
        shadow-[inset_0_2px_15px_rgba(255,255,255,0.2),inset_0_-2px_15px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.5)] 
        active:scale-95 transition-all duration-300 overflow-hidden"
      >
        
        {/* 3. The Specular Highlights (Sharp glass reflections) */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* 4. Text & Icon Content */}
        <span className="relative z-10 text-white font-medium tracking-wide text-sm flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]">
          Contact me
          
          {/* Paper-plane send icon to match the action */}
          <svg 
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M22 2L11 13"></path>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </span>

      </div>
    </button>
  );
}