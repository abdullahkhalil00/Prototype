import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

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
          <Link href="/">
            <a className="text-xl font-bold text-primary" data-testid="link-logo">
              AI Gallery
            </a>
          </Link>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "default" : "ghost"}
                  size="sm"
                  data-testid={`button-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
