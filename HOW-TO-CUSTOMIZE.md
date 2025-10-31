# How to Customize Your Villa Landing Page

## Quick Start: Adding Your Own Content

All the text, images, and videos for your landing page are controlled from a single file:

📁 **`client/src/data/villa-content.ts`**

Open this file to customize everything!

---

## 1. Adding Your Own Images

### Step 1: Add Your Images to the Project
1. Place your villa photos in the `attached_assets` folder
2. For example: `attached_assets/my-pool.jpg`

### Step 2: Import Your Images
At the top of `villa-content.ts`, replace the import statements:

```typescript
// Replace this:
import poolImage from "@assets/generated_images/Bali_stone_pool_loungers_57cd748d.png";

// With your own image:
import poolImage from "@assets/my-pool.jpg";
```

### Step 3: The Images Will Update Automatically
Once you've updated the imports, your new images will appear on the landing page!

---

## 2. Adding a Hero Video

### Option A: Using a Local Video File
1. Add your video file to `attached_assets/hero-video.mp4`
2. In `villa-content.ts`, update the hero section:

```typescript
export const heroContent = {
  videoUrl: "/attached_assets/hero-video.mp4", // Add your video path here
  // ... rest of the config
};
```

### Option B: Using a YouTube or Vimeo Video
```typescript
export const heroContent = {
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  // ... rest of the config
};
```

### To Use an Image Instead of Video
Just leave `videoUrl` empty:
```typescript
videoUrl: "", // Empty = use image instead
```

---

## 3. Editing Testimonials

In `villa-content.ts`, find the `testimonials` array:

```typescript
export const testimonials = [
  {
    quote: "Your guest's review here",
    name: "Guest Name",
    location: "Country",
    initials: "GN"  // Used for avatar if no photo
  },
  // Add more testimonials...
];
```

**To add a new testimonial:** Just copy the format and add it to the array!

**To remove a testimonial:** Delete the entire object.

---

## 4. Changing Gallery Images

In `villa-content.ts`, find the `galleryImages` array:

```typescript
export const galleryImages = [
  {
    src: poolImage,  // The imported image
    caption: "Your caption here"
  },
  // Add as many as you want!
];
```

**To add more images:**
1. Import the image at the top of the file
2. Add a new object to the array

**To reorder images:** Just drag the objects up or down in the array

---

## 5. WhatsApp Configuration

Your WhatsApp number and default message are in `villa-content.ts`:

```typescript
export const whatsappConfig = {
  phoneNumber: "+447454454984",
  defaultMessage: "Hi! I saw the Sports Villa online — can I get a quote?"
};
```

---

## 6. Editing Other Text Content

All headline text, pricing, and descriptions are also in `villa-content.ts`. Look for:

- `heroContent.title` - Main headline
- `heroContent.subtitle` - Subheadline
- `heroContent.badges` - Feature badges (location, capacity, price)

Just edit the text and save - the page updates automatically!

---

## Need Help?

- All changes are made in one place: `client/src/data/villa-content.ts`
- Images go in the `attached_assets` folder
- The page updates automatically when you save changes
- Videos can be local files or YouTube/Vimeo embeds

That's it! You now have full control over every image, video, and piece of text on your landing page.
