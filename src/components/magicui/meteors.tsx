"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
      transform: `rotate(${-angle}deg)`,
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
                 <span
           key={idx}
           style={{ ...style }}
           className={cn(
             "pointer-events-none absolute size-2 animate-meteor rounded-full bg-white shadow-[0_0_0_2px_#ffffff40]",
             className,
           )}
         >
           {/* Meteor Tail */}
           <div className="pointer-events-none absolute top-1/2 -z-10 h-0.5 w-[80px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
         </span>
      ))}
    </>
  );
}; 