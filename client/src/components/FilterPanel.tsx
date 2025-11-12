import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FilterPanelProps {
  selectedTools: string[];
  onToolsChange: (tools: string[]) => void;
  pricing: string;
  onPricingChange: (pricing: string) => void;
}

const tools = ["Leonardo", "Nano Banana", "ChatGPT", "Midjourney"];

export default function FilterPanel({
  selectedTools,
  onToolsChange,
  pricing,
  onPricingChange,
}: FilterPanelProps) {
  const handleToolToggle = (tool: string) => {
    if (selectedTools.includes(tool)) {
      onToolsChange(selectedTools.filter((t) => t !== tool));
    } else {
      onToolsChange([...selectedTools, tool]);
    }
  };

  return (
    <Card className="p-6 space-y-6" data-testid="card-filter">
      <div className="space-y-4">
        <h3 className="font-semibold">Tools</h3>
        {tools.map((tool) => (
          <div key={tool} className="flex items-center gap-2">
            <Checkbox
              id={tool}
              checked={selectedTools.includes(tool)}
              onCheckedChange={() => handleToolToggle(tool)}
              data-testid={`checkbox-tool-${tool.toLowerCase().replace(' ', '-')}`}
            />
            <Label htmlFor={tool} className="cursor-pointer">
              {tool}
            </Label>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Pricing</h3>
        <RadioGroup value={pricing} onValueChange={onPricingChange}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="all" id="all" data-testid="radio-pricing-all" />
            <Label htmlFor="all" className="cursor-pointer">
              All
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="free" id="free" data-testid="radio-pricing-free" />
            <Label htmlFor="free" className="cursor-pointer">
              Free
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="paid" id="paid" data-testid="radio-pricing-paid" />
            <Label htmlFor="paid" className="cursor-pointer">
              Paid
            </Label>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
}
