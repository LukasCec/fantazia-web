# 📸 Sprievodca pridávaním obrázkov - Pizzéria Fantázia

## 🏠 HLAVNÁ STRÁNKA (Landing Page)

### 1. **Hero sekcia - Hlavný obrázok pizze**
- **Umiestnenie**: `src/components/Hero.tsx` - riadok 68
- **Trieda**: `.image-placeholder.pizza-placeholder`
- **Odporúčaný obrázok**: 
  - **Čo**: Veľký atraktívny záber PIZZE
  - **Štýl**: Profesionálna fotka pizze zhora (top-down view), najlepšie na drevenom prkne alebo čiernom pozadí
  - **Detaily**: Pizza by mala vyzerať chutne, s rozťahujúcim sa syrom, čerstvými ingredienciami
  - **Rozmery**: Cca 800x800px (štvorcový formát)
  - **Príklady**: Margarita, Quattro Formaggi, alebo vaša najpredávanejšia pizza
  
### 2. **About sekcia - Obrázok reštaurácie**
- **Umiestnenie**: `src/components/About.tsx` - riadok 75
- **Trieda**: `.image-placeholder.restaurant-placeholder`
- **Odporúčaný obrázok**:
  - **Čo**: Interiér alebo exteriér pizzérie
  - **Štýl**: Útulný, príjemný priestor s hosťami alebo prázdny ale svetlý a čistý
  - **Detaily**: Stoly s hosťami, terasou s výhľadom na námestie, alebo pizza pec
  - **Rozmery**: Cca 600x800px (portrait/výška)
  - **Príklady**: Záber reštaurácie s hosťami pri jedle, večerná atmosféra, terasa

---

## 🚚 DONÁŠKOVÁ STRÁNKA

### 3. **Hero sekcia - Donáška/Doručovanie**
- **Umiestnenie**: `src/pages/DeliveryPage.tsx` - riadok 92
- **Trieda**: `.delivery-image-placeholder`
- **Odporúčaný obrázok**:
  - **Čo**: Pizza v krabici alebo kuriér s pizzou
  - **Štýl**: Dynamický záber - otvorená krabica s horúcou pizzou, pára, čerstvosť
  - **Detaily**: Ruky držiace krabicu s pizzou, logo na krabici ak máte
  - **Rozmery**: Cca 800x800px (štvorcový)
  - **Príklady**: Pizza box otvorený, doručovateľ na skútri, pizza pripravená na doručenie

---

## 🍕 JEDÁLNY LÍSTOK - STRÁNKA

### 4. **Menu obrázky (12 stránok PDF)**
- **Umiestnenie**: `src/pages/MenuPage.tsx`
- **Aktuálne súbory**: `src/assets/jedalny_page-0001.jpg` až `jedalny_page-0012.jpg`
- **Status**: ✅ **UŽ MÁTE** - Obrázky sú už nahraté, stránka používa existujúce súbory
- **Poznámka**: Tieto obrázky sa scrollujú pod sebou ako jednotlivé stránky menu

---

## 🖼️ GALÉRIA - STRÁNKA

### 5. **Hero sekcia galérie**
- **Umiestnenie**: `src/pages/GalleryPage.tsx` - riadok 56
- **Trieda**: `.gallery-image-placeholder-hero`
- **Odporúčaný obrázok**:
  - **Čo**: Reprezentatívny obrázok pizzérie alebo jedla
  - **Štýl**: Výrazný, farebnný, appetite appeal
  - **Detaily**: Môže byť koláž, alebo jeden výrazný záber
  - **Rozmery**: Cca 800x800px (štvorcový)

### 6. **12x Obrázky v galérii**
- **Umiestnenie**: `src/pages/GalleryPage.tsx` - grid začína na riadku 90
- **Počet**: 12 obrázkov (id: 1-12)
- **Odporúčané obrázky**:
  1. **Pizza #1** - Margarita alebo klasická
  2. **Pizza #2** - Šunková alebo špeciálna
  3. **Interiér** - Priestory reštaurácie
  4. **Pizza #3** - Šalámová alebo diavola
  5. **Pizza #4** - Vegetariánska
  6. **Exteriér/Terasa** - Vonkajšie posedenie
  7. **Pizza #5** - Špeciálna pizza
  8. **Jedlo #1** - Iné jedlo z ponuky (cestoviny, šalát)
  9. **Pizza #6** - Seafood pizza alebo luxusnejšia
  10. **Detaily** - Close-up ingrediencií alebo prípravy
  11. **Atmosféra** - Hostia pri stole, atmosféra
  12. **Pizza #7** - Najpredávanejšia pizza

- **Rozmery všetkých**: Cca 500x500px (štvorcový formát pre grid)
- **Štýl**: Konzistentné osvetlenie, podobný štýl fotenia

---

## 📝 AKO PRIDAŤ OBRÁZKY

### Metóda 1: Priame nahradenie placeholder divov

1. Vytvor priečinok `src/assets/images/` (ak neexistuje)
2. Umiestni tam obrázky (napr. `hero-pizza.jpg`, `restaurant-interior.jpg`, atď.)
3. Importuj obrázky v príslušných súboroch:
   ```tsx
   import heroPizzaImg from '../assets/images/hero-pizza.jpg';
   ```
4. Nahraď `<div className="image-placeholder">` za:
   ```tsx
   <img src={heroPizzaImg} alt="Opis" />
   ```

### Metóda 2: CSS Background Image

1. Umiestni obrázky do `public/images/`
2. V CSS súbore nastav background:
   ```css
   .pizza-placeholder {
     background-image: url('/images/hero-pizza.jpg');
     background-size: cover;
     background-position: center;
   }
   ```

---

## 🎨 ODPORÚČANIA PRE FOTKY

### Kvalita
- **Rozlíšenie**: Minimálne 1000px na širšiu stranu
- **Formát**: JPG (optimalizované) alebo WebP
- **Veľkosť súboru**: Max 500KB pre každý obrázok (optimalizuj!)

### Štýl fotenia
- **Osvetlenie**: Prirodzené svetlo alebo teplé umelé svetlo
- **Pozadie**: Čisté, jednoduché (drevo, čierna bridlica, biely stôl)
- **Pizza**: Vždy čerstvá, horúca, s pekným vzhľadom
- **Kompozícia**: Rule of thirds, centrovaná pizza

### Nástroje na optimalizáciu
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)

---

## ✅ ZOZNAM POTREBNÝCH OBRÁZKOV

- [ ] 1x Hero Pizza (hlavná stránka)
- [ ] 1x Reštaurácia interiér/exteriér (About sekcia)
- [ ] 1x Donáška/Pizza box (Delivery stránka)
- [ ] 1x Galéria Hero (Galéria stránka header)
- [ ] 12x Galéria grid (mix pizz, interiéru, jedál)

**SPOLU: 16 obrázkov**

---

## 🚀 PRIORITA

1. **Vysoká priorita** (viditeľné hneď pri načítaní):
   - Hero Pizza (hlavná stránka)
   - Delivery Pizza box
   
2. **Stredná priorita**:
   - About reštaurácia
   - Galéria Hero
   
3. **Nízka priorita** (lazy loading možný):
   - 12x Galéria grid obrázkov

---

## 💡 TIPY

- Ak nemáš profesionálne fotky, môžeš začať so stock photos zo Unsplash alebo Pexels (zadarmo)
- Odporúčam najať fotografa na jeden deň pre konzistentné profesionálne fotky
- Mobilom s dobrým fotoaparátom a prirodzeným svetlom môžeš dosiahnuť slušné výsledky
- Vždy mysli na "appetite appeal" - jedlo musí vyzerať chutne!

