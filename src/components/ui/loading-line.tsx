import { cn } from "@/lib/utils";

interface LoadingLineProps {
  isLoading: boolean;
}

export function LoadingLine({ isLoading }: LoadingLineProps) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-1 bg-primary transition-all duration-300",
        isLoading ? "w-full animate-loading-line" : "w-0"
      )}
    />
  );
}