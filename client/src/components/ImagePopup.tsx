import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImagePopupProps {
  open: boolean;
  onClose: () => void;
  image: string;
  alt: string;
}

export default function ImagePopup({ open, onClose, image, alt }: ImagePopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden" data-testid="dialog-image">
        <VisuallyHidden>
          <DialogDescription>Full size image preview</DialogDescription>
        </VisuallyHidden>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            data-testid="button-close"
          >
            <X className="w-4 h-4" />
          </Button>
          <img src={image} alt={alt} className="w-full h-auto" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
