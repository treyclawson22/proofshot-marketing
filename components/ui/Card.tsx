interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  const hoverStyles = hover
    ? "hover:border-gray-300 hover:shadow-lg hover:translate-y-[-4px]"
    : "";

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  screenshotPlaceholder?: boolean;
}

export function FeatureCard({
  icon,
  title,
  description,
  screenshotPlaceholder = false,
}: FeatureCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      {screenshotPlaceholder && (
        <div className="h-[180px] bg-gray-900 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Screenshot</div>
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-4 text-orange">{icon}</div>}
        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
