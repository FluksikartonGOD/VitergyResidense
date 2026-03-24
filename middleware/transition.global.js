export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path !== from.path) {
    to.meta.pageTransition = { name: 'cube', mode: '' }

    if (process.client) {
      await new Promise((resolve) => {
        const duration = 200; // 0.2s
        const startY = window.scrollY;

        if (startY === 0) {
          resolve();
          return;
        }

        const startTime = performance.now();

        function step(currentTime) {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // easeInOutQuad for smooth behavior
          const easedProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          window.scrollTo(0, startY * (1 - easedProgress));

          if (timeElapsed < duration) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        }
        
        requestAnimationFrame(step);
      });
    }
  }
})
