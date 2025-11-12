import { useState } from 'react';
import EditPopup from '../EditPopup';
import { Button } from '@/components/ui/button';
import sampleImage from '@assets/generated_images/Modern_architecture_building_0c86246c.png';

export default function EditPopupExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Edit Popup</Button>
      <EditPopup
        open={open}
        onClose={() => setOpen(false)}
        image={sampleImage}
        originalPrompt="Modern architectural masterpiece with clean lines and glass facade"
      />
    </div>
  );
}
