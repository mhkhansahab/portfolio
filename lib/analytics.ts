/**
 * Google Analytics event tracking helper
 *
 * Usage:
 * import { trackEvent } from '@/lib/analytics'
 *
 * trackEvent('contact_click', { method: 'email' })
 */

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;

  const windowWithGtag = window as Window & {
    gtag?: (...args: unknown[]) => void;
  };

  if (windowWithGtag.gtag) {
    windowWithGtag.gtag("event", eventName, eventParams);
  }
}

/**
 * Track page scroll depth (25%, 50%, 75%, 90%)
 */
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  const trackedPercentages = new Set<number>();
  const trackScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    [25, 50, 75, 90].forEach((threshold) => {
      if (scrollPercent >= threshold && !trackedPercentages.has(threshold)) {
        trackedPercentages.add(threshold);
        trackEvent('scroll_depth', { percentage: threshold });
      }
    });
  };

  window.addEventListener('scroll', trackScroll, { passive: true });
  trackScroll(); // Track initial scroll position
}

/**
 * Track time spent on page (30s, 1min, 2min, 5min)
 */
export function initTimeOnPage() {
  if (typeof window === 'undefined') return;

  const trackedTimes = new Set<number>();
  const intervals = [30, 60, 120, 300]; // seconds
  let elapsed = 0;

  const timer = setInterval(() => {
    elapsed++;
    intervals.forEach((threshold) => {
      if (elapsed >= threshold && !trackedTimes.has(threshold)) {
        trackedTimes.add(threshold);
        trackEvent('time_on_page', { seconds: threshold });
      }
    });
  }, 1000);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => clearInterval(timer));
}

/**
 * Track section visibility using Intersection Observer
 */
export function initSectionTracking(sectionIds: string[]) {
  if (typeof window === 'undefined') return;

  const trackedSections = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !trackedSections.has(entry.target.id)) {
          trackedSections.add(entry.target.id);
          trackEvent('section_view', { section_id: entry.target.id });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}
