import { useEffect, useRef } from 'react';

type ClickOutsideHook = (callback: () => void) => React.RefObject<HTMLDivElement>;

export const useClickOutside: ClickOutsideHook = (callback) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
