import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
  animated?: boolean;
}

export default function ProgressBar({ progress, className, animated = true }: ProgressBarProps) {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setDisplayProgress(progress);
    }
  }, [progress, animated]);

  return (
    <div 
      className={cn("transition-all duration-1000 ease-out", className)}
      style={{ 
        width: `${displayProgress}%`,
        minWidth: displayProgress > 0 ? '8px' : '0px'
      }}
    />
  );
}
