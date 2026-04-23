# פרומפטים למחולל תמונות - איורי וובינר Claude Code

כל הפרומפטים באנגלית (הכי יציבים למודלי תמונה). Copy-paste למחולל לפי הסדר.

---

## 🎨 Base Style (השתמש כקידומת לכל פרומפט)

```
Modern flat-vector children's picture book illustration style. Warm, slightly muted palette with soft cream and coral accents. Simple geometric shapes with hand-drawn charm. Subtle grain texture overlay. Expressive minimal character faces (dot eyes, simple smile). Clean compositions with plenty of negative space. No text, no letters, no words in the image. Square aspect ratio unless specified.
```

**למה זה עובד:** מתאר את האסתטיקה הכללית של "כריכת ספר ילדים עדכנית" - פלאט, חם, ידידותי - בלי להזכיר אמן/ספר ספציפי (שיכול להפעיל filters IP במודל ולהוציא תוצאה גנרית).

---

## 👥 הדמויות הקבועות (צור פעם אחת, השתמש חוזר)

### Character Sheet 1 - הטייס
```
[BASE STYLE]
Character design sheet of a friendly cartoon fox wearing a vintage aviator outfit: leather flight cap with goggles pushed up on forehead, cream-colored scarf around neck, small orange coat. Three views on one canvas: front view, 3/4 view, side view. Neutral off-white background. The character looks curious and gentle. Flat colors, no gradients.
```

### Character Sheet 2 - הצוללנית
```
[BASE STYLE]
Character design sheet of a friendly cartoon otter wearing a vintage diving outfit: brass-colored round diving helmet with front porthole (off), small air bubbles beside helmet, soft teal diving suit. Three views on one canvas: front view, 3/4 view, side view. Neutral off-white background. The character looks brave and adventurous. Flat colors, no gradients.
```

> החלופות: שועל+לוטרה / חתול+תמנון / קיפוד+כלב-ים. בחרתי שועל+לוטרה כי שניהם בעלי חיים עם שיער, גודל דומה, ותואמים נראטיב של "שני חברים בגודל דומה".

---

## 🎬 6 סצנות Chapter Interstitials

### Chapter 1 · Pre-flight Briefing (שלב 1: פתיחה)
```
[BASE STYLE]
The fox aviator and otter diver standing together on a quiet airport runway at golden hour. They look at a clipboard together. A small red paper airplane propped on the ground beside them. Soft pink and peach sky gradient. A tiny control tower silhouette in the far distance. Wide horizontal composition. No text.
```

### Chapter 2 · Takeoff (שלב 2: וואו ראשון)
```
[BASE STYLE]
The fox aviator flying a small single-propeller vintage plane, just lifting off. The otter waves from a tiny window inside the plane. Motion lines behind the plane. A few puffy cream-colored clouds ahead. Light blue sky with warm horizon below. Dynamic diagonal composition with plane angling upward. No text.
```

### Chapter 3 · Cruising Altitude (שלב 3: הבסיס)
```
[BASE STYLE]
High-altitude view from inside the plane's cabin looking out a round window. The otter holds a paper map with a dotted route line. The fox pilots calmly. Below through the window: a miniature landscape of hills, tiny houses, and winding roads seen from above, like a toy model. Soft turquoise sky. Cozy warm interior. No text on the map.
```

### Chapter 4 · Splashdown → Descent (שלב 4: דמו מרכזי)
```
[BASE STYLE]
Dramatic two-part split composition. Top half: the plane gently descending toward a calm turquoise sea at sunset, casting a long reflection. Bottom half (below waterline): the otter already in her diving helmet descending through lighter blue water, small bubble trail rising, soft light rays from above. The fox peeks through a porthole window of a submerged capsule. Warm-to-cool color transition across the horizon line. No text.
```

### Chapter 5 · Deep-Sea Exploration (שלב 5: דמו מוגמר)
```
[BASE STYLE]
Underwater scene in gentle medium-depth ocean. The otter in her diving helmet floats beside a colorful coral reef, examining a glowing treasure chest with curiosity. The fox, now also wearing a smaller diving helmet, points excitedly at a passing school of small fish. Soft light rays filtering from the surface above. Coral pinks and teals dominate. Peaceful, wondrous mood. No text.
```

