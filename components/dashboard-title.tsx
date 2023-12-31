interface DashboardTitleProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardTitle({
  heading,
  text,
  children,
}: DashboardTitleProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-3xl md:text-4xl font-bold">{heading}</h1>
        {text && <p className="text-lg text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  );
}
