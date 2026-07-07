import React, { useState } from 'react';
import Head from 'next/head';

export default function EditorialPortfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [engageOpen, setEngageOpen] = useState(false);

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSendCorrespondence = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message before sending.');
      return;
    }

    const mailSubject = subject || `Correspondence from ${name}`;
    const mailBody = `${message}\n\n—\nFrom: ${name}\nEmail: ${email}`;

    const mailtoLink = `mailto:Riskr2003@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      <Head>
        <title>Rishabh Kumar | Corporate Counsel</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');
          
          .font-serif { font-family: 'Cormorant Garamond', serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          
          /* Smooth scrolling */
          html { scroll-behavior: smooth; }
          
          /* Custom Input styling for the form */
          input, textarea {
            background: transparent;
            border: none;
            border-bottom: 1px solid #D1CCC3;
            outline: none;
            width: 100%;
            padding: 8px 0;
            font-size: 14px;
            color: #1C1C1C;
            transition: border-color 0.3s ease;
          }
          input:focus, textarea:focus {
            border-bottom: 1px solid #A3875F;
          }
          input::placeholder, textarea::placeholder {
            color: #999;
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-[#F7F5F2] text-[#1C1C1C] font-sans selection:bg-[#A3875F] selection:text-white">
        
        {/* Hero Section — full-bleed image with overlaid nav and copy */}
        <header className="relative min-h-screen flex flex-col">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop&grayscale=true"
              alt="Colonnade"
              className="w-full h-full object-cover grayscale"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Light cream wash so dark serif text stays readable top to bottom */}
            <div className="absolute inset-0 bg-[#F7F5F2]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F2] via-[#F7F5F2]/40 to-transparent"></div>
          </div>

          {/* Fallback color layer, sits behind the image so the section never goes blank */}
          <div className="absolute inset-0 -z-10 bg-[#E5E0D8]"></div>

          {/* Navigation (fixed — stays visible over the image and the rest of the page) */}
          <nav className="fixed w-full top-0 z-50 bg-[#F7F5F2]/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-xl font-serif tracking-wide text-[#1C1C1C]">
                Rishabh<span className="font-semibold">Kumar</span>
              </div>

              <div className="hidden lg:flex space-x-10 text-[10px] font-semibold tracking-[0.2em] text-[#333] uppercase">
                <a href="#about" className="hover:text-black transition-colors">About</a>
                <a href="#experience" className="hover:text-black transition-colors">Experience</a>
                <a href="#publications" className="hover:text-black transition-colors">Publications</a>
                <a href="#recognition" className="hover:text-black transition-colors">Recognition</a>
                <a href="#contact" className="hover:text-black transition-colors">Contact</a>
              </div>

              <div className="relative">
                <button
                  onClick={() => setEngageOpen((prev) => !prev)}
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase border border-[#1C1C1C]/30 bg-[#F7F5F2]/70 backdrop-blur-sm px-4 py-2 hover:bg-black hover:text-white transition-all flex items-center gap-2"
                >
                  Engage <span className={`text-[8px] transition-transform ${engageOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>

                {engageOpen && (
                  <>
                    {/* Click-away backdrop */}
                    <div className="fixed inset-0 z-40" onClick={() => setEngageOpen(false)}></div>
                    <div className="absolute right-0 mt-2 w-56 bg-[#F7F5F2] border border-[#E5E0D8] shadow-lg z-50 flex flex-col">
                      <a
                        href="mailto:Riskr2003@gmail.com"
                        className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1C1C1C] hover:bg-[#E5E0D8] transition-colors border-b border-[#E5E0D8]"
                      >
                        Email
                      </a>
                      <a
                        href="tel:+919525486162"
                        className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1C1C1C] hover:bg-[#E5E0D8] transition-colors border-b border-[#E5E0D8]"
                      >
                        Call
                      </a>
                      <a
                        href="https://linkedin.com/in/rishabhkumar211"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1C1C1C] hover:bg-[#E5E0D8] transition-colors border-b border-[#E5E0D8]"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="/RishabhCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#1C1C1C] hover:bg-[#E5E0D8] transition-colors"
                      >
                        Download CV
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>

          {/* Eyebrow strip */}
          <div className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-24">
            <div className="flex items-center gap-2 pb-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#444]">
              <span className="text-[#A3875F]">§</span> PORTFOLIO — MMXXVI
            </div>
          </div>

          {/* Hero copy, anchored to the bottom of the image */}
          <div className="relative z-20 flex-1 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

                {/* Left column — bio + actions */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <p className="text-sm leading-relaxed text-[#333] max-w-xs">
                    Legal scholar and researcher shaping a practice at the intersection of corporate strategy, dispute resolution and regulatory nuance.
                  </p>
                  <div className="flex flex-col gap-3 w-full sm:w-auto sm:max-w-xs">
                    <a href="#contact" className="bg-[#1C1C1C] text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-8 py-4 flex justify-between items-center gap-6 hover:bg-[#333] transition-colors">
                      Retain Counsel <span>↗</span>
                    </a>
                    <a href="/RishabhCV.pdf" target="_blank" rel="noopener noreferrer" download className="border border-[#1C1C1C]/40 bg-[#F7F5F2]/70 backdrop-blur-sm text-[#1C1C1C] text-[10px] font-semibold tracking-[0.2em] uppercase px-8 py-4 text-center hover:bg-[#E5E0D8] transition-colors">
                      View Dossier
                    </a>
                  </div>
                </div>

                {/* Right column — name + tagline */}
                <div className="lg:col-span-8">
                  <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#444]">
                    <span>CH. 1</span>
                    <span className="w-8 h-[1px] bg-[#1C1C1C]/30"></span>
                    <span>DEHRADUN, INDIA</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-serif leading-none mb-6 text-[#111]">
                    Rishabh <br /> <span className="italic">Kumar.</span>
                  </h1>
                  <div className="flex items-center gap-4">
                    <p className="font-serif italic text-xl md:text-2xl text-[#333]">
                      Aspiring Corporate Counsel
                    </p>
                    <div className="flex-1 h-[1px] bg-[#1C1C1C]/30"></div>
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#444] mt-4">
                    BBA.LLB (HONS.) — UPES — CLASS OF 2027
                  </p>
                </div>

              </div>
            </div>
          </div>
        </header>

        {/* Marquee / Ticker */}
        <div className="bg-[#16181A] text-[#B89F7D] py-4 overflow-hidden border-y border-[#333]">
          <div className="text-[10px] font-semibold tracking-[0.3em] uppercase whitespace-nowrap flex gap-12 justify-center">
            <span>DISPUTE RESOLUTION</span>
            <span className="text-[#A3875F]">+</span>
            <span>MERGERS & ACQUISITIONS</span>
            <span className="text-[#A3875F]">+</span>
            <span>COMPETITION LAW</span>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3875F] mb-4">
                § 01 — ABOUT
              </div>
              <p className="font-serif italic text-[#777]">A brief on the counsel.</p>
            </div>
            
            <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-10 text-[#1C1C1C]">
                A researcher's mind trained on India's most complex commercial disputes.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-[#444] mb-16">
                <div>
                  <p className="text-justify">
                    <span className="float-left text-6xl font-serif text-[#A3875F] pr-3 pt-2 leading-[0.7]">C</span>
                    urrently pursuing a five-year integrated BBA.LLB (Hons.) at School of Law, UPES with a CGPA of 9.03, I have spent the last three years apprenticing across some of the most respected chambers and firms in New Delhi — from insolvency benches to arbitration corridors, and a public administration secretariat besides.
                  </p>
                  <p className="mt-4 text-justify">
                    My academic journey has equipped me with a solid foundation in corporate governance, mergers & acquisitions, competition law, securities regulation, and contract drafting, complemented by a keen interest in real-world legal problem-solving.
                  </p>
                  <p className="mt-4 text-justify">
                    I actively seek opportunities that allow me to translate legal theory into practical insight, contribute meaningfully to professional environments, and grow under experienced mentorship. I believe in delivering quality over quantity, maintaining attention to detail, and upholding integrity in all professional engagements. I am always open to internships, research opportunities, collaborations, and discussions in the fields of corporate law, commercial transactions, and business advisory.
                  </p>
                </div>
                <div>
                  <p className="pt-2 text-justify">
                    I publish, moot, and write — because a good lawyer is, before anything else, a careful reader.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#E5E0D8]">
                <div className="p-6 md:border-r border-[#E5E0D8]">
                  <div className="text-4xl font-serif mb-2 text-[#1C1C1C]">9.03</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777]">CGPA - BBA.LLB<br/>(HONS.)</div>
                </div>
                <div className="p-6 md:border-r border-[#E5E0D8]">
                  <div className="text-4xl font-serif mb-2 text-[#1C1C1C]">09</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777]">LEGAL<br/>INTERNSHIPS</div>
                </div>
                <div className="p-6 md:border-r border-[#E5E0D8]">
                  <div className="text-4xl font-serif mb-2 text-[#1C1C1C]">04</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777]">PUBLISHED<br/>WORKS</div>
                </div>
                <div className="p-6">
                  <div className="text-4xl font-serif mb-2 text-[#1C1C1C]">2027</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777]">EXPECTED<br/>CALL TO THE BAR</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4">
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3875F] mb-4">
                § 02 — CHAMBERS & FIRMS
              </div>
              <h2 className="text-4xl font-serif leading-tight mb-8">
                A record of practice,<br/><span className="italic">deliberately built.</span>
              </h2>
              <p className="text-xs text-[#777] mb-8 leading-relaxed pr-8">
                Selected internships across corporate, insolvency, dispute resolution and public administration — each engagement chosen to deepen a specific area of doctrine.
              </p>
              
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop&grayscale=true" 
                  alt="Corporate Corridor" 
                  className="w-full aspect-[3/4] object-cover grayscale opacity-90"
                />
                <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] mt-4">
                  PLATE I — THE CORPORATE CORRIDOR
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              
              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10 pt-4">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-2">AUG 2026</div>
                  <div className="inline-block bg-[#A3875F] text-white text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-1">INCOMING</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Luthra & Luthra Law Offices India <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Corporate Team — Incoming Intern  <span className="mx-2">•</span> NEW DELHI
                  </div>
                  <ul className="text-sm text-[#555] space-y-2">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Joining the corporate practice for an upcoming internship engagement.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-2">JUL 2026</div>
                  <div className="inline-block bg-[#A3875F] text-white text-[8px] font-bold tracking-[0.2em] uppercase px-2 py-1">INCOMING</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    JSA, Advocates & Solicitors <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Incoming Intern <span className="mx-2">•</span> NEW DELHI
                  </div>
                  <ul className="text-sm text-[#555] space-y-2">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Upcoming internship with the firm across selected practice groups.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">JAN 2026</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">4 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Aekom Legal <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    General Corporate Team <span className="mx-2">•</span> NEW DELHI
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Researched statutory frameworks governing pharmaceutical companies — the Drugs and Cosmetics Act, the Magic Remedies Act, and Sections 72A/79 of the Income-tax Act.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Drafted an analysis on novation of contracts under Section 62 of the Indian Contract Act, supported by case law.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Prepared compliance checklists under TCCCPR and the IT Act; conducted MCA due diligence and statutory-filing review.</li>
                  </ul>
                </div>
              </div>

               <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">SEP 2025</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">4 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Harshit Khare Law Offices <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Insolvency & Bankruptcy Law <span className="mx-2">•</span> NEW DELHI
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Researched avoidance transactions and the scope of NCLT discretion in approving resolution plans below liquidation value.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Interpreted key provisions of the IBC, 2016 — Sections 7, 9, 14, 18, 43 and 50.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Drafted applications and replies for CIRP and liquidation proceedings before the NCLT.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">JUL 2025</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">4 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Kathpalia & Partners <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Dispute Resolution <span className="mx-2">•</span> NEW DELHI
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Researched Sections 31, 33, 34 and 37 of the Arbitration and Conciliation Act, 1996, including grounds for challenge and appellate mechanisms in land-acquisition disputes under the National Highways Act.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Drafted civil suits for recovery of money and mesne profits under Section 2(12) CPC, affidavits under EPC agreements, and replies to CALA award challenges.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Conducted research on computation of mesne profits, drawing on relevant judicial precedent.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">JUN 2025</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">4 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Department of Finance, Secretariat <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Government of Bihar <span className="mx-2">•</span> PATNA
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Assisted in legal research on financial statutes, government resolutions, budgetary rules and fiscal policy applicable to the State of Bihar.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Supported senior officers in drafting and vetting legal notes and office memoranda.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Gained exposure to inter-departmental coordination and Secretariat policy formulation.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">JUL 2024</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">4 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Nyaysarthak <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Pro Bono Initiative <span className="mx-2">•</span> NEW DELHI
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Drafted divorce petitions, sale deeds, and summary suits under Order XXXVII CPC, 1908.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Prepared legal notices under Section 138 of the Negotiable Instruments Act, 1881, for client representation.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">JUN 2024</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">4 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Advocate Sanjiv Kr. Sinha <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    District & Sessions Court <span className="mx-2">•</span> PATNA
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Assisted in drafting pleadings, maintaining case records, and preparing chronology of events for hearing preparation.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Researched ex-parte proceedings and grounds for setting them aside under Order IX Rules 6–13 CPC, 1908, along with the Limitation Act, 1963 and condonation of delay under Section 5.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Drafted ex-parte proceeding notes and demand notices with precise procedural compliance.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 pb-4">
                <div className="w-32 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">JUN 2023</div>
                  <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">8 WEEKS</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-[#1C1C1C] flex items-center gap-2 mb-2">
                    Kaushalya Foundation <span className="text-sm text-[#A3875F]">↗</span>
                  </h3>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                    Social Intern <span className="mx-2">•</span> PATNA
                  </div>
                  <ul className="text-sm text-[#555] space-y-3">
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Assisted in development projects facilitating access to government schemes for Farmer Producer Organizations (FPOs).</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Undertook registration of FPOs under the PMFME Scheme to access government-backed financial and technical support.</li>
                    <li className="flex gap-3"><span className="text-[#A3875F]">―</span> Prepared policy-oriented presentations and liaised between local communities and the organization on welfare initiatives.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E5E0D8]">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3875F] mb-4">
                  § 03 — ACADEMIA
                </div>
                <h2 className="text-4xl font-serif leading-tight mb-8">
                  Education, in<br/><span className="italic">longform.</span>
                </h2>
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop&grayscale=true" 
                    alt="Library Books" 
                    className="w-full aspect-square object-cover grayscale opacity-90"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-center">
                
                <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10 pt-4">
                  <div className="w-32 shrink-0">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777]">2022 - 2027</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">BBA.LLB (Hons.)</h3>
                    <div className="text-xs text-[#555] mb-2">School of Law, UPES</div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">CGPA 9.03</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] pb-10 mb-10">
                  <div className="w-32 shrink-0">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777]">2022</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">Higher Senior Secondary - CBSE</h3>
                    <div className="text-xs text-[#555] mb-2">Shemford Futuristic School</div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">75%</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-32 shrink-0">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#777]">2020</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">Senior Secondary - CBSE</h3>
                    <div className="text-xs text-[#555] mb-2">Kendriya Vidyalaya Sangathan</div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">87%</div>
                  </div>
                </div>

              </div>
           </div>
        </section>

        {/* Publications (Dark Section) */}
        <section id="publications" className="bg-[#121415] text-[#F7F5F2] py-24 px-6 border-y border-[#333]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-8">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#888] mb-4">
                  § 04 — PUBLICATIONS
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white">
                  Writing that argues, <span className="italic">precisely.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 flex items-end">
                <p className="text-xs text-[#888] leading-relaxed">
                  Selected articles and a book chapter, published across journals and doctrinal presses on corporate law and gendered property rights.
                </p>
              </div>
            </div>

            <div className="flex flex-col border-t border-[#333]">
              
              <a href="https://juscholars.com/demergers-and-value-unlocking-the-conglomerate-split-trend/" target="_blank" className="flex flex-col md:flex-row gap-6 border-b border-[#333] py-10 hover:bg-[#1A1D1E] transition-colors group cursor-pointer px-4 -mx-4">
                <div className="w-16 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#666]">01</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-white mb-3">Demergers and Value Unlocking: The Conglomerate Split Trend</h3>
                  <div className="text-sm text-[#888]">Juscholars</div>
                </div>
                <div className="md:text-right flex flex-col md:items-end justify-between">
                  <span className="text-[#888] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F] mb-1">JOURNAL ARTICLE</div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">NOV 2025</div>
                  </div>
                </div>
              </a>

              <a href="https://taxguru.in/corporate-law/merger-control-india-cci-companies-act-competition-act.html" target="_blank" className="flex flex-col md:flex-row gap-6 border-b border-[#333] py-10 hover:bg-[#1A1D1E] transition-colors group cursor-pointer px-4 -mx-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-white mb-3">Merger Control in India — Analysis of the CCI Regulatory Framework under CA, 2013</h3>
                  <div className="text-sm text-[#888]">Taxguru</div>
                </div>
                <div className="md:text-right flex flex-col md:items-end justify-between">
                  <span className="text-[#888] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F] mb-1">JOURNAL ARTICLE</div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">JUL 2025</div>
                  </div>
                </div>
              </a>

              <a href="https://taxguru.in/corporate-law/corporate-governance-csr-indias-evolving-mandate.html" target="_blank" className="flex flex-col md:flex-row gap-6 border-b border-[#333] py-10 hover:bg-[#1A1D1E] transition-colors group cursor-pointer px-4 -mx-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-white mb-3">Corporate Governance & CSR — India's Evolving Mandate</h3>
                  <div className="text-sm text-[#888]">Taxguru</div>
                </div>
                <div className="md:text-right flex flex-col md:items-end justify-between">
                  <span className="text-[#888] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F] mb-1">JOURNAL ARTICLE</div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">JUL 2025</div>
                  </div>
                </div>
              </a>

              <a href="https://www.flipkart.com/law-relating-inheritance-succession-wills-waqf/p/itm65440acca7b31?pid=9789368845164&lid=LSTBOK9789368845164YMGRZT&marketplace=FLIPKART" target="_blank" className="flex flex-col md:flex-row gap-6 border-b border-[#333] py-10 hover:bg-[#1A1D1E] transition-colors group cursor-pointer px-4 -mx-4">
                <div className="w-16 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#666]">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-white mb-3">Streedhan & Women's Right to Property</h3>
                  <div className="text-sm text-[#888]">Law Relating to Inheritance, Succession, Wills and Waqf - Book Rivers</div>
                </div>
                <div className="md:text-right flex flex-col md:items-end justify-between">
                  <span className="text-[#888] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#A3875F] mb-1">BOOK CHAPTER</div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666]">ISBN 978-93-6884-516-4</div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* FULLY UPDATED Recognition Section */}
        <section id="recognition" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#E5E0D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-8">
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3875F] mb-4">
                  § 05 — RECOGNITION & CRAFT
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#1C1C1C]">
                  Moots, awards, and the <br/><span className="italic">quieter honours.</span>
                </h2>
              </div>
              <div className="lg:col-span-4 flex items-end">
                <p className="text-xs text-[#777] leading-relaxed">
                  The record built outside the classroom — competitions, scholarships, certifications and elected responsibilities.
                </p>
              </div>
          </div>

          {/* Subcategory: Moots */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">
              <span className="text-sm">⚖</span> MOOT COURT & ADVOCACY
            </div>
            
            <div className="border-t border-[#E5E0D8]">
              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] py-6">
                <div className="w-24 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#777] mt-1">2025</div>
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-1">6th ICFAI Inter-University Moot Court Competition</h4>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777]">Quarter Finalist</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] py-6">
                <div className="w-24 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#777] mt-1">2024</div>
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-1">6th National Moot Court Competition - CPJ, GGSIPU</h4>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777]">Quarter Finalist</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] py-6">
                <div className="w-24 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#777] mt-1">2024</div>
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-1">XIX Internal Moot Court Competition</h4>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777]">Ranked 45th Speaker among 420+ Participants</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] py-6">
                <div className="w-24 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#777] mt-1">2023</div>
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-1">XVIII Internal Moot Court Competition</h4>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777]">Ranked 80th Speaker - Top 100</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] py-6">
                <div className="w-24 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#777] mt-1">2023</div>
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-1">Internal Mediation Competition</h4>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777]">Participant</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 border-b border-[#E5E0D8] py-6">
                <div className="w-24 shrink-0 text-[10px] font-bold tracking-[0.2em] text-[#777] mt-1">2022</div>
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-1">Novice Moot Court Competition</h4>
                  <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777]">Participant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subcategory: Accolades */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">
              <span className="text-sm">⚑</span> ACCOLADES
            </div>
            
            <div className="border-t border-[#E5E0D8]">
              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Student Academic Scholarship</h4>
                  <p className="text-xs text-[#777]">Awarded for sustained academic performance at School of Law, UPES.</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">2023 - 2026</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Research Paper Presenter - Global Himalayan Summit</h4>
                  <p className="text-xs text-[#777]">Presented 'Leadership Initiatives in Himalayan Region vis-à-vis The Women of Garhwal Valley'.</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">2024</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Ranked #1 Blog Writer - Vanmahotsava</h4>
                  <p className="text-xs text-[#777]">National Service Scheme editorial recognition.</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">2023</div>
              </div>
            </div>
          </div>

          {/* Subcategory: Certifications */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">
              <span className="text-sm">▤</span> CERTIFICATIONS
            </div>
            
            <div className="border-t border-[#E5E0D8]">
              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Certificate Course in Business Law</h4>
                  <p className="text-xs text-[#777]">London School of Finance</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">IN PROGRESS</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Business Ethics: Exploring Big Data and Tax Avoidance</h4>
                  <p className="text-xs text-[#777]">University of Leeds</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">JAN 2026</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Business Law and The Fashion Industry</h4>
                  <p className="text-xs text-[#777]">Bloomsbury Publishing</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">NOV 2025</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">SEBI Investor Awareness Test</h4>
                  <p className="text-xs text-[#777]">SEBI - Score 49 / 50</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">SEP 2025</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Basics of Mergers & Acquisitions</h4>
                  <p className="text-xs text-[#777]">Khaitan & Co. at UPES</p>
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#A3875F]">OCT 2024</div>
              </div>
            </div>
          </div>

          {/* Subcategory: Positions of Responsibility */}
          <div>
            <div className="flex items-center gap-4 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-[#A3875F]">
              <span className="text-sm">☖</span> POSITIONS OF RESPONSIBILITY
            </div>
            
            <div className="border-t border-[#E5E0D8]">
              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-[#E5E0D8] py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Student Placement Representative</h4>
                  <p className="text-xs text-[#777]">School of Law, UPES - 2022 — 2027</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 py-6">
                <div>
                  <h4 className="text-lg font-serif text-[#1C1C1C] mb-2">Committee Member, Moot Court Association</h4>
                  <p className="text-xs text-[#777]">School of Law, UPES - 2023 — 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Correspondence Section */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             
             {/* Left Column (Text & Links) */}
             <div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#A3875F] mb-6">
                  § 06 — CORRESPONDENCE
                </div>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#1C1C1C] mb-8">
                  Let us <span className="italic">correspond.</span>
                </h2>
                <p className="text-sm leading-relaxed text-[#555] mb-12">
                  Whether you are considering an internship offer, a research collaboration, a moot invitation, or simply a conversation about corporate practice — I would be glad to hear from you.
                </p>

                <div className="flex flex-col border-t border-[#E5E0D8]">
                  <a href="mailto:Riskr2003@gmail.com" className="flex items-center justify-between border-b border-[#E5E0D8] py-6 group hover:bg-[#E5E0D8]/30 transition-colors">
                    <div className="flex gap-4">
                      <span className="text-[#A3875F] mt-1">✉</span>
                      <div>
                        <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">ELECTRONIC MAIL</div>
                        <div className="text-sm font-serif text-[#1C1C1C]">Riskr2003@gmail.com</div>
                      </div>
                    </div>
                    <span className="text-[#777] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>

                  <a href="tel:+919525486162" className="flex items-center justify-between border-b border-[#E5E0D8] py-6 group hover:bg-[#E5E0D8]/30 transition-colors">
                    <div className="flex gap-4">
                      <span className="text-[#A3875F] mt-1">✆</span>
                      <div>
                        <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">TELEPHONE</div>
                        <div className="text-sm font-serif text-[#1C1C1C]">+91 95254 86162</div>
                      </div>
                    </div>
                    <span className="text-[#777] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>

                  <a href="https://linkedin.com/in/rishabhkumar211" target="_blank" className="flex items-center justify-between border-b border-[#E5E0D8] py-6 group hover:bg-[#E5E0D8]/30 transition-colors">
                    <div className="flex gap-4">
                      <span className="text-[#A3875F] mt-1">in</span>
                      <div>
                        <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] mb-1">LINKEDIN</div>
                        <div className="text-sm font-serif text-[#1C1C1C]">linkedin.com/in/rishabhkumar211</div>
                      </div>
                    </div>
                    <span className="text-[#777] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </div>
             </div>

             {/* Right Column (Form) */}
             <div className="flex flex-col justify-end pt-12 lg:pt-0">
               <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div>
                     <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] block mb-2">FULL NAME</label>
                     <input type="text" placeholder="Your name" value={formData.name} onChange={handleChange('name')} />
                   </div>
                   <div>
                     <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] block mb-2">EMAIL</label>
                     <input type="email" placeholder="you@firm.com" value={formData.email} onChange={handleChange('email')} />
                   </div>
                 </div>
                 
                 <div>
                   <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] block mb-2">SUBJECT</label>
                   <input type="text" placeholder="Re: internship / research / speaking" value={formData.subject} onChange={handleChange('subject')} />
                 </div>

                 <div>
                   <label className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] block mb-2">MESSAGE</label>
                   <textarea rows={4} placeholder="Kindly share the particulars..." value={formData.message} onChange={handleChange('message')}></textarea>
                 </div>

                 <div className="pt-4">
                   <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#777] mb-4">
                     REPLIES WITHIN 48 HOURS - <br/>CONFIDENTIALITY ASSURED
                   </div>
                   <button type="button" onClick={handleSendCorrespondence} className="bg-[#1C1C1C] text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#333] transition-colors">
                     SEND CORRESPONDENCE ➝
                   </button>
                 </div>
               </form>
             </div>

           </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#121415] text-[#F7F5F2] pt-20 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-[#333] pb-16">
              
              <div className="md:col-span-6">
                <h3 className="text-3xl font-serif text-white mb-4">Rishabh <span className="italic">Kumar.</span></h3>
                <p className="text-xs text-[#888] leading-relaxed max-w-sm">
                  Legal scholar and researcher shaping a practice at the intersection of corporate strategy, dispute resolution and regulatory nuance.
                </p>
              </div>

              <div className="md:col-span-3">
                <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#555] mb-4">REACH</div>
                <ul className="text-xs text-[#888] space-y-3 font-serif">
                  <li><a href="mailto:Riskr2003@gmail.com" className="hover:text-white transition-colors">Riskr2003@gmail.com</a></li>
                  <li><a href="tel:+919525486162" className="hover:text-white transition-colors">+91 95254 86162</a></li>
                  <li><a href="https://linkedin.com/in/rishabhkumar211" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>

              <div className="md:col-span-3">
                <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#555] mb-4">CHAMBERS LOCATED</div>
                <ul className="text-xs text-[#888] space-y-3 font-serif">
                  <li>Dehradun, India</li>
                  <li>CLASS OF 2027</li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-bold tracking-[0.2em] uppercase text-[#555]">
              <div>© 2026 RISHABH KUMAR . ALL RIGHTS RESERVED</div>
              <div>PORTFOLIO SET IN CORMORANT GARAMOND</div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}