/**
 * A custom hook for scrolling to the top of the page.
 *
 * @param {string[]} [watchedVars = []] - state variables that, if changed, will trigger a scroll to the top of the page
 * @returns {object} Returns a function which triggers a scroll to the top of the page
 * @example
 * // scroll to top whenever `Router.pathname` changes or `scrollToTop()` is called
 * const {scrollToTop} = useScrollToTop([Router.pathname])
 */

import { useLayoutEffect } from "react";

export default function useScrollToTop(watchedVars = []) {
  const scrollToTop = () => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scroll(0, 0);
    }
  };

  useLayoutEffect(() => {
    scrollToTop();
  }, [watchedVars]);

  return { scrollToTop };
}
