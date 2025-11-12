import GalleryCard from '../GalleryCard';
import sampleImage from '@assets/generated_images/Mountain_sunrise_landscape_961d7968.png';

export default function GalleryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <GalleryCard
        image={sampleImage}
        tool="Leonardo AI"
        prompt="Breathtaking sunrise over misty mountains, golden hour lighting"
        onImageClick={() => console.log('Image clicked')}
        onEditClick={() => console.log('Edit clicked')}
      />
    </div>
  );
}
