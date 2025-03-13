
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current || !contentRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Subtle parallax effect for background
      backgroundRef.current.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
      
      // Even more subtle effect for content
      contentRef.current.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    if (!contentRef.current) return;
    
    // Animate in the content
    const elements = contentRef.current.querySelectorAll('[data-animate]');
    
    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with game development theme - overlay multiple images */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10">
        <div
          ref={backgroundRef}
          className="absolute inset-0 opacity-10 scale-110"
          style={{
            background: `
              linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
              url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1600&auto=format&fit=crop') right center / cover no-repeat,
              url('https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1600&auto=format&fit=crop') left center / cover no-repeat
            `,
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="wrapper relative z-10">
        <div className="max-w-3xl" ref={contentRef}>
          <span 
            data-animate 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
          >
            Welcome to Nakhla Games
          </span>
          
          <h1 
            data-animate
            className="text-balance mb-6"
          >
            You will love playing with <span className="text-primary">Nakhla</span> Games
          </h1>
          
          <p 
            data-animate
            className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance"
          >
            We create games that connect players with the beauty of nature and the thrill of adventure.
            Our passion drives us to build memorable worlds that captivate and inspire.
          </p>
          
          <div data-animate className="flex flex-wrap gap-4">
            <Link to="/games" className="btn-primary">
              Discover Our Games
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
