import React from 'react';
import Head from 'next/head';

export default function LawPortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-amber-500 selection:text-white">
      <Head>
        <title>Rishabh Kumar | Legal Portfolio</title>
        <meta name="description" content="Portfolio of Rishabh Kumar, Law Student" />
      </Head>

      {/* Abstract Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-900/10 blur-[100px] mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-[#0a0a0a]/70 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-[90%] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            RK<span className="text-amber-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-slate-400">
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#accolades" className="hover:text-amber-500 transition-colors">Accolades</a>
            <a href="#experience" className="hover:text-amber-500 transition-colors">Experience</a>
            <a href="#articles" className="hover:text-amber-500 transition-colors">Publications</a>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-[90%] mx-auto px-6 pt-32 pb-24">
        
        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Profile / Hero Bento */}
          <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img src="/Rishabh.png" alt="Rishabh Kumar" className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider uppercase">
                  Open to Opportunities
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                  Rishabh Kumar
                </h1>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-lg">
                  BBA.LLB (HONS.) Student at UPES. Specializing in Corporate Law, Merger & Acquisition, & Competition Law.
                </p>
                
                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
                  <a href="#experience" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-amber-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                    Explore Career Path
                  </a>
                  <a href="/RishabhCV.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white/5 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Fast Facts Bento */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col justify-center">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">At a Glance</h2>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm mb-1">Education</p>
                <p className="text-white font-medium text-lg">UPES School of Law (2022-2027)</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Academic Standing</p>
                <p className="text-amber-400 font-bold text-2xl">9.03 CGPA</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Core Focus</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-white/10 rounded-md text-xs text-white">M&A</span>
                  <span className="px-3 py-1 bg-white/10 rounded-md text-xs text-white">Corporate Law</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. About Me Text */}
          <div id="about" className="md:col-span-7 bg-gradient-to-br from-blue-900/10 to-transparent border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">About Me</h2>
            <div className="text-base md:text-lg text-slate-300 font-light leading-relaxed space-y-6">
              <p>
                I am a focused and driven BBA LL.B. (Hons.) student at the University of Petroleum and Energy Studies, specializing in Corporate Law, with a strong inclination towards building a career rooted in legal precision, commercial awareness, and ethical practice.
              </p>
              <p>
                Guided by the principles of perfection, diligence, and continuous learning, I strive to approach every task with analytical depth and professional commitment. My academic journey has equipped me with a solid foundation in corporate governance, mergers & acquisitions, competition law, securities regulation, and contract drafting, complemented by a keen interest in real-world legal problem-solving.
              </p>
              <p>
                I actively seek opportunities that allow me to translate legal theory into practical insight, contribute meaningfully to professional environments, and grow under experienced mentorship. I believe in delivering quality over quantity, maintaining attention to detail, and upholding integrity in all professional engagements.
              </p>
              <p className="font-medium text-amber-500 pt-2">
                📌 Let’s connect and grow through learning, law, and purpose.
              </p>
            </div>
          </div>

          {/* 4. Accolades & Achievements - ALIGNMENT FIXED */}
          <div id="accolades" className="md:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm flex flex-col">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">Accolades</h2>
            <div className="space-y-6">
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-amber-500/10 p-2 rounded-lg text-amber-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-md mb-1">Academic Scholarship</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Awarded for Academic Year 2023 – 2026</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-md mb-1">Moot Court Competitions</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">University level (2025) & CPJ, GGSIPU, Delhi (2024)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-md mb-1">Himalaya Calling Summit</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Presented "Leadership Initiatives in Valley" (2024)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-purple-500/10 p-2 rounded-lg text-purple-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-md mb-1">National Service Scheme</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Active participation & organization</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Experience Architecture</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">Upcoming · Aug 2026</span>
              <h3 className="text-2xl font-bold text-white mb-2">Corporate Team Intern</h3>
              <p className="text-slate-400 font-medium">Luthra & Luthra Law Offices India, New Delhi</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">Upcoming · Jul 2026</span>
              <h3 className="text-2xl font-bold text-white mb-2">Intern</h3>
              <p className="text-slate-400 font-medium">JSA, Advocates & Solicitors, New Delhi</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-2 block">Completed · Jan 2026</span>
              <h3 className="text-xl font-bold text-white mb-2">General Corporate Team Intern</h3>
              <p className="text-slate-400 font-medium">Aekom Legal, New Delhi</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-2 block">Completed · Sep 2025</span>
              <h3 className="text-xl font-bold text-white mb-2">Insolvency & Bankruptcy Law Intern</h3>
              <p className="text-slate-400 font-medium">Harshit Khare Law Offices, New Delhi</p>
            </div>
            
          </div>
        </div>

        {/* Publications Section */}
        <div id="articles" className="mt-32 mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-white/10 flex-grow"></div>
            <h2 className="text-3xl font-bold text-white">Publications & Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <a href="https://juscholars.com/demergers-and-value-unlocking-the-conglomerate-split-trend/" target="_blank" rel="noopener noreferrer" className="group block relative bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-4">Nov 2025</p>
              <h3 className="text-lg font-bold text-white mb-8 group-hover:text-amber-500 transition-colors">Demergers and Value Unlocking: The Conglomerate Split Trend</h3>
              <p className="text-sm text-slate-400">Juscholars</p>
            </a>

            <a href="https://taxguru.in/corporate-law/merger-control-india-cci-companies-act-competition-act.html" target="_blank" rel="noopener noreferrer" className="group block relative bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-4">Jul 2025</p>
              <h3 className="text-lg font-bold text-white mb-8 group-hover:text-amber-500 transition-colors">Merger Control in India Analysis of CCI Regulatory Framework under CA, 2013</h3>
              <p className="text-sm text-slate-400">Taxguru</p>
            </a>

            <a href="https://taxguru.in/corporate-law/corporate-governance-csr-indias-evolving-mandate.html" target="_blank" rel="noopener noreferrer" className="group block relative bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-4">Jul 2025</p>
              <h3 className="text-lg font-bold text-white mb-8 group-hover:text-amber-500 transition-colors">Corporate Governance & CSR - India's Evolving Mandate</h3>
              <p className="text-sm text-slate-400">Taxguru</p>
            </a>

            <a href="https://www.flipkart.com/law-relating-inheritance-succession-wills-waqf/p/itm65440acca7b31?pid=9789368845164" target="_blank" rel="noopener noreferrer" className="group block relative bg-[#111] border border-white/10 p-6 rounded-2xl hover:border-amber-500/50 transition-all cursor-pointer">
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase mb-4">Book Chapter</p>
              <h3 className="text-lg font-bold text-white mb-8 group-hover:text-amber-500 transition-colors">Streedhan & Women's Right to Property</h3>
              <p className="text-sm text-slate-400">Book Rivers</p>
            </a>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050505] py-16 text-center">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10 text-sm font-medium">
            
            <a href="mailto:Riskr2003@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Riskr2003@gmail.com
            </a>
            
            <a href="https://www.linkedin.com/in/rishabhkumar211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              linkedin.com/in/rishabhkumar211
            </a>
            
            <a href="tel:+919525486162" className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400 transition-all shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              +91 9525486162
            </a>
            
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Rishabh Kumar. Built for the modern web.
          </p>
        </div>
      </footer>
    </div>
  );
}