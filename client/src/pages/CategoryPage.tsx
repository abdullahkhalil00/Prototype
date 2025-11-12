import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import GalleryCard from "@/components/GalleryCard";
import ImagePopup from "@/components/ImagePopup";
import EditPopup from "@/components/EditPopup";
import FilterPanel from "@/components/FilterPanel";
import VisitorCounter from "@/components/VisitorCounter";
import { mockImages, categories } from "@/lib/mockData";

interface CategoryPageProps {
  category: string;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [pricing, setPricing] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editImage, setEditImage] = useState<{ image: string; prompt: string } | null>(null);
  const [currentVisitors, setCurrentVisitors] = useState(() => {
    const saved = localStorage.getItem('currentVisitors');
    return saved ? parseInt(saved) : 42;
  });

  const subcategories = categories[category as keyof typeof categories] || [];

  useEffect(() => {
    if (subcategories.length > 0 && !selectedSubcategory) {
      setSelectedSubcategory(subcategories[0]);
    }
  }, [category, subcategories, selectedSubcategory]);

  const filteredImages = mockImages.filter((img) => {
    if (img.category !== category) return false;
    if (selectedSubcategory && img.subcategory !== selectedSubcategory) return false;
    if (selectedTools.length > 0 && !selectedTools.includes(img.tool)) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-center">
          <VisitorCounter dailyVisitors={1234} currentVisitors={currentVisitors} />
        </div>

        <div className="flex flex-wrap gap-2 justify-center border-b border-border pb-4">
          {subcategories.map((sub) => (
            <Button
              key={sub}
              variant={selectedSubcategory === sub ? "default" : "outline"}
              onClick={() => setSelectedSubcategory(sub)}
              data-testid={`button-subcategory-${sub.toLowerCase().replace(' ', '-')}`}
            >
              {sub}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              selectedTools={selectedTools}
              onToolsChange={setSelectedTools}
              pricing={pricing}
              onPricingChange={setPricing}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredImages.map((img) => (
                <GalleryCard
                  key={img.id}
                  image={img.image}
                  tool={img.tool}
                  prompt={img.prompt}
                  onImageClick={() => setSelectedImage(img.image)}
                  onEditClick={() => setEditImage({ image: img.image, prompt: img.prompt })}
                />
              ))}
            </div>
            {filteredImages.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No images found matching your filters
              </div>
            )}
          </div>
        </div>
      </div>

      <ImagePopup
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || ""}
        alt="Gallery image"
      />

      {editImage && (
        <EditPopup
          open={!!editImage}
          onClose={() => setEditImage(null)}
          image={editImage.image}
          originalPrompt={editImage.prompt}
        />
      )}
    </div>
  );
}
