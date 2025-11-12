import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface EditPopupProps {
  open: boolean;
  onClose: () => void;
  image: string;
  originalPrompt: string;
}

export default function EditPopup({ open, onClose, image, originalPrompt }: EditPopupProps) {
  const [saturation, setSaturation] = useState(100);
  const [temperature, setTemperature] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [hue, setHue] = useState(0);
  const [lightness, setLightness] = useState(100);
  const [colorModel, setColorModel] = useState("RGB");
  const [updatedPrompt, setUpdatedPrompt] = useState(originalPrompt);

  useEffect(() => {
    let newPrompt = originalPrompt;
    const params = [];
    
    if (saturation !== 100) params.push(`Saturation = ${saturation / 100}`);
    if (temperature !== 0) params.push(`Temperature = ${temperature}`);
    if (contrast !== 100) params.push(`Contrast = ${contrast / 100}`);
    if (hue !== 0) params.push(`Hue = ${hue}`);
    if (lightness !== 100) params.push(`Lightness = ${lightness / 100}`);
    if (colorModel !== "RGB") params.push(`Color Model = ${colorModel}`);
    
    if (params.length > 0) {
      newPrompt = `${originalPrompt}. ${params.join(", ")}`;
    }
    
    setUpdatedPrompt(newPrompt);
  }, [saturation, temperature, contrast, hue, lightness, colorModel, originalPrompt]);

  const filterStyle = {
    filter: `saturate(${saturation}%) contrast(${contrast}%) brightness(${lightness}%) hue-rotate(${hue}deg)`,
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto" data-testid="dialog-edit">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Edit Image</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              data-testid="button-close-edit"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-video overflow-hidden rounded-md border border-border">
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover"
                style={filterStyle}
              />
            </div>
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground" data-testid="text-updated-prompt">
                {updatedPrompt}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Saturation</Label>
              <Slider
                value={[saturation]}
                onValueChange={(v) => setSaturation(v[0])}
                min={0}
                max={200}
                step={1}
                data-testid="slider-saturation"
              />
              <span className="text-xs text-muted-foreground">{saturation}%</span>
            </div>

            <div className="space-y-2">
              <Label>Temperature</Label>
              <Slider
                value={[temperature]}
                onValueChange={(v) => setTemperature(v[0])}
                min={-100}
                max={100}
                step={1}
                data-testid="slider-temperature"
              />
              <span className="text-xs text-muted-foreground">{temperature}</span>
            </div>

            <div className="space-y-2">
              <Label>Contrast</Label>
              <Slider
                value={[contrast]}
                onValueChange={(v) => setContrast(v[0])}
                min={0}
                max={200}
                step={1}
                data-testid="slider-contrast"
              />
              <span className="text-xs text-muted-foreground">{contrast}%</span>
            </div>

            <div className="space-y-2">
              <Label>Hue</Label>
              <Slider
                value={[hue]}
                onValueChange={(v) => setHue(v[0])}
                min={-180}
                max={180}
                step={1}
                data-testid="slider-hue"
              />
              <span className="text-xs text-muted-foreground">{hue}°</span>
            </div>

            <div className="space-y-2">
              <Label>Lightness</Label>
              <Slider
                value={[lightness]}
                onValueChange={(v) => setLightness(v[0])}
                min={0}
                max={200}
                step={1}
                data-testid="slider-lightness"
              />
              <span className="text-xs text-muted-foreground">{lightness}%</span>
            </div>

            <div className="space-y-2">
              <Label>Color Model</Label>
              <Select value={colorModel} onValueChange={setColorModel}>
                <SelectTrigger data-testid="select-color-model">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RGB">RGB</SelectItem>
                  <SelectItem value="CMYK">CMYK</SelectItem>
                  <SelectItem value="HSL">HSL</SelectItem>
                  <SelectItem value="LAB">LAB</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
