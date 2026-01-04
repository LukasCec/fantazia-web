# 🚚 Donášková Stránka - Dokumentácia

## Prehľad

Moderná stránka pre donáškovú službu Pizzerie Fantázia s plnou responzivitou a animáciami.

## URL

```
http://localhost:5173/donaska
```

## Sekcie Stránky

### 1. **Hero Sekcia**
- Veľký nadpis s výrazným CTA
- Veľké telefónne číslo na zavolanie: **0908 390 417**
- Animovaný obrázok dodávky (oranžový gradient)
- Promo banner: "Objednaj 3 pizze a 4-tú máš GRÁTIS"

### 2. **Výhody (Features)**
Tri karty so službami:
- ✅ Rýchla donáška (30-45 minút)
- 🎁 Špeciálna akcia (3+1 pizza zdarma)
- ✓ Bez skrytých poplatkov

### 3. **Oblasti Donášky (Delivery Zones)**
Štýlové karty s cenníkom:

| Oblasť | Cena donášky | Min. objednávka |
|--------|--------------|-----------------|
| **Krompachy** | **ZDARMA** | 6 € |
| Kolinovce, Slovinky | 2,00 € | 15 € |
| Kluknava, Richnava | 2,50 € | 15 € |
| Kaľava, Slatvina, atď. | 3,00 € | 15 € |

### 4. **Prevádzková Doba**
Rozvrh donášky:
- Pondelok - Štvrtok: 11:00 – 21:00
- Piatok - Sobota: 11:00 – 22:00
- Nedeľa: 13:00 – 20:00

### 5. **CTA Sekcia**
- Výrazná červená sekcia
- Veľké tlačidlo na zavolanie

## Komponenty Použité

```typescript
// Štruktúra
DeliveryPage
├── Navbar (activePage="delivery")
├── Hero Section
│   ├── Text content
│   ├── Phone CTA button
│   └── Delivery image placeholder
├── Promo Banner
├── Features Grid (3 cards)
├── Delivery Zones Grid (4 cards)
├── Opening Hours
├── CTA Section
└── Footer
```

## Dizajnové Prvky

### Farebná Schéma
- Primárna: `#DB0000` (červená)
- Sekundárna: `#FF6B00` (oranžová)
- Zvýraznenie: Gradient od oranžovej

### Animácie
- Hero elementy fade in
- Karty lift efekt pri hoveri
- Floating delivery truck ikona
- Morphing blob pre obrázok

### Responzivita
- **Desktop**: 2-column layout pre zones
- **Tablet**: Stacked sections
- **Mobile**: Single column, full-width cards

## Ikony Použité

```typescript
import {
  Phone,      // Telefón
  MapPin,     // Lokácia
  Clock,      // Čas
  Truck,      // Dodávka
  Gift,       // Darček/Akcia
  Euro,       // Euro symbol
  CheckCircle // Checkmark
} from 'lucide-react';
```

## Interaktívne Prvky

### 1. Telefónne Tlačidlo
```tsx
<a href="tel:0908390417">
  Zavolať 0908 390 417
</a>
```

### 2. Hover Efekty
- Karty sa dvíhajú (translateY: -5px)
- Scale efekt na tlačidlách
- Shadow zmena pri hoveri

### 3. Scroll Animácie
- Každá sekcia fade in pri scrollovaní
- Staggered animation pre karty
- Smooth transitions

## Obrázky - Placeholdery

### Delivery Image
```css
background: linear-gradient(135deg, #FF6B00 0%, #ffaa66 100%);
```

**Kde nahradiť:** 
- Súbor: `src/pages/DeliveryPage.tsx`
- Riadok: ~101
- Element: `.delivery-image-placeholder`

**Odporúčaná veľkosť:** 800x800px
**Formát:** WebP alebo JPG (optimalizovaný)

## Prispôsobenie

### Zmeniť Telefónne Číslo
Vyhľadaj: `0908390417` alebo `0908 390 417`

Súbory:
- `src/pages/DeliveryPage.tsx` (5x výskyt)

### Zmeniť Ceny
Upraviť v poli `deliveryZones`:
```typescript
const deliveryZones = [
  { area: 'Krompachy', price: 'ZDARMA', minOrder: '6 €' },
  // ... ďalšie zóny
];
```

### Zmeniť Otváracie Hodiny
Upraviť v poli `hours`:
```typescript
const hours = [
  { day: 'Pondelok', time: '11:00 – 21:00' },
  // ... ďalšie dni
];
```

### Upraviť Akciu
Riadok ~50 a ~120:
```typescript
description: 'Objednaj 3 pizze a 4-tú máš grátis!',
```

## Navigácia

### Z Hlavnej Stránky
```typescript
// Features component
onClick: () => navigate('/donaska')
```

### Navbar
```typescript
{ id: 'delivery', label: 'Donáška', href: '/donaska' }
```

## Výkon

**Build Info:**
- Veľkosť komponentu: ~9 KB TS + ~13 KB CSS
- Optimalizované animácie
- Lazy loading ready

## SEO Optimalizácia

Odporúčané meta tagy pre delivery page:

```html
<title>Donášková služba | Pizzeria Fantázia Krompachy</title>
<meta name="description" content="Objednajte si pizzu s rýchlou donáškou. V Krompachoch ZDARMA! Volajte 0908 390 417. Akcia: 3+1 pizza grátis." />
<meta name="keywords" content="donáška pizza, Krompachy donáška, rýchla donáška jedla" />
```

## Testovanie

### Desktop
1. Otvor: http://localhost:5173/donaska
2. Skontroluj všetky sekcie
3. Testuj hover efekty
4. Klikni na telefónne číslo

### Mobile
1. Otvor DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Testuj responzivitu
4. Skontroluj touch friendly elementy

### Checklist
- [ ] Hero sekcia zobrazuje správne
- [ ] Telefónne číslo je klikateľné
- [ ] Všetky 4 delivery zones zobrazujú
- [ ] Promo banner je viditeľný
- [ ] Otváracie hodiny sú správne
- [ ] CTA tlačidlo funguje
- [ ] Mobile menu funguje
- [ ] Navbar zvýrazňuje "Donáška"

## Ďalšie Vylepšenia (Voliteľné)

### 1. Online Objednávkový Formulár
```typescript
// Pridať sekciu s formulárom
- Výber jedla
- Adresa doručenia
- Spôsob platby
- Poznámka k objednávke
```

### 2. Tracking Donášky
```typescript
// Real-time status
- Objednávka prijatá
- V príprave
- Na ceste
- Doručené
```

### 3. Kalkulačka Ceny
```typescript
// Automatický výpočet
- Cena jedla
- Cena donášky (podľa oblasti)
- Celková suma
```

### 4. Mapa Oblastí
```typescript
// Google Maps integrácia
- Vizualizácia delivery zón
- Interaktívna mapa
```

## Súbory

```
src/
├── pages/
│   ├── DeliveryPage.tsx    (9.2 KB)
│   └── DeliveryPage.css    (13.1 KB)
├── components/
│   └── Navbar.tsx          (upravené pre routing)
└── App.tsx                 (routing setup)
```

## Routing Setup

```typescript
// App.tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/donaska" element={<DeliveryPage />} />
</Routes>
```

---

**Vytvorené:** 4. január 2026  
**Verzia:** 1.0  
**Status:** ✅ Hotové a funkčné  
**Framework:** React 19 + TypeScript  
**Styling:** CSS3 s moderným dizajnom

