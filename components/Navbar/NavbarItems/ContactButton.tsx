"use client";

export default function ContactButton() {
  const handleContactClick = () => {
    // 1. Build the Gmail compose URL (pre-filled with your email and a subject)
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
      className="
        rounded-full
        bg-white
        px-5
        py-2.5
        text-sm
        font-medium
        text-black
        transition
        hover:bg-white/90
      "
    >
      Contact me
    </button>
  );
}