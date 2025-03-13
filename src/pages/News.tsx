
import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NewsCard from '../components/ui/NewsCard';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample news data
  const allNews = [
    {
      id: '1',
      title: 'Nakhla Games Announces New Title',
      excerpt: 'Our studio is excited to reveal our upcoming game that will take players on an unforgettable adventure.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop',
      date: 'June 15, 2023',
      author: 'Sarah Johnson',
      category: 'Announcement'
    },
    {
      id: '2',
      title: 'Behind the Scenes: The Making of Desert Runners',
      excerpt: 'Get an exclusive look at the development process of our latest racing game.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
      date: 'May 22, 2023',
      author: 'Michael Chen',
      category: 'Development'
    },
    {
      id: '3',
      title: 'Nakhla Games at GDC 2023',
      excerpt: 'Our team will be presenting at the Game Developers Conference this year. Come meet us!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop',
      date: 'April 8, 2023',
      author: 'David Rodriguez',
      category: 'Event'
    },
    {
      id: '4',
      title: 'Community Spotlight: Player-Created Oasis Quest Mods',
      excerpt: 'Check out these amazing mods created by our talented community for Oasis Quest.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800&auto=format&fit=crop',
      date: 'March 15, 2023',
      author: 'Emma Wilson',
      category: 'Community'
    },
    {
      id: '5',
      title: 'Emerald Forest Receives Game of the Year Nomination',
      excerpt: "We're honored to announce that Emerald Forest has been nominated for Game of the Year.",
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop',
      date: 'February 28, 2023',
      author: 'Sarah Johnson',
      category: 'Award'
    },
    {
      id: '6',
      title: 'Game Development Workshop for Beginners',
      excerpt: 'Nakhla Games will be hosting a virtual workshop for aspiring game developers.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
      imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=800&auto=format&fit=crop',
      date: 'January 10, 2023',
      author: 'Michael Chen',
      category: 'Event'
    }
  ];
  
  const categories = ['All', 'Announcement', 'Development', 'Event', 'Community', 'Award'];
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState(allNews);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredNews(allNews);
    } else {
      setFilteredNews(allNews.filter(news => news.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          
          <div className="wrapper relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-balance mb-6">Latest News</h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest announcements, updates, and stories from Nakhla Games.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured News */}
        <section className="py-16 md:py-20">
          <div className="wrapper">
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop" 
                    alt="Featured News" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <time dateTime="2023-07-01">July 1, 2023</time>
                    <span className="mx-2">•</span>
                    <span>Sarah Johnson</span>
                  </div>
                  
                  <h2 className="font-display text-3xl font-semibold mb-4">
                    Nakhla Games Celebrates 5th Anniversary with Special Announcement
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Join us in celebrating five years of creating immersive gaming experiences as we unveil our most ambitious project yet and share our vision for the future.
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                    Read Full Article
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
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
            
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map(news => (
                <NewsCard key={news.id} {...news} />
              ))}
            </div>
            
            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-display mb-2">No news found</h3>
                <p className="text-muted-foreground">
                  No news matching the selected category. Try another category.
                </p>
              </div>
            )}
            
            {/* Pagination */}
            {filteredNews.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-md border border-input bg-background hover:bg-secondary transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 rounded-md border border-input bg-primary text-primary-foreground">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-md border border-input bg-background hover:bg-secondary transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-md border border-input bg-background hover:bg-secondary transition-colors">
                    3
                  </button>
                  <button className="p-2 rounded-md border border-input bg-background hover:bg-secondary transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="wrapper">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-balance mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest news and updates from Nakhla Games delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
