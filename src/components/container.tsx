import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container mx-auto px-6 py-6", className)}>
      <div className="bg-white rounded-xl shadow-lg p-8">{children}</div>
    </div>
  );
}
