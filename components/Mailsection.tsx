'use client'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Mailsection = () => {
 const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Grab the data from the form
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const senderEmail = formData.get('email');
    const message = formData.get('message');

    // 2. Format the email body
    const emailBody = `Hi Piyush,\n\n${message}\n\n---\nSender Details:\nName: ${name}\nEmail: ${senderEmail}`;
    
    // 3. Build the specific URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello.piyush@gmail.com&su=New Connection Initiated by ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;
    
    // 4. Calculate the center of the screen for the floating window
    const popupWidth = 800;
    const popupHeight = 600;
    
    // Get the exact center coordinates of whatever monitor the user is viewing from
    const left = (window.innerWidth / 2) - (popupWidth / 2) + window.screenX;
    const top = (window.innerHeight / 2) - (popupHeight / 2) + window.screenY;
    
    // 5. Open the floating popup window!
    window.open(
      gmailUrl, 
      'GmailCompose', 
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden py-24">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5E35F2]/20 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 z-10">
        
        <div className="flex flex-col justify-center">
          <span className="text-[#5E35F2] font-mono text-sm tracking-widest uppercase mb-5 block">
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            Lets build something <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5E35F2] to-[#EAAEF2]">
              extraordinary.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-md mb-12 font-light">
            Ready to bring your vision to life? Drop a message below to discuss the web engineering,.
          </p>

          <div className="flex flex-col gap-6">
            {/* Standard mailto link for direct icon clicks */}
            <a href="https://github.com/Piyush-D-E-V" className="flex items-center gap-5 group w-fit">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#5E35F2]/20 group-hover:border-[#5E35F2] transition-all duration-300 shadow-lg">
                <i className="ri-github-fill text-4xl text-neutral-400 group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">GitHub</p>
                <p className="text-white font-mono text-lg">Piyush-D-E-V</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/piyush-mina" className="flex items-center gap-5 group w-fit">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#EAAEF2]/20 group-hover:border-[#EAAEF2] transition-all duration-300 shadow-lg">
                <i className="ri-linkedin-fill text-4xl text-neutral-400 group-hover:text-white transition-colors"></i>
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Linked In</p>
                <p className="text-white font-mono text-lg">Piyush Mina</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-[#120F17]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

          <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#5E35F2] focus:bg-white/10 focus:ring-4 focus:ring-[#5E35F2]/10 transition-all duration-300 font-light"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Your Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#5E35F2] focus:bg-white/10 focus:ring-4 focus:ring-[#5E35F2]/10 transition-all duration-300 font-light"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#EAAEF2] focus:bg-white/10 focus:ring-4 focus:ring-[#EAAEF2]/10 transition-all duration-300 resize-none font-light"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full bg-linear-to-r from-[#5E35F2] to-[#EAAEF2] hover:shadow-[0_0_30px_rgba(94,53,242,0.4)] text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 group"
            >
              Initialize Connection
              <i className="ri-send-plane-fill text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Mailsection