import { useEffect, useState } from 'react';

export function useRoute() {
  const [path, setPath] = useState(() => window.location.hash.replace(/^#/, '') || '/');

  useEffect(() => {
    const onHash = () => {
      setPath(window.location.hash.replace(/^#/, '') || '/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return path;
}

export function navigate(to: string) {
  window.location.hash = to;
}
