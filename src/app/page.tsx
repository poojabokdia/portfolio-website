"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedText";
import { MapPin } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function TypewriterEffect({ text, delay = 0 }: { text: string; delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      delay: delay,
      duration: text.length * 0.05,
      ease: "linear",
    });
    return controls.stop;
  }, [count, delay, text.length]);

  return (
    <span className="whitespace-pre-wrap text-left inline-block">
      <motion.span>{displayText}</motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1] }}
        className="inline-block text-[#FF6B50] font-bold ml-1"
      >
        |
      </motion.span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] selection-coral overflow-x-hidden pt-20">
      {/* Hero Section */}
      <header id="home" className="relative h-[90svh] min-h-[700px] w-full flex flex-col items-center justify-center pt-10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Animated Hero Image as Background */}
            <motion.div 
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 0.35 }}
               transition={{ duration: 3, ease: "easeOut" }}
               className="absolute inset-0"
            >
               <motion.img 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  src="/hero-image.png" 
                  alt="Builder of ideas, debugger of chaos"
                  className="w-full h-full object-cover object-center mix-blend-lighten"
               />
            </motion.div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_80%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]"></div>
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center">
            {/* Animated Title */}
            <div className="overflow-hidden pb-[2vw] -mb-[2vw]">
              <h1 className="text-[12vw] leading-tight font-bold text-white text-center tracking-tighter flex">
                  {"Pooja Bokdia.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </h1>
            </div>
            <FadeIn delay={0.8}>
              <div className="text-[#888888] text-xl md:text-3xl mt-6 font-light text-center max-w-3xl">
                <span className="text-white font-medium text-lg md:text-2xl mt-4 block min-h-[60px] md:min-h-[80px]">
                  <TypewriterEffect text={"Turning coffee into code, and chaos into canvases.\nBuilder of ideas, debugger of chaos."} delay={1.5} />
                </span>
              </div>
            </FadeIn>
        </div>

        <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-5 group z-10">
            <div className="hidden md:flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#050505] flex items-center justify-center text-lg">📱</div>
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#050505] flex items-center justify-center text-lg">☕</div>
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-[#050505] flex items-center justify-center text-lg">💻</div>
            </div>
            <p className="text-xs md:text-sm font-medium leading-tight text-[#888888] group-hover:text-white transition-colors">
                Flutter & Native Android<br/>Specialist.
            </p>
        </div>

        <div className="absolute bottom-12 right-8 md:right-12 text-right z-10">
            <a href="mailto:poojabokdia1995@gmail.com" className="text-white font-medium hover:text-[#FF6B50] transition-colors border-b-2 border-white hover:border-[#FF6B50] pb-1">
                Say Hello
            </a>
        </div>
      </header>

      {/* About The Chaos */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-[#FF6B50] animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#666666] uppercase">The Engineer & The Artist</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white max-w-5xl mb-24">
                Bridging the gap between technical complexity and <span className="text-[#666666]">seamless user experience.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Professional */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#222222] border border-[#333] rounded-[2.5rem] p-12 h-full min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:border-[#555] transition-all duration-500">
                    <div className="absolute top-10 right-10 bg-[#050505] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#888888] border border-[#333333]">
                        The Drive
                    </div>
                    <div className="mt-auto relative z-10">
                        <p className="text-lg text-[#888] mb-8 font-light leading-relaxed">
                          Expert in leading development teams and delivering high-quality native and cross-platform mobile applications. Strong focus on optimizing performance, UI/UX, and robust architectures.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Flutter', 'Android SDK', 'Kotlin', 'Java', 'Dart', 'React', 'Firebase', 'GraphQL', 'AWS'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-[#111] text-[#ccc] rounded-lg text-xs font-mono border border-[#333]">{skill}</span>
                            ))}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2 text-[#FF6B50]">
                            8+ Years.
                        </h3>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                            Proven Success.
                        </h3>
                    </div>
                </div>
              </FadeIn>

              {/* Card 2: Personal */}
              <FadeIn delay={0.3} className="h-full">
                <div className="bg-[#111111] rounded-[2.5rem] p-12 h-full min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:bg-[#161616] transition-all duration-500">
                    <div className="absolute top-10 right-10 bg-[#1a1a1a] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-[#888888] border border-[#333333]">
                        The Calm
                    </div>
                    <div className="mt-auto">
                        <p className="text-lg text-[#888] mb-8 font-light leading-relaxed">
                          Beyond the screen, I love baking, reading, crafting, and painting. I am formally trained in Watercolors and Calligraphy. It&apos;s my way of finding peace amidst the digital chaos.
                        </p>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2 text-white">
                            Brush strokes.
                        </h3>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#444444] group-hover:text-[#666666] transition-colors">
                            Fresh bakes.
                        </h3>
                    </div>
                </div>
              </FadeIn>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
          <FadeIn>
            <div className="flex justify-between items-end mb-20 border-b border-[#222222] pb-10">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FF6B50]">Experience</h2>
                <span className="hidden md:block text-[#444444] text-xs font-medium uppercase tracking-widest">2017 &mdash; Present</span>
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-12">
              <StaggerItem>
                  <div className="group border border-[#222] hover:border-[#444] bg-[#0a0a0a] rounded-3xl p-8 md:p-12 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B50] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                          <div>
                              <h3 className="text-3xl font-bold text-white tracking-tight">Techtinium Technologies</h3>
                              <p className="text-[#FF6B50] font-mono text-sm mt-2">Senior Software Engineer</p>
                          </div>
                          <div className="text-[#666] font-mono text-sm">2019 &mdash; Present</div>
                      </div>
                      <div className="text-[#888] leading-relaxed space-y-4 font-light text-lg">
                          <p>
                              • <strong>Myxtur:</strong> Developed a personalized shopping app in Flutter integrating Shopify&apos;s GraphQL APIs. Achieved 100k+ downloads across Android and iOS with custom product personalization components.
                          </p>
                          <p>
                              • <strong>Rheo AI:</strong> Engineered cross-platform apps (Android, iOS, Windows) using Flutter for an AI-driven company to monitor factory workflows and transform operations.
                          </p>
                          <p>
                              • Mentored a team of 4 developers, expertly applying state management (Provider, Riverpod, Bloc), and managing projects with Jira & Asana.
                          </p>
                      </div>
                  </div>
              </StaggerItem>

              <StaggerItem>
                  <div className="group border border-[#222] hover:border-[#444] bg-[#0a0a0a] rounded-3xl p-8 md:p-12 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                          <div>
                              <h3 className="text-3xl font-bold text-white tracking-tight">The Appsolutes</h3>
                              <p className="text-white font-mono text-sm mt-2">Software Engineer</p>
                          </div>
                          <div className="text-[#666] font-mono text-sm">2017 &mdash; 2019</div>
                      </div>
                      <div className="text-[#888] leading-relaxed space-y-4 font-light text-lg">
                          <p>
                              • <strong>Club Apps:</strong> Led the end-to-end development and successful launch of Native Android apps (Java/Kotlin) for 50+ diverse associations including RYA and RYA Metrostar.
                          </p>
                          <p>
                              • <strong>Fitvest AI:</strong> Architected and engineered an innovative Android application for a gym, integrating AI capabilities to intelligently schedule workouts and monitor users&apos; health.
                          </p>
                          <p>
                              • <strong>Zoomer:</strong> Developed an educational application, ensuring smooth performance and flawless user experience.
                          </p>
                      </div>
                  </div>
              </StaggerItem>
          </StaggerContainer>
      </section>

      {/* How Can I Help (Value Proposition) */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
          <FadeIn>
            <div className="flex justify-between items-end mb-20 border-b border-[#222222] pb-10">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-[#FF6B50]">How Can I Help</h2>
                <span className="hidden md:block text-[#444444] text-xs font-medium uppercase tracking-widest">The Unique Edge</span>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Scalable Architecture", 
                  desc: "I build native and cross-platform apps designed to grow. Whether it's 1,000 or 100,000+ users, I ensure the underlying architecture (Flutter/Android) remains robust, maintainable, and primed for scale.",
                  icon: "🏗️"
                },
                { 
                  title: "Creative Problem Solving", 
                  desc: "I'm a debugger of chaos. I excel at diving into complex, broken systems, finding the root cause, and engineering elegant, efficient solutions that bridge technical complexity with business needs.",
                  icon: "⚡"
                },
                { 
                  title: "Pixel-Perfect UI/UX", 
                  desc: "As both an engineer and an artist, I have a relentless eye for detail. I translate intricate designs into fluid, beautiful, and intuitively responsive experiences that users genuinely love.",
                  icon: "🎨"
                }
              ].map((item, idx) => (
                <StaggerItem key={idx} className="group">
                  <div className="bg-[#111111] border border-[#222] hover:border-[#FF6B50]/50 rounded-[2rem] p-10 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                      <div className="text-4xl mb-8 group-hover:scale-110 transition-transform origin-bottom-left">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-[#FF6B50] transition-colors">{item.title}</h3>
                      <p className="text-[#888] font-light leading-relaxed">{item.desc}</p>
                      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#FF6B50] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                </StaggerItem>
              ))}
          </StaggerContainer>
      </section>

      {/* Education & Achievements */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Education.</h3>
                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg text-white font-medium">Master of Science (MSc. IT)</h4>
                        <p className="text-[#888] font-light">MOP Vaishnav College for Women &mdash; CGPA: 9.164</p>
                        <p className="text-[#666] text-sm mt-1">First Rank in University of Madras (2016-2018)</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-white font-medium">Bachelor of Commerce (Bcom. ISM)</h4>
                        <p className="text-[#888] font-light">MOP Vaishnav College for Women &mdash; CGPA: 8.620</p>
                        <p className="text-[#666] text-sm mt-1">Second Rank in University of Madras (2013-2016)</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.2}>
                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Certifications & Achievements.</h3>
                <ul className="space-y-4 text-[#888] font-light">
                    <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6B50] mt-2 shrink-0"></div> Associate Android Developer | Google (2022-23)</li>
                    <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6B50] mt-2 shrink-0"></div> Foundations of Project Management | Google (Oct 2023)</li>
                    <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[#FF6B50] mt-2 shrink-0"></div> President of PRISM Club (2015-16), MOP Vaishnav College</li>
                </ul>
            </FadeIn>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <footer id="contact" className="relative pt-48 pb-32 px-6 md:px-12 border-t border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
              
              <div className="flex-1">
                  <FadeIn>
                    <h2 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white mb-12 select-none">
                        LET&apos;S<br />TALK.
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <div className="flex flex-col gap-6">
                        <a href="mailto:poojabokdia1995@gmail.com" className="break-all text-xl md:text-4xl font-semibold hover:text-[#FF6B50] transition-all w-fit">
                            poojabokdia1995@gmail.com
                        </a>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 text-[#666666]">
                            <p className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                London, UK
                            </p>
                        </div>
                    </div>
                  </FadeIn>
              </div>

              <FadeIn delay={0.3} className="flex gap-4 md:mb-6">
                  <a href="https://www.linkedin.com/in/pooja-bokdia-390a35105/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2 font-bold font-sans">In</a>
                  <a href="https://github.com/poojabokdia" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2 font-bold font-sans">Gh</a>
              </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-[#111111] flex flex-col md:flex-row justify-between text-[#333333] text-[10px] font-bold uppercase tracking-widest">
              <p>&copy; {new Date().getFullYear()} Pooja Bokdia. All rights reserved.</p>
              <div className="flex gap-10 mt-6 md:mt-0">
                  <span className="hover:text-[#666666] transition-colors cursor-pointer">Crafted with coffee</span>
              </div>
          </div>
      </footer>
    </div>
  );
}
