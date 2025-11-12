import { Card } from "@/components/ui/card";
import { Users, Eye } from "lucide-react";

interface VisitorCounterProps {
  dailyVisitors: number;
  currentVisitors: number;
}

export default function VisitorCounter({ dailyVisitors, currentVisitors }: VisitorCounterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Card className="p-6 flex items-center gap-4 min-w-[200px]" data-testid="card-daily-visitors">
        <div className="p-3 bg-primary/10 rounded-full">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Daily Visitors</p>
          <p className="text-2xl font-bold" data-testid="text-daily-count">
            {dailyVisitors.toLocaleString()}
          </p>
        </div>
      </Card>
      
      <Card className="p-6 flex items-center gap-4 min-w-[200px]" data-testid="card-current-visitors">
        <div className="p-3 bg-primary/10 rounded-full">
          <Eye className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Current Visitors</p>
          <p className="text-2xl font-bold" data-testid="text-current-count">
            {currentVisitors.toLocaleString()}
          </p>
        </div>
      </Card>
    </div>
  );
}
