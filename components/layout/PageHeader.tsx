import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-primary py-20 text-white text-center", className)}>
      <div className="container-custom">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
