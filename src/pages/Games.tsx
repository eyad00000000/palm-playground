
import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import GameCard from '../components/ui/GameCard';

const Games = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample games data
  const allGames = [
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
    },
    {
      id: '5',
      title: 'Palm Oasis',
      description: 'A relaxing simulation game where you build and nurture your own desert oasis.',
      imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop',
      category: 'Simulation'
    },
    {
      id: '6',
      title: 'Sahara Survival',
      description: 'Test your survival skills in this challenging adventure through the world's most dangerous desert.',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop',
      category: 'Survival'
    },
    {
      id: '7',
      title: 'Green Horizons',
      description: 'Build and manage a sustainable ecosystem in this environmentally-conscious city builder.',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      category: 'Simulation'
    },
    {
      id: '8',
      title: 'Dune Wars',
      description: 'Command your forces in strategic battles across vast desert landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop',
      category: 'Strategy'
    }
  ];
  
  const categories = ['All', 'Adventure', 'RPG', 'Racing', 'Strategy', 'Simulation', 'Survival'];
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredGames, setFilteredGames] = useState(allGames);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredGames(allGames);
    } else {
      setFilteredGames(allGames.filter(game => game.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          
          <div className="wrapper relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-balance mb-6">Our Games</h1>
              <p className="text-xl text-muted-foreground">
                Explore our collection of immersive gaming experiences that will transport you to breathtaking natural worlds.
              </p>
            </div>
          </div>
        </section>
        
        {/* Games Catalog */}
        <section className="py-16 md:py-20">
          <div className="wrapper">
            {/* Category Filters */}
            <div className="mb-12 overflow-x-auto pb-4">
              <div className="flex space-x-2 min-w-min">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary/50 text-foreground hover:bg-secondary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredGames.map(game => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
            
            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-display mb-2">No games found</h3>
                <p className="text-muted-foreground">
                  No games matching the selected category. Try another category.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Upcoming Games */}
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="wrapper">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-balance mb-6">Coming Soon</h2>
              <p className="text-lg text-muted-foreground">
                Take a sneak peek at our upcoming titles that are currently in development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 backdrop-blur-sm">
                    <span className="px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                      Coming Q3 2023
                    </span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop" 
                    alt="Upcoming Game" 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3">Celestial Gardens</h3>
                  <p className="text-muted-foreground mb-4">
                    A mystical puzzle adventure where players nurture fantastical plants to restore balance to a world in peril.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Join Waitlist
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 backdrop-blur-sm">
                    <span className="px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                      Coming Q4 2023
                    </span>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop" 
                    alt="Upcoming Game" 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3">Nomad's Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    An open-world adventure game following a nomadic traveler as they discover ancient secrets across vast landscapes.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Learn More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Platforms Section */}
        <section className="py-16 md:py-20">
          <div className="wrapper">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-balance mb-6">Available Platforms</h2>
              <p className="text-lg text-muted-foreground">
                Our games are available across multiple platforms, allowing you to play wherever you prefer.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">PC</h3>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">Console</h3>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">Mobile</h3>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">VR/AR</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