### Chapter 6 · Surfacing (שלב 6: סיום + Q&A)
```
[BASE STYLE]
The fox and the otter sitting together on a quiet sandy beach at dusk, helmets and goggles off beside them, looking out at the horizon. Two paths visible: one going inland toward small houses with warm windows, one trailing along the shore toward more adventure. A small notebook open between them. Soft lavender-peach sky with first stars appearing. Peaceful, reflective mood. No text.
```

---

## 🎯 Spot Illustrations (אלמנטים קטנים למצגת)

### Passport (עבור CLAUDE.md)
```
[BASE STYLE]
A small navy-blue passport booklet, slightly open, with a simple geometric logo on cover (a paper airplane and a wave). Sitting on a wooden surface. Single object, centered, isolated. No text on the passport.
```

### Cloud Layers (עבור דמו חי - "עוד גובה")
```
[BASE STYLE]
A vertical stack of three cloud layers at different altitudes, each slightly different shade of cream-to-pink, with the fox's small plane flying between them. Soft gradient sky background. Minimalist, poster-like composition. No text.
```

### Tool Kit (עבור סקילים)
```
[BASE STYLE]
An open wooden toolbox from above, containing whimsical tools: a tiny compass, a wrench, a magnifying glass, a small rolled map, a rope coil, a notebook. Flat-lay composition. Warm wood and coral accents. No text.
```

### Parachute (עבור תוסף Chrome)
```
[BASE STYLE]
A small red-and-cream striped parachute gently descending, with the fox hanging from it holding a small laptop. Against soft blue sky background. Single centered composition. No text.
```

### Depth Gauge (עבור מעבר לטרמינל)
```
[BASE STYLE]
A vintage brass diving depth gauge, circular, with a needle pointing to a mid-depth mark. Soft teal water background around it. Single object illustration. Numbers on the gauge should be simple tick marks, not actual readable digits. No text labels.
```

---

## 🔧 טיפים להפעלה

1. **צור קודם את ה-Character Sheets** - זה נותן למודל עוגן להמשכיות. שמור אותם והשתמש כ-image reference (אם Nano Banana תומך) לשאר הסצנות.

2. **בקש variations של 4** - אל תסתפק בתוצאה ראשונה. בחר את הטובה ואחר כך בקש refinement.

3. **פלטה אחידה - תזכורת למודל:** אם התוצאות מפוזרות, הוסף בסוף:
   ```
   Strict color palette: cream (#FFF4E0), peach (#FFB88C), coral (#FF6B6B), sky blue (#7EC8E3), deep ocean (#01579B), soft teal (#4DB6AC). No other colors.
   ```

4. **לוודא שהאיורים חסרי טקסט** - הדגשתי "No text" בכל פרומפט כי מודלי תמונה נוטים להוסיף כיתובים שבורים. אם עדיין מופיע - הוסף `negative: text, letters, words, typography, writing`.

5. **יחס תמונה:**
   - Character sheets: square (1:1)
   - Chapter interstitials: wide landscape (16:9 או 3:2)
   - Spot illustrations: square (1:1)

6. **שם הקובץ המוצע לכל תמונה:**
   ```
   char-fox-aviator.png
   char-otter-diver.png
   ch01-preflight.png
   ch02-takeoff.png
   ch03-cruising.png
   ch04-splashdown.png
   ch05-reef.png
   ch06-shore.png
   spot-passport.png
   spot-clouds.png
   spot-toolkit.png
   spot-parachute.png
   spot-gauge.png
   ```
   שמור ב-`assets/journey/`

---

## 🚫 מה כן לא לכתוב בפרומפט
- ❌ שמות אמנים ("in the style of Andrew Joyner")
- ❌ שמות ספרים ("Garcia and Colette style")
- ❌ שמות דמויות מוגנות
- ❌ תיאורים שמזהים יצירה ספציפית

זה גם בעייתי משפטית וגם גורם למודלים רבים להחזיר שגיאה או תוצאה גנרית. התיאור הסטייליסטי שלמעלה מספיק כדי להגיע לאסתטיקה דומה מאוד.
