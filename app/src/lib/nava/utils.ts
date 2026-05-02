export const scrollToTarget = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ 
      behavior: prefersReducedMotion ? 'auto' : 'smooth', 
      block: 'center' 
    });
  }
};

export const getLocalStorageState = () => {
  if (typeof window === 'undefined') return null;
  const state = localStorage.getItem('lurnava_nava_state');
  if (state) {
    try {
      return JSON.parse(state);
    } catch (e) {
      console.error('Failed to parse Nava state', e);
      return null;
    }
  }
  return null;
};

export const saveLocalStorageState = (state: any) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('lurnava_nava_state', JSON.stringify(state));
};
