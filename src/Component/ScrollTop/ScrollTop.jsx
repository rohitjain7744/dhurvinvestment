import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // useLocation hook se hume current URL path milta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi pathname (URL) change hoga, window top par scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component screen par kuch draw nahi karta
};

export default ScrollToTop;