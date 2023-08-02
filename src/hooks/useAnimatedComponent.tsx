import { MutableRefObject, useEffect } from "react";

const useAnimatedComponent = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  style: string
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.add(style);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
};

export default useAnimatedComponent;
