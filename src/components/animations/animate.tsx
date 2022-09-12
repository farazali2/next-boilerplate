import React, { useRef, useState, Children, ReactElement } from 'react';
import useIsInViewport from '@app/hooks/inviewport.hook';

interface IAnimate {
  children: React.ReactElement;
  type: string;
  delay: number;
}

const Animate: React.FC<IAnimate> = ({ children, type, delay }) => {
  const eleRef = useRef(null);
  const inView = useIsInViewport(eleRef);
  const [className, setClassName] = useState('animate');

  if (inView) {
    setTimeout(() => {
      return setClassName(`animate animate__animated animate__${type}`);
    }, delay);
  }

  const NewChildren = Children.map(children, (child: ReactElement) => {
    return React.cloneElement(child, {
      className: `${child.props.className} ${className}`,
      ref: eleRef,
    });
  });

  return <>{NewChildren}</>;
};

export default Animate;
