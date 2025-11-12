import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Download, Edit, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GalleryCardProps {
  image: string;
  tool: string;
  prompt: string;
  onImageClick: () => void;
  onEditClick: () => void;
}

export default function GalleryCard({
  image,
  tool,
  prompt,
  onImageClick,
  onEditClick,
}: GalleryCardProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    toast({
      title: "Copied to clipboard",
      description: "Image prompt has been copied",
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "ai-gallery-image.png";
    link.click();
    toast({
      title: "Download started",
      description: "Your image is being downloaded",
    });
  };

  return (
    <Card className="overflow-hidden hover-elevate" data-testid="card-gallery">
      <div
        className="aspect-video cursor-pointer overflow-hidden"
        onClick={onImageClick}
        data-testid="button-image"
      >
        <img
          src={image}
          alt={prompt}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <span data-testid="text-tool">{tool}</span>
          <ArrowRight className="w-3 h-3" />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2" data-testid="text-prompt">
          {prompt}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            data-testid="button-copy"
          >
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            data-testid="button-download"
          >
            <Download className="w-3 h-3 mr-1" />
            Download
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onEditClick}
            data-testid="button-edit"
          >
            <Edit className="w-3 h-3 mr-1" />
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
}
