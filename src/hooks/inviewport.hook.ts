import React, { useState, useEffect } from 'react';

const useIsInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current as HTMLElement);

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
};

export default useIsInViewport;
