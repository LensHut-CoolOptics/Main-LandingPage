# LensHut 3D — Featured Auto 6 (Random from /public/products)

**Featured Collections** now shows **exactly 6** items, randomly picked from `/public/products` each load.
- Displays **image + product name** (from filename) — **no price, no buttons, no "View all" link**.
- Add product images to `/public/products` (supported: `.jpg .jpeg .png .webp`).

**Carousel:** auto-loads from `/public/carousel` (images + videos) with sticky navbar safety and no overlay text.

## Run
```bash
npm install
npm run dev
# open http://localhost:3000/tumkur
```

## Tips
- Product filename becomes the displayed name (e.g., `blue-light-pro.jpg` → "Blue Light Pro").
- Add more than 6 images — it will shuffle and show 6 each time.
