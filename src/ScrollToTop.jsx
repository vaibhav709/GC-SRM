import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const eventsSection = document.getElementById('events-section');
      const homeSection = document.getElementById('home-section');
      
      if (eventsSection && homeSection) {
        const eventsRect = eventsSection.getBoundingClientRect();
        const homeRect = homeSection.getBoundingClientRect();

        if (eventsRect.top <= 0 && homeRect.bottom <= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            backgroundColor: 'black',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <FaArrowUp color="white" size={24} />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;