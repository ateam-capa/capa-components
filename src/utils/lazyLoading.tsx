import React, { useState, useEffect, useRef } from "react";

// For IE
import "intersection-observer";

/**
 * image lazy loading function
 * @param {ref} target
 */
function useLazyImageObserver(target: any) {
  const [isFade, setIsFade] = useState(false);

  useEffect(() => {
    if (!target.current) {
      return;
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage: any = entry.target;

          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(target.current);
    setIsFade(true);

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null as any;
      }
    };
  }, [target]);

  return isFade;
}

interface lazyImageProps {
  className?: string;
  src: string;
  alt?: string;
}

/**
 * image lazy loading
 * @param {string} className(optional)
 * @param {string} src
 * @param {string} alt(optional)
 * @returns {React.ReactNode} component
 */
export const Image = (props: lazyImageProps) => {
  const target = useRef(null);
  const lazyLoader = useLazyImageObserver(target);

  return (
    lazyLoader && (
      <img
        className={props.className}
        ref={target}
        data-src={props.src}
        alt={props.alt}
      />
    )
  );
};
