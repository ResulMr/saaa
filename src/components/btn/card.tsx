import { ReactNode } from "react";


interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-2">{children}</div>;
}
