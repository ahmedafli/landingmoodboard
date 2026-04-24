import React from 'react';

export default function PremiumAIFeature() {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .font-general { font-family: 'General Sans', sans-serif; }
        .font-satoshi { font-family: 'Satoshi', sans-serif; }
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        .fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://api.fontshare.com/v2/css?f[]=general-sans@600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      
      <div className="bg-white flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 font-satoshi py-24">
        
        {/* Main Content Container */}
        <div className="max-w-7xl w-full flex flex-col items-center relative z-10">
          
          {/* Minimal Header */}
          <div className="text-center mb-16 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl font-general font-bold tracking-tighter text-slate-900 mb-6">
              Reimagine Your Space
            </h1>
            <p className="text-[#f59e0b] text-sm md:text-base font-bold uppercase tracking-[0.4em] opacity-90">
              Upload <span className="text-slate-200 mx-2">•</span> Mask <span className="text-slate-200 mx-2">•</span> Transform
            </p>
          </div>

          {/* The "One Rectangle" Masterpiece */}
          <div className="w-full relative fade-in-up shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] rounded-[3rem] overflow-hidden border border-slate-100 bg-white group p-4 md:p-8" style={{ animationDelay: '0.3s' }}>
            
            {/* Large Transformation Image */}
            <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/dffb1840-b152-4bfc-b71f-99607dcf1d2b/1777068839954-5eed1953/image.png" 
                alt="AI Furniture Placement Transformation"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              />
            </div>

            {/* Subtle AI Badge */}
            <div className="absolute top-10 right-10 md:top-14 md:right-14">
              <div className="glass-card px-4 py-2 md:px-6 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 shadow-sm border border-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-xl text-[#f59e0b] w-4 h-4 md:w-5 md:h-5">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold text-slate-800 tracking-wider uppercase">Powered by Nova AI</span>
              </div>
            </div>

            {/* Interactive Overlay (Visible on Hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Minimal Footer Accents */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12 fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Realistic Textures</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Precision Masking</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Instant Preview</span>
            </div>
          </div>

        </div>

        {/* Background Decorative Element */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#f59e0b]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-slate-100 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
}
