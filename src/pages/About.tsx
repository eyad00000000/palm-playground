
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in game development, Sarah founded Nakhla Games with a vision to create immersive nature-inspired gaming experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'David Chen',
      role: 'Creative Director',
      bio: 'David brings his passion for visual storytelling and art direction to lead our creative team in developing unique gaming worlds.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Lead Developer',
      bio: 'Sophia oversees all technical aspects of our games, ensuring smooth gameplay experiences across all platforms.',
      imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Marcus Williams',
      role: 'Game Designer',
      bio: 'Marcus specializes in creating engaging gameplay mechanics that keep players coming back for more.',
      imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          
          <div className="wrapper relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-balance mb-6">About Nakhla Games</h1>
              <p className="text-xl text-muted-foreground">
                We are a passionate team of game developers dedicated to creating immersive gaming experiences inspired by the beauty of nature and the thrill of adventure.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-primary/5 transform -rotate-2"></div>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" 
                    alt="Nakhla Games Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-balance mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2015, Nakhla Games began with a simple mission: to create games that connect players with the beauty of the natural world while providing engaging gameplay experiences.
                  </p>
                  <p>
                    The name "Nakhla" is inspired by the palm tree, symbolizing growth, resilience, and the natural world that inspires our creative vision. Our team combines expertise in game development with a passion for nature and storytelling.
                  </p>
                  <p>
                    Over the years, we've grown from a small indie studio to a respected developer known for our unique art direction, immersive worlds, and attention to detail. We remain committed to our founding principles while continuously pushing the boundaries of what's possible in game development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="wrapper">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-balance mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8">
                At Nakhla Games, we strive to create meaningful gaming experiences that inspire a sense of wonder and connection with the natural world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="glass-card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Pushing the boundaries of gameplay and storytelling to create unique experiences.
                  </p>
                </div>
                
                <div className="glass-card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">Quality</h3>
                  <p className="text-muted-foreground">
                    Delivering polished, high-quality games that exceed player expectations.
                  </p>
                </div>
                
                <div className="glass-card p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">Impact</h3>
                  <p className="text-muted-foreground">
                    Creating games that foster appreciation for the natural world and environmental awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 md:py-20">
          <div className="wrapper">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-balance mb-6">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                The talented individuals behind Nakhla Games who bring our vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16 md:py-20 bg-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          
          <div className="wrapper relative z-10 text-center">
            <h2 className="text-balance mb-6 max-w-2xl mx-auto">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our growing team. If you love games and want to make a difference, we'd love to hear from you.
            </p>
            <a 
              href="#" 
              className="btn-primary"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
