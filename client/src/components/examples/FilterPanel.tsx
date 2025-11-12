import { useState } from 'react';
import FilterPanel from '../FilterPanel';

export default function FilterPanelExample() {
  const [selectedTools, setSelectedTools] = useState<string[]>(['Leonardo']);
  const [pricing, setPricing] = useState('all');

  return (
    <div className="p-8 max-w-xs">
      <FilterPanel
        selectedTools={selectedTools}
        onToolsChange={setSelectedTools}
        pricing={pricing}
        onPricingChange={setPricing}
      />
    </div>
  );
}
