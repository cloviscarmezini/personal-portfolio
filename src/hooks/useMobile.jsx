import { useEffect, useState } from 'react'

export function useMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 500px)");
    
      setIsMobile(mediaQuery.matches);
    
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }
    
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
    }, []);

    return { isMobile };
}
