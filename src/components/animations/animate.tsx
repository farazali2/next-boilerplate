import React, { useRef, useState, Children, ReactElement } from 'react';
import useIsInViewport from '@app/hooks/useIsInViewport';

interface IAnimate {
  children: React.ReactNode;
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

  const mutated = Children.map(
    children as ReactElement,
    (child: ReactElement) => {
      return React.cloneElement(child as ReactElement, {
        className: `${child.props.className} ${className}`,
        ref: eleRef,
      });
    }
  );

  return <>{mutated}</>;
};

export default Animate;
