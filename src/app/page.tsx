"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedText";
import { MapPin } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const heroImageSrc = mounted && theme === 'summer' ? '/summer-hero.png' : '/hero-image.png';

  return (
    <div className="min-h-screen bg-background text-foreground selection-coral overflow-x-hidden pt-20 transition-colors duration-500">
      {/* Hero Section */}
      <header id="home" className="relative h-[90svh] min-h-[700px] w-full flex flex-col items-center justify-start pt-10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Animated Hero Image as Background */}
            <motion.div 
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: theme === 'summer' ? 1 : 0.8 }}
               transition={{ duration: 3, ease: "easeOut" }}
               className="absolute inset-0"
            >
               <motion.img 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                  src={heroImageSrc} 
                  alt="Builder of ideas, debugger of chaos"
                  className="w-full h-full object-cover object-center mix-blend-normal"
               />
            </motion.div>
            
            {/* CSS-based conditional gradients to avoid React hydration mismatches */}
            <div className="absolute inset-0 winter-gradient bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_80%)]"></div>
            <div className="absolute inset-0 winter-gradient bg-gradient-to-b from-black/20 via-transparent to-background"></div>
            
            <div className="absolute inset-0 summer-gradient bg-gradient-to-b from-transparent via-transparent to-background"></div>
            <div className="absolute inset-0 summer-gradient bg-gradient-to-t from-transparent via-transparent to-background/90"></div>
            <div className="absolute inset-0 summer-gradient bg-white/20 mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center mt-[-2rem] md:mt-[-4rem]">
            {/* Animated Title */}
            <div className="overflow-hidden pb-[2vw] -mb-[2vw]">
              <h1 className="text-[12vw] leading-tight font-normal text-foreground text-center tracking-tighter flex drop-shadow-md">
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

            <FadeIn delay={0.8} className="mt-4 md:mt-8">
              <div className="text-muted text-xl md:text-3xl font-light text-center max-w-3xl">
                <span className="summer-tagline-text font-medium text-lg md:text-2xl block min-h-[60px] md:min-h-[80px] drop-shadow-md px-4 py-2 rounded-xl">
                  <TypewriterEffect text={"Turning coffee into code, and chaos into canvases.\nBuilder of ideas, debugger of chaos."} delay={1.5} />
                </span>
              </div>
            </FadeIn>
        </div>

        <div className="absolute bottom-12 left-8 md:left-12 flex items-center gap-5 group z-10">
            <div className="hidden md:flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-card border-2 border-background flex items-center justify-center text-lg shadow-sm">📱</div>
              <div className="w-10 h-10 rounded-full bg-card border-2 border-background flex items-center justify-center text-lg shadow-sm">☕</div>
              <div className="w-10 h-10 rounded-full bg-card border-2 border-background flex items-center justify-center text-lg shadow-sm">💻</div>
            </div>
            <p className="text-xs md:text-sm font-medium leading-tight text-muted group-hover:text-foreground transition-colors">
                Flutter & Native Android<br/>Specialist.
            </p>
        </div>

        <div className="absolute bottom-12 right-8 md:right-12 text-right z-10">
            <a href="mailto:poojabokdia1995@gmail.com" className="text-foreground font-medium hover:text-accent transition-colors border-b-2 border-foreground hover:border-accent pb-1">
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
            <h2 className="text-4xl md:text-7xl font-medium leading-[1.05] tracking-tight text-foreground max-w-5xl mb-24">
                Bridging the gap between technical complexity and <span className="text-muted">seamless user experience.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Professional */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-card border border-border-strong rounded-[2.5rem] p-12 h-full min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:border-accent transition-all duration-500 shadow-sm">
                    <div className="absolute top-10 right-10 bg-background text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-muted border border-border-strong">
                        The Drive
                    </div>
                    <div className="mt-auto relative z-10">
                        <p className="text-lg text-muted mb-8 font-light leading-relaxed">
                          Expert in leading development teams and delivering high-quality native and cross-platform mobile applications. Strong focus on optimizing performance, UI/UX, and robust architectures.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['Flutter', 'Android SDK', 'Kotlin', 'Java', 'Dart', 'React', 'Firebase', 'GraphQL', 'AWS'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-background text-foreground/80 rounded-lg text-xs font-mono border border-border-strong">{skill}</span>
                            ))}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2 text-accent">
                            8+ Years.
                        </h3>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">
                            Proven Success.
                        </h3>
                    </div>
                </div>
              </FadeIn>

              {/* Card 2: Personal */}
              <FadeIn delay={0.3} className="h-full">
                <div className="bg-card border border-border-subtle rounded-[2.5rem] p-12 h-full min-h-[520px] flex flex-col justify-between relative overflow-hidden group hover:border-accent transition-all duration-500 shadow-sm">
                    <div className="absolute top-10 right-10 bg-background text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest text-muted border border-border-strong">
                        The Calm
                    </div>
                    <div className="mt-auto">
                        <p className="text-lg text-muted mb-8 font-light leading-relaxed">
                          Beyond the screen, I love baking, reading, crafting, and painting. I am formally trained in Watercolors and Calligraphy. It&apos;s my way of finding peace amidst the digital chaos.
                        </p>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2 text-foreground">
                            Brush strokes.
                        </h3>
                        <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-muted group-hover:text-foreground transition-colors">
                            Fresh bakes.
                        </h3>
                    </div>
                </div>
              </FadeIn>
          </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-subtle">
          <FadeIn>
            <div className="flex justify-between items-end mb-20 border-b border-border-strong pb-10">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Experience</h2>
                <span className="hidden md:block text-muted text-xs font-medium uppercase tracking-widest">2017 &mdash; Present</span>
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-12">
              <StaggerItem>
                  <div className="group border border-border-strong hover:border-accent/50 bg-card rounded-3xl p-8 md:p-12 transition-all duration-500 relative overflow-hidden shadow-sm">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                          <div>
                              <h3 className="text-3xl font-bold text-foreground tracking-tight">Techtinium Technologies</h3>
                              <p className="text-accent font-mono text-sm mt-2">Senior Software Engineer</p>
                          </div>
                          <div className="text-muted font-mono text-sm">2019 &mdash; Present</div>
                      </div>
                      <div className="text-foreground/80 leading-relaxed space-y-4 font-light text-lg">
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
                  <div className="group border border-border-strong hover:border-accent/50 bg-card rounded-3xl p-8 md:p-12 transition-all duration-500 relative overflow-hidden shadow-sm">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-foreground rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                          <div>
                              <h3 className="text-3xl font-bold text-foreground tracking-tight">The Appsolutes</h3>
                              <p className="text-foreground font-mono text-sm mt-2">Software Engineer</p>
                          </div>
                          <div className="text-muted font-mono text-sm">2017 &mdash; 2019</div>
                      </div>
                      <div className="text-foreground/80 leading-relaxed space-y-4 font-light text-lg">
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
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-subtle">
          <FadeIn>
            <div className="flex justify-between items-end mb-20 border-b border-border-strong pb-10">
                <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-accent">How Can I Help</h2>
                <span className="hidden md:block text-muted text-xs font-medium uppercase tracking-widest">The Unique Edge</span>
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
                  <div className="bg-card border border-border-strong hover:border-accent/50 rounded-[2rem] p-10 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                      <div className="text-4xl mb-8 group-hover:scale-110 transition-transform origin-bottom-left">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                      <p className="text-muted font-light leading-relaxed">{item.desc}</p>
                      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                </StaggerItem>
              ))}
          </StaggerContainer>
      </section>

      {/* Education & Achievements */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border-subtle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
                <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Education.</h3>
                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg text-foreground font-medium">Master of Science (MSc. IT)</h4>
                        <p className="text-muted font-light">MOP Vaishnav College for Women &mdash; CGPA: 9.164</p>
                        <p className="text-foreground/60 text-sm mt-1">First Rank in University of Madras (2016-2018)</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-foreground font-medium">Bachelor of Commerce (Bcom. ISM)</h4>
                        <p className="text-muted font-light">MOP Vaishnav College for Women &mdash; CGPA: 8.620</p>
                        <p className="text-foreground/60 text-sm mt-1">Second Rank in University of Madras (2013-2016)</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.2}>
                <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Certifications & Achievements.</h3>
                <ul className="space-y-4 text-muted font-light">
                    <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div> Associate Android Developer | Google (2022-23)</li>
                    <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div> Foundations of Project Management | Google (Oct 2023)</li>
                    <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div> President of PRISM Club (2015-16), MOP Vaishnav College</li>
                </ul>
            </FadeIn>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <footer id="contact" className="relative pt-48 pb-32 px-6 md:px-12 border-t border-border-subtle">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
              
              <div className="flex-1">
                  <FadeIn>
                    <h2 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-foreground mb-12 select-none">
                        LET&apos;S<br />TALK.
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <div className="flex flex-col gap-6">
                        <a href="mailto:poojabokdia1995@gmail.com" className="break-all text-xl md:text-4xl font-semibold hover:text-accent transition-all w-fit">
                            poojabokdia1995@gmail.com
                        </a>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 text-muted">
                            <p className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                London, UK
                            </p>
                        </div>
                    </div>
                  </FadeIn>
              </div>

              <FadeIn delay={0.3} className="flex gap-4 md:mb-6">
                  <a href="https://www.linkedin.com/in/pooja-bokdia-390a35105/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-border-strong rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:-translate-y-2 font-bold font-sans">In</a>
                  <a href="https://github.com/poojabokdia" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-border-strong rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:-translate-y-2 font-bold font-sans">Gh</a>
              </FadeIn>
          </div>

          <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between text-muted text-[10px] font-bold uppercase tracking-widest">
              <p>&copy; {new Date().getFullYear()} Pooja Bokdia. All rights reserved.</p>
              <div className="flex gap-10 mt-6 md:mt-0">
                  <span className="hover:text-foreground transition-colors cursor-pointer">Crafted with coffee</span>
              </div>
          </div>
      </footer>
    </div>
  );
}
