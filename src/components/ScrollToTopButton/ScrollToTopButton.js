import React from "react";
import styles from "./scrollToTopButton.module.css";
import useScrollToTop from "../../hooks/useScrollToTop";

const UpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={styles.svg}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 11l7-7 7 7M5 19l7-7 7 7"
    />
  </svg>
);

const ScrollToTopButton = () => {
  const { scrollToTop } = useScrollToTop();
  return (
    <button className={styles.scrollToTopBtn} onClick={scrollToTop}>
      <UpIcon />
    </button>
  );
};

export default ScrollToTopButton;
