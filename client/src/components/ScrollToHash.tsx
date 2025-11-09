import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToHash() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      const id = hash.replace('#', '');
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
}
