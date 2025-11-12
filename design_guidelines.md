# AI Gallery - Design Guidelines

## Design Approach
**Reference-Based:** Modern tech gallery aesthetic with teal/cyan accents, soft shadows, and rounded corners. Clean, minimalist interface prioritizing content visibility and interaction.

## Core Design Elements

### Typography
- **Headings:** Bold, modern sans-serif for "AI Gallery" title and section headers
- **Body Text:** Clean, readable sans-serif for prompts and descriptions
- **UI Elements:** Medium weight for buttons and navigation items

### Layout System
**Spacing:** Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16 for padding/margins
**Grid:** 3-column card layout on desktop, 2-column on tablet, 1-column on mobile

### Color Palette (Structure Only)
- Teal/cyan accent color for interactive elements
- Dark navigation bar background
- White filter panels
- Soft shadows throughout

## Component Library

### Navigation
**Primary Navbar:** Sticky dark bar with 5 main sections (Home, Personal, Nature, ART, Character)
**Secondary Navbar:** Category-specific sub-navigation appearing on category pages

### Hero Section (Home Page)
**Layout:** Split 50/50
- **Left:** Title "AI Gallery" + description text
- **Right:** Featured gallery card with sample image

### Search Bar
**Position:** Centered below hero
**Placeholder:** "Search images, tools or prompts..."
**Style:** Rounded with subtle shadow

### Gallery Cards
**Structure:**
- Image (clickable for popup)
- Tool name with arrow icon (→)
- Prompt text (2-3 lines)
- Action buttons row: Copy | Download | Edit

**Dimensions:** Equal height cards with image aspect ratio 16:9 or 4:3

### Category Preview Section
**Layout:** 4 categories × 3 cards per row
**Footer:** "See More" button for each category

### Filter Panel (Category Pages)
**Position:** Left sidebar, white background
**Content:**
- Tools checkboxes (Leonardo, Nano Banana, ChatGPT, Midjourney)
- Radio buttons for Free/Unpaid

### Popups/Modals

**Image Popup:**
- Dimmed overlay background
- Centered full-size image
- X close button (top-right corner)

**Edit Popup:**
- Split view: Image left, controls right
- Sliders: Saturation, Temperature, Contrast, Hue, Lightness
- Color Model dropdown
- Live preview as sliders adjust
- Prompt display below image with dynamic updates

### Visitor Counters
**Position:** Below category sections
**Display:** "Daily Visitors: X" | "Current Visitors: Y"
**Behavior:** Current visitors increment on page reload

## Interaction Patterns

**Button Actions:**
- Copy: Copies prompt text to clipboard
- Download: Downloads image file
- Edit: Opens edit popup modal

**Responsive Breakpoints:**
- Desktop: 3 cards per row
- Tablet: 2 cards per row
- Mobile: 1 card per row, vertical hero stack

## Images
**Hero Image:** Right side of home hero - display as gallery card format with rounded corners and shadow
**Category Cards:** All cards feature AI-generated images across Personal/Nature/ART/Character themes
**Image Treatment:** Rounded corners (8px), subtle drop shadow, maintain aspect ratio