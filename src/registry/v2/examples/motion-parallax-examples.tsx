"use client";

import { MotionParallax } from "@/registry/v2/ui/motion-parallax";
import { useRef } from "react";

export function MotionParallaxPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex h-96 items-center justify-center gap-8">
      <MotionParallax
        target={containerRef}
        offset={-50}
        className="bg-primary text-primary-foreground rounded-xl px-6 py-3"
      >
        Offset -50
      </MotionParallax>
      <MotionParallax
        target={containerRef}
        offset={50}
        className="bg-secondary text-secobg-secondary-foreground rounded-xl px-6 py-3"
      >
        Offset 100
      </MotionParallax>
    </div>
  );
}
