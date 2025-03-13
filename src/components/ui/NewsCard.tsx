
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category?: string;
}

const NewsCard = ({ id, title, excerpt, imageUrl, date, author, category }: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`} className="group block">
      <article className="overflow-hidden glass-card transition-all duration-300 hover:shadow-xl">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 left-4"
            >
              <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full">
                {category}
              </span>
            </motion.div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <time dateTime={date}>{date}</time>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          
          <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {excerpt}
          </p>
          
          <motion.span 
            className="inline-flex items-center text-sm font-medium text-primary transition-transform"
            whileHover={{ x: 5 }}
          >
            Read More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
