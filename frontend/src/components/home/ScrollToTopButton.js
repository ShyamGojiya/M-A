import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      
    >
      <HiArrowUp className={`fixed bottom-4 right-4 bg-lime-300 text-5xl max-sm:text-3xl hover:bg-green-500 hover:text-black text-black font-bold p-2 rounded-full shadow z-30 ${
        showButton ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}/>
    </button>
  );
};

export default ScrollToTopButton;