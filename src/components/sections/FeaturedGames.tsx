
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GameCard from '../ui/GameCard';

// Sample game data
const games = [
  {
    id: '1',
    title: 'Oasis Quest',
    description: 'Embark on an epic adventure through ancient desert landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop',
    category: 'Adventure'
  },
  {
    id: '2',
    title: 'Emerald Forest',
    description: 'Discover the mysteries hidden within the depths of a magical forest.',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop',
    category: 'RPG'
  },
  {
    id: '3',
    title: 'Desert Runners',
    description: 'Race across stunning dunes in this high-octane driving experience.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
    category: 'Racing'
  },
  {
    id: '4',
    title: 'Valley of Kings',
    description: 'Build and manage your own ancient civilization in this strategy game.',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    category: 'Strategy'
  }
];

const FeaturedGames = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % games.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isDragging]);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + games.length) % games.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % games.length);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    
    if (!sliderRef.current) return;
    
    const itemWidth = sliderRef.current.offsetWidth;
    const scrollPosition = sliderRef.current.scrollLeft;
    const index = Math.round(scrollPosition / itemWidth);
    
    setActiveIndex(Math.max(0, Math.min(games.length - 1, index)));
    
    sliderRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  useEffect(() => {
    if (!sliderRef.current) return;
    
    const itemWidth = sliderRef.current.offsetWidth;
    
    sliderRef.current.scrollTo({
      left: activeIndex * itemWidth,
      behavior: 'smooth'
    });
  }, [activeIndex]);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-lg mb-6 md:mb-0">
            <h2 className="text-balance mb-4">Our Featured Games</h2>
            <p className="text-muted-foreground text-lg">
              Explore our latest and most popular gaming experiences that showcase our commitment to quality and innovation.
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-input bg-background hover:bg-secondary transition-colors"
              aria-label="Previous game"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-input bg-background hover:bg-secondary transition-colors"
              aria-label="Next game"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-hidden snap-x snap-mandatory touch-pan-x"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {games.map((game, index) => (
          <div
            key={game.id}
            className="min-w-full px-4 md:px-8 snap-center"
          >
            <div className="wrapper">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div 
                  className={`order-2 md:order-1 transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4 rounded-full">
                    {game.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold mb-4">{game.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {game.description}
                  </p>
                  <button className="btn-primary">Play Now</button>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="relative overflow-hidden rounded-xl aspect-w-16 aspect-h-10 shadow-2xl">
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {games.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index
                ? 'bg-primary w-6'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
