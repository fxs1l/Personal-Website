import React from "react";
import { useInView } from "react-intersection-observer";

const LazyAnimation = ({ animationStyle, children, id, thres = "0.4" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // rootMargin: '-100px 0px',
    threshold: 0.4,
  });

  return (
    <div
      id={id}
      style={{ opacity: inView ? 1 : 0 }}
      ref={ref}
      className={`${inView ? animationStyle + " animate__animated" : ""} `}
    >
      {/* <span aria-label="Wave">👋</span> */}
      {children}
    </div>
  );
};

export default LazyAnimation;
