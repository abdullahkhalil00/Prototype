import { useState } from 'react';
import ImagePopup from '../ImagePopup';
import { Button } from '@/components/ui/button';
import sampleImage from '@assets/generated_images/Ocean_sunset_seascape_fdb94a6e.png';

export default function ImagePopupExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Image Popup</Button>
      <ImagePopup
        open={open}
        onClose={() => setOpen(false)}
        image={sampleImage}
        alt="Ocean sunset"
      />
    </div>
  );
}
