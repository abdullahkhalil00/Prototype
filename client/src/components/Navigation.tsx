import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Personal", path: "/personal" },
    { label: "Nature", path: "/nature" },
    { label: "ART", path: "/art" },
    { label: "Character", path: "/character" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span 
            className="text-xl font-bold text-primary cursor-pointer" 
            data-testid="link-logo"
            onClick={() => setLocation("/")}
          >
            AI Gallery
          </span>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location === item.path ? "default" : "ghost"}
                size="sm"
                onClick={() => setLocation(item.path)}
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
