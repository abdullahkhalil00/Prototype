import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import GalleryCard from "@/components/GalleryCard";
import ImagePopup from "@/components/ImagePopup";
import EditPopup from "@/components/EditPopup";
import VisitorCounter from "@/components/VisitorCounter";
import { mockImages, categories } from "@/lib/mockData";
import heroImage from '@assets/generated_images/Mountain_sunrise_landscape_961d7968.png';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editImage, setEditImage] = useState<{ image: string; prompt: string } | null>(null);
  const [currentVisitors, setCurrentVisitors] = useState(() => {
    const saved = localStorage.getItem('currentVisitors');
    return saved ? parseInt(saved) : 42;
  });

  useEffect(() => {
    const newCount = currentVisitors + 1;
    setCurrentVisitors(newCount);
    localStorage.setItem('currentVisitors', newCount.toString());
  }, []);

  const getRandomSubcategory = (category: string) => {
    const subcategories = categories[category as keyof typeof categories];
    return subcategories[Math.floor(Math.random() * subcategories.length)];
  };

  const getCategoryImages = (category: string) => {
    const subcategory = getRandomSubcategory(category);
    return mockImages.filter(img => img.category === category && img.subcategory === subcategory).slice(0, 3);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold" data-testid="text-title">AI Gallery</h1>
            <p className="text-lg text-muted-foreground" data-testid="text-description">
              Explore AI-generated visuals across categories such as Personal, Nature, ART, and Character.
              Discover stunning images created with Leonardo, ChatGPT, and Midjourney.
            </p>
          </div>
          <div className="rounded-md overflow-hidden border border-card-border hover-elevate">
            <img src={heroImage} alt="Featured" className="w-full h-auto" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search images, tools or prompts..."
              className="pl-10"
              data-testid="input-search"
            />
          </div>
        </div>

        {Object.keys(categories).map((category) => {
          const images = getCategoryImages(category);
          return (
            <div key={category} className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold" data-testid={`text-category-${category.toLowerCase()}`}>
                  {category}
                </h2>
                <Link href={`/${category.toLowerCase()}`}>
                  <Button variant="outline" data-testid={`button-see-more-${category.toLowerCase()}`}>
                    See More
                  </Button>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
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
            </div>
          );
        })}

        <div className="pt-8">
          <VisitorCounter dailyVisitors={1234} currentVisitors={currentVisitors} />
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
