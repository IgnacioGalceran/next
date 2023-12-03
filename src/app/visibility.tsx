"use client";
import { useEffect, useRef } from "react";

interface VisibilityDetectorProps {
  onVisible: () => void;
  onHidden: () => void;
  children?: any;
}

const VisibilityDetector = ({
  onVisible,
  onHidden,
}: VisibilityDetectorProps) => {
  const targetRef = useRef<HTMLDivElement>(null); // Inicializar como RefObject<HTMLDivElement>

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        } else {
          onHidden();
        }
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [onVisible, onHidden]);

  return <div ref={targetRef} style={{ height: "1px", overflow: "hidden" }} />;
};

export default VisibilityDetector;
