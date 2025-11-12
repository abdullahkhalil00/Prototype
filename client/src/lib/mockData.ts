import cvImage from '@assets/generated_images/Professional_CV_headshot_755c298f.png';
import portfolioImage from '@assets/generated_images/Portfolio_workspace_showcase_1fbafa34.png';
import dpImage from '@assets/generated_images/Artistic_profile_picture_bae33a0e.png';
import sunriseImage from '@assets/generated_images/Mountain_sunrise_landscape_961d7968.png';
import sunsetImage from '@assets/generated_images/Ocean_sunset_seascape_fdb94a6e.png';
import mountainImage from '@assets/generated_images/Alpine_mountain_peaks_7b09e006.png';
import architectureImage from '@assets/generated_images/Modern_architecture_building_0c86246c.png';
import illustrationImage from '@assets/generated_images/Geometric_abstract_illustration_d2d5bd56.png';
import sketchImage from '@assets/generated_images/Urban_cityscape_sketch_a1be9cc9.png';
import cartoonImage from '@assets/generated_images/Friendly_cartoon_character_8990cbb5.png';

export interface GalleryImage {
  id: string;
  image: string;
  tool: string;
  prompt: string;
  category: string;
  subcategory: string;
}

export const mockImages: GalleryImage[] = [
  {
    id: '1',
    image: cvImage,
    tool: 'Leonardo AI',
    prompt: 'Professional headshot portrait of a confident business professional in modern office setting, clean background, corporate photography style',
    category: 'Personal',
    subcategory: 'CV Style'
  },
  {
    id: '2',
    image: portfolioImage,
    tool: 'Midjourney',
    prompt: 'Creative portfolio showcase image with minimalist design workspace, modern desk setup, professional photography',
    category: 'Personal',
    subcategory: 'Portfolio'
  },
  {
    id: '3',
    image: dpImage,
    tool: 'ChatGPT',
    prompt: 'Stylish profile picture of a person with artistic lighting, modern fashion, professional portrait photography',
    category: 'Personal',
    subcategory: 'DP'
  },
  {
    id: '4',
    image: sunriseImage,
    tool: 'Leonardo AI',
    prompt: 'Breathtaking sunrise over misty mountains, golden hour lighting, vibrant orange and pink sky, landscape photography',
    category: 'Nature',
    subcategory: 'Sunrise'
  },
  {
    id: '5',
    image: sunsetImage,
    tool: 'Midjourney',
    prompt: 'Dramatic sunset over ocean with colorful sky reflections, purple and orange hues, seascape photography',
    category: 'Nature',
    subcategory: 'Sunset'
  },
  {
    id: '6',
    image: mountainImage,
    tool: 'Nano Banana',
    prompt: 'Majestic snow-capped mountain peaks under blue sky, alpine landscape, nature photography',
    category: 'Nature',
    subcategory: 'Mountain'
  },
  {
    id: '7',
    image: architectureImage,
    tool: 'Leonardo AI',
    prompt: 'Modern architectural masterpiece with clean lines and glass facade, contemporary building design',
    category: 'ART',
    subcategory: 'Architecture'
  },
  {
    id: '8',
    image: illustrationImage,
    tool: 'ChatGPT',
    prompt: 'Artistic illustration of abstract geometric shapes with vibrant colors, digital art, modern design aesthetic',
    category: 'ART',
    subcategory: 'Illustrator'
  },
  {
    id: '9',
    image: sketchImage,
    tool: 'Midjourney',
    prompt: 'Detailed pencil sketch of urban cityscape with intricate line work, architectural drawing style',
    category: 'ART',
    subcategory: 'Sketch'
  },
  {
    id: '10',
    image: cartoonImage,
    tool: 'Leonardo AI',
    prompt: 'Cartoon character illustration with friendly expression, colorful digital art, playful style',
    category: 'Character',
    subcategory: 'Cartoon'
  }
];

export const categories = {
  Personal: ['CV Style', 'Portfolio', 'DP'],
  Nature: ['Sunrise', 'Sunset', 'Mountain'],
  ART: ['Architecture', 'Illustrator', 'Sketch'],
  Character: ['Personal', 'Cartoon']
};
