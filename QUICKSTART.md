# 🚀 Quick Start Guide - Pizzeria Fantázia

## Getting Started

### 1. Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

### 2. View the Landing Page

The landing page includes:

- ✅ **Modern Navigation Bar** - Fixed header with smooth scroll effects
- ✅ **Hero Section** - Eye-catching intro with animated elements
- ✅ **Features Section** - 3 service cards (Menu, Delivery, Gallery)
- ✅ **About Section** - Restaurant info with statistics
- ✅ **Footer** - Contact info, hours, and social links

### 3. Preview in Browser

Open your browser and navigate to the local URL. You should see:

1. **Top**: Fixed navigation with "Pizzeria Fantázia" logo
2. **Hero**: Large title "Vychutnajte si autentickú taliansku pizzu"
3. **Info Bar**: Location and opening hours
4. **Services**: 3 cards for Menu, Delivery, and Gallery
5. **About**: Restaurant description with 4 statistics
6. **Footer**: Dark footer with all contact details

## 🎨 What You'll See

### Colors
- Red (#DB0000) - Primary brand color
- White backgrounds with subtle gradients
- Modern, clean aesthetic

### Animations
- Scroll down and watch elements fade in
- Hover over buttons and cards for effects
- Smooth navigation transitions
- Floating elements in hero section

### Responsive Design
- Resize your browser to see mobile menu
- All sections adapt to screen size
- Touch-friendly on mobile devices

## 📝 Adding Your Images

### Replace Image Placeholders

#### 1. Hero Pizza Image
File: `src/components/Hero.tsx`

Replace this section:
```tsx
<div className="image-placeholder pizza-placeholder">
  {/* Replace this div with an actual image */}
</div>
```

With:
```tsx
<img src="/path-to-your-pizza-image.jpg" alt="Pizza" />
```

#### 2. Restaurant Image
File: `src/components/About.tsx`

Replace this section:
```tsx
<div className="image-placeholder restaurant-placeholder">
  {/* Replace this div with restaurant image */}
</div>
```

With:
```tsx
<img src="/path-to-your-restaurant-image.jpg" alt="Restaurant" />
```

### Where to Put Images

1. **Public folder**: `public/images/`
   - Access with `/images/filename.jpg`
   - Good for static assets

2. **Assets folder**: `src/assets/`
   - Import in components
   - Optimized by Vite

Example:
```tsx
// Put image in public/images/pizza.jpg
<img src="/images/pizza.jpg" alt="Pizza" />

// Or import from assets
import pizzaImg from '../assets/pizza.jpg'
<img src={pizzaImg} alt="Pizza" />
```

## 🛠️ Customization

### Change Colors

Edit any CSS file and replace `#DB0000` with your preferred color.

Main locations:
- `src/index.css` - Global variables
- `src/components/*.css` - Individual component styles

### Change Text Content

1. **Hero Title**: Edit `src/components/Hero.tsx` line ~27
2. **About Text**: Edit `src/components/About.tsx` line ~38+
3. **Footer Info**: Edit `src/components/Footer.tsx`

### Add More Sections

Use the `Section` component:

```tsx
import Section from './components/Section';

<Section 
  label="New Section" 
  title="Section Title" 
  subtitle="Description"
  background="gray"
>
  {/* Your content here */}
</Section>
```

## 🔧 Build for Production

When ready to deploy:

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

Files will be in `dist/` folder ready to upload to your web server.

## 📱 Testing

### Desktop
1. Open in Chrome/Firefox/Edge
2. Test all hover effects
3. Check smooth scrolling
4. Test navigation clicks

### Mobile
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test in mobile view
4. Check hamburger menu
5. Test touch interactions

### Tablet
Test at 768px width for tablet view

## ⚡ Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before upload
   - Use appropriate sizes

2. **Lazy Load Images**
   - Add `loading="lazy"` to img tags
   - Helps with initial page load

3. **Code Splitting**
   - Already handled by Vite
   - Bundle is optimized

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles not showing
- Hard refresh: Ctrl+Shift+R
- Clear browser cache
- Check console for errors

### TypeScript errors
```bash
npm run build
```
This will show all errors

## 📚 Learn More

- **React**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev
- **Vite**: https://vitejs.dev

## 🎯 Next Steps

1. ✅ View the landing page
2. ⬜ Add your images
3. ⬜ Customize colors/text
4. ⬜ Create menu page
5. ⬜ Add delivery page
6. ⬜ Build gallery page
7. ⬜ Add contact form
8. ⬜ Deploy to web hosting

---

**Need Help?** Check IMPLEMENTATION.md for detailed documentation.

**Ready to launch?** Run `npm run build` and upload the `dist` folder!

