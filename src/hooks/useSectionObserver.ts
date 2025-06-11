import { useEffect } from 'react';

export const useSectionObserver = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          e.target.classList.toggle('is-active', e.isIntersecting);

          // Add fx-slot if it doesn't exist
          if (e.isIntersecting && !e.target.querySelector('.fx-slot')) {
            const fxSlot = document.createElement('div');
            fxSlot.className = 'fx-slot';

            // Add section-specific patterns based on data-theme
            const theme = e.target.getAttribute('data-theme');
            let patternHTML = '';

            switch(theme) {
              case 'hero':
              case 'rule1':
                patternHTML = '<div class="pattern-aurora"></div><div class="subtle-waves"></div>';
                break;
              case 'stats':
              case 'rule2':
                patternHTML = '<div class="pattern-grid"></div>';
                break;
              case 'expertise':
              case 'rule3':
                patternHTML = '<div class="pattern-dots"></div>';
                break;
              case 'pain':
                patternHTML = '<div class="pattern-aurora"></div>';
                break;
              default:
                patternHTML = '<div class="subtle-waves"></div>';
            }

            fxSlot.innerHTML = patternHTML;
            e.target.appendChild(fxSlot);
          }
        }),
      { rootMargin: '-20% 0px -20% 0px' }
    );

    document
      .querySelectorAll<HTMLElement>('section[data-theme]')
      .forEach(sec => io.observe(sec));

    return () => io.disconnect();
  }, []);
};
