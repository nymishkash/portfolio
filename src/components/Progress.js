import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFromTop = window.scrollY;
    const scrollPercentage = (scrollFromTop / totalHeight) * 100;
    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={progressBarContainerStyle}>
      <div style={{ ...progressBarStyle, width: `${scrollPosition}%` }}></div>
    </div>
  );
};

const progressBarContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '5px',
  backgroundColor: '#e0e0e0',
  zIndex: 99,
};

const progressBarStyle = {
  height: '100%',
  backgroundColor: '#3b5998',
  transition: 'width 0.25s',
};

export default ScrollProgressBar;
