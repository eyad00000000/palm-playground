
import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedGames from '../components/sections/FeaturedGames';
import GameCard from '../components/ui/GameCard';
import NewsCard from '../components/ui/NewsCard';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample news data
const newsItems = [
  {
    id: '1',
    title: 'Nakhla Games Announces New Title',
    excerpt: 'Our studio is excited to reveal our upcoming game that will take players on an unforgettable adventure.',
    imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop',
    date: 'June 15, 2023',
    author: 'Sarah Johnson'
  },
  {
    id: '2',
    title: 'Behind the Scenes: The Making of Desert Runners',
    excerpt: 'Get an exclusive look at the development process of our latest racing game.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
    date: 'May 22, 2023',
    author: 'Michael Chen'
  },
  {
    id: '3',
    title: 'Nakhla Games at GDC 2023',
    excerpt: 'Our team will be presenting at the Game Developers Conference this year. Come meet us!',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
    date: 'April 8, 2023',
    author: 'David Rodriguez'
  }
];

// Sample featured games
const featuredGames = [
  {
    id: '5',
    title: 'Palm Oasis',
    description: 'A relaxing simulation game where you build and nurture your own desert oasis.',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop',
    category: 'Simulation'
  },
  {
    id: '6',
    title: 'Sahara Survival',
    description: 'Test your survival skills in this challenging adventure through the world's most dangerous desert.',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop',
    category: 'Survival'
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedGames />
        
        {/* Popular Games */}
        <section className="py-20 bg-secondary/20">
          <div className="wrapper">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-balance mb-2">Popular Titles</h2>
                <p className="text-muted-foreground">Discover our most loved games by players around the world.</p>
              </div>
              <Link
                to="/games"
                className="group inline-flex items-center mt-4 md:mt-0 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View All Games
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGames.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
              
              <div className="glass-card flex flex-col items-center justify-center text-center p-8 h-full">
                <h3 className="text-xl font-display mb-3">Looking for more?</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our full catalog of immersive gaming experiences.
                </p>
                <Link to="/games" className="btn-secondary">
                  Explore All Games
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest News */}
        <section className="py-20">
          <div className="wrapper">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-balance mb-2">Latest News</h2>
                <p className="text-muted-foreground">Stay updated with the latest announcements from our studio.</p>
              </div>
              <Link
                to="/news"
                className="group inline-flex items-center mt-4 md:mt-0 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View All News
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          
          <div className="wrapper relative z-10 flex flex-col items-center text-center">
            <h2 className="text-balance mb-6 max-w-2xl">Ready to Embark on Your Next Gaming Adventure?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Join our community of gamers and be the first to experience our latest releases and updates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/games" className="btn-primary">
                Explore Our Games
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
