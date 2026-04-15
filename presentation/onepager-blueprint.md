# Claude Code for Product Ops - One-Pager Blueprint
## Scrollable Visual Reference for Live Webinar | 25.3.2026

**Format:** Single scrollable HTML page (NOT a slide deck). The presenter scrolls to relevant sections during a live Teams webinar while alternating with terminal demos and browser tabs.

**Audience:** 75 Product Ops professionals from 49 companies. 60% beginners, 52% without Claude Code installed. Mix of ProdOps, Program Managers, Directors/VPs.

**Language:** Hebrew (RTL). Code blocks in English (LTR).

**Tone:** Dark, professional, terminal-inspired. Confident but approachable. Not corporate - more "experienced peer sharing a discovery."

---

## Design System

### Reference
Inspired by: aviz85.github.io/claudosh-series/session-2/index.html

### Color Palette
- **Background body:** `#0a0a0a` (near black)
- **Card background:** `#141414`
- **Card border:** `#1e1e1e`
- **Text primary:** `#e5e5e5`
- **Text muted:** `#888888`
- **Text dim:** `#555555`
- **Green (success/agent):** `#22C55E`
- **Amber (warning/highlight):** `#F59E0B`
- **Red (critical):** `#EF4444`
- **Blue (info/primary):** `#3B82F6`
- **Purple (advanced):** `#A855F7`
- **Orange (brand/accent):** `#FB923C`

### Typography
- **Body font:** 'Heebo', sans-serif (loaded from Google Fonts)
- **Code/mono font:** 'JetBrains Mono', monospace (loaded from Google Fonts)
- **Section labels:** JetBrains Mono, 0.7rem, 600 weight, uppercase, letter-spacing 2px, color #555
- **Section titles:** Heebo, 1.8rem, 800 weight, color #e5e5e5
- **Section subtitles:** Heebo, 1rem, 300 weight, color #888
- **Card titles:** Heebo, 1.1rem, 700 weight
- **Card body:** Heebo, 0.9rem, 400 weight, color #888, line-height 1.6
- **Stat numbers:** JetBrains Mono, 2.4rem, 800 weight

### Card Design
- Background: `#141414`
- Border: `1px solid #1e1e1e`
- Border-radius: `16px`
- Padding: `24px`
- Colored top border: `3px solid {color}` per card type
- Hover: `translateY(-3px)` + `box-shadow: 0 8px 30px rgba(0,0,0,0.4)`

### Layout
- Container: `max-width: 900px`, centered, `padding: 0 32px`
- Sections: `padding: 56px 0`, separated by `1px solid #1e1e1e` bottom border
- Card grids: CSS Grid with `gap: 16px`
- Responsive: Single column below 700px

### Animations
- Intersection Observer fade-in on cards, stat boxes, timeline items, quotes
- Initial state: `opacity: 0; translateY(20px)`
- Visible state: `opacity: 1; translateY(0)`
- Transition: `0.6s ease`

---

## Section 1 - HERO

**Purpose:** Opening visual shown while participants join. Sets the tone and brand.

**Content:**

**Badge (top-center, pill shape):**
"CLAUDE CODE FOR PRODUCT OPS"
- Font: JetBrains Mono, 0.75rem, 600 weight, uppercase, letter-spacing 2px
- Color: `#FB923C` (orange)
- Border: `1px solid rgba(251, 146, 60, 0.3)`
- Background: `rgba(251, 146, 60, 0.08)`
- Padding: `6px 18px`, border-radius: `20px`

**Title (center, below badge):**
"Claude Code
for Product Ops"
- Font: JetBrains Mono, 3.2rem, 900 weight
- Color: gradient text `linear-gradient(135deg, #3B82F6, #A855F7)` with `-webkit-background-clip: text`
- Line break between "Claude Code" and "for Product Ops"

**Date/Venue (center, below title):**
"רביעי 25.3.2026 | 21:00 | Microsoft Teams"
- Font: Heebo, 1.1rem, color #888
- "21:00" highlighted in green (#22C55E), JetBrains Mono, 700 weight

**Tagline (center, below date):**
"בלי קוד. בלי רקע טכני. אבל עם מלא ערך."
- Font: Heebo, 1.15rem, 300 weight, color #888
- "בלי קוד." in bold green (#22C55E, 600 weight)

**Author (center, bottom):**
"חמי בן לביא"
- Font: Heebo, 0.9rem, color #555
- Margin-top: 28px

**Layout:**
- Full width section, padding 80px top, 50px bottom
- All elements centered
- Bottom border: 1px solid #1e1e1e

**Visual:**
- Orange space invader icon (&#x1F47E; emoji) at top, 2.5rem, color #FB923C
- No other decorative elements. Clean and minimal.

---

## Section 2 - AGENDA

**Purpose:** Show the evening's structure as a visual timeline. Displayed when presenter says "מה נעשה היום". Also serves as a reference for the presenter to know where they are.

**Content:**

**Section label:** "אג'נדה"
**Section title:** "מה נעשה היום"
**Section subtitle:** "סוכן AI שעובד על המחשב שלכם. נעבוד לאט, מהיסודות."

**Timeline (vertical, 6 items):**
Each item has: colored dot, time range, title, description.

Timeline line: 2px vertical line, color #1e1e1e, positioned on the right side (RTL).
Dots: 18px diameter circles, 3px border in section color, #0a0a0a fill, positioned on the line.

| # | Dot Color | Time | Title | Description |
|---|-----------|------|-------|-------------|
| 1 | Green | 0:00 - 7:00 | פתיחה | הכרות, הסיפור שלי, למה אנחנו פה |
| 2 | Blue | 7:00 - 12:00 | דמו פתיחה - "הכירו את הסוכן" | סידור תיקיית Downloads חי - להרגיש את היכולת |
| 3 | Purple | 12:00 - 22:00 | יסודות + בטיחות | מה זה Claude Code, בטיחות, CLAUDE.md, מודלים, טרמינלים מקבילים |
| 4 | Amber | 22:00 - 50:00 | דמו מרכזי - Portfolio Health Dashboard | משני קבצים מבולגנים לדשבורד BI אינטראקטיבי ב-3 פקודות |
| 5 | Orange | 50:00 - 66:00 | Skills + Chrome + דמו אפיון | כלים מתקדמים + סיפור אמיתי: מ-2 לינקים לפרוטוטייפ |
| 6 | Red | 66:00 - 90:00 | סיכום + Q&A | 3 טיפים, CTA, שאלות ותשובות |

**Quote block (below timeline, margin-top 32px):**
"להפסיק לפחד"
- Attribution: "מתוך טופס ההרשמה"
- Style: Right border 4px solid #F59E0B, padding 16px 24px, background rgba(245,158,11,0.05), border-radius 0 12px 12px 0
- Quote text: Heebo, 1.4rem, 300 weight, italic, color #F59E0B
- Author: Heebo, 0.85rem, color #555, not italic

---

## Section 3 - PAIN STATS

**Purpose:** Show registration data about audience pain points. Displayed when presenter talks about "מה גוזל לכם הכי הרבה זמן". Creates empathy and relevance.

**Content:**

**Section label:** "הכאב שלנו"
**Section title:** "מה גוזל לכם הכי הרבה זמן?"
**Section subtitle:** "מתוך תשובות 75 נרשמים בטופס ההרשמה"

**4 stat boxes in horizontal row:**

| Number | Color | Label |
|--------|-------|-------|
| 20 | Amber | מעקב ידני ומשימות |
| 18 | Orange | סנכרון בין צוותים |
| 13 | Blue | דוחות ודשבורדים |
| 9 | Purple | מצגות ומסמכים |

**Stat box design:**
- Flex row, equal width, gap 16px
- Background: #141414, border: 1px solid #1e1e1e, border-radius: 16px
- Padding: 24px, text-align center
- Number: JetBrains Mono, 2.4rem, 800 weight, colored per column
- Label: Heebo, 0.85rem, color #888, margin-top 8px
- On mobile: stack vertically (2x2 grid or single column)

---

## Section 4 - WHAT IS CLAUDE CODE

**Purpose:** Explain the fundamental difference between chat AI and agent AI. Displayed during the "מה זה Claude Code" explanation.

**Content:**

**Section label:** "הבנת הכלי"
**Section title:** "מה זה Claude Code?"
**Section subtitle:** "לא צ'אטבוט. סוכן."

**2 comparison cards side by side:**

**Card 1 (Amber top border):**
- Label: "צ'אט" (JetBrains Mono, 0.7rem, uppercase, letter-spacing 2px, amber)
- Title: "Cowork / ChatGPT"
- Body: "כותבים, עונים. טקסט פנימה, טקסט החוצה."
- Emphasis line: "שותף לשיחה." (bold, white text)

**Card 2 (Green top border):**
- Label: "סוכן" (JetBrains Mono, 0.7rem, uppercase, letter-spacing 2px, green)
- Title: "Claude Code"
- Body: "קורא קבצים. מנתח נתונים. יוצר דשבורדים, מסמכים, מצגות. מריץ קוד. מסדר, מעביר, בונה."
- Emphasis line: "עוזר שיושב מול מחשב ועושה את העבודה." (bold, white text)

---

## Section 5 - SAFETY

**Purpose:** Address security concerns proactively. Critical for this audience - they manage sensitive company data.

**Content:**

**Section label:** "בטיחות"
**Section title:** "שלוש שכבות הגנה"
**Section subtitle:** "סוכן שעובד על הקבצים שלי? לגיטימי לשאול."

**3 cards in horizontal grid:**

**Card 1 (Green top):**
- Icon: &#x2705; (checkmark emoji, 1.6rem)
- Title: "אישור פעולות" (green)
- Body: "כל פעולה שמשנה משהו - מחיקה, העברה, הרצת סקריפט - הוא שואל לפני."
- Emphasis: "אתם המפתח." (bold white)

**Card 2 (Amber top):**
- Icon: &#x1F6C3; (customs/luggage emoji, 1.6rem)
- Title: "ערנות לקבצים" (amber)
- Body: "'אתה בוטח בתיקייה הזו?' בדיוק כמו בשדה התעופה:"
- Emphasis: "'ארזת את המזוודה לבד?'" (bold white)

**Card 3 (Purple top):**
- Icon: &#x1F512; (lock emoji, 1.6rem)
- Title: "פרטיות" (purple)
- Body: "אפשר לכבות אימון על השיחות שלכם בהגדרות."
- Emphasis: "הנתונים שלכם לא משמשים לשיפור המודל." (bold white)

---

## Section 6 - CLAUDE.MD

**Purpose:** Explain the most important concept for beginners. Shown when presenter demonstrates CLAUDE.md files.

**Content:**

**Section label:** "יסודות"
**Section title:** "CLAUDE.md - המפתח"
**Section subtitle:** "מסמך הכשרה לעובד חדש. כותבים בו מי אתם ומה אתם צריכים."

**2 cards side by side:**

**Card 1 (Blue top) - Code example:**
- Title: "דוגמה בסיסית" (blue)
- Code block (LTR, JetBrains Mono, 0.85rem, green text on #0d0d0d bg):
```
# About Me
Role: Product Operations Manager
Company: [Your Company]
Tools: Jira, Confluence, Slack

# Preferences
Language: Hebrew
Style: Dark theme dashboards
Format: Tables for data
```

**Card 2 (Green top) - Benefits:**
- Title: "מה זה נותן?" (green)
- Bullet list with green ">" markers:
  - "Claude מכיר אתכם מהרגע הראשון" (bold "Claude מכיר אתכם")
  - "לא צריך להסביר מחדש כל פעם" (bold "לא צריך להסביר")
  - "התוצאות מותאמות לסגנון שלכם" (bold "התוצאות מותאמות")
- Amber callout box at bottom:
  - Background: rgba(245,158,11,0.08), border: 1px solid rgba(245,158,11,0.2), border-radius 10px
  - Text: "בדמו הבא - תראו בדיוק איך הקובץ הזה משפיע על התוצאה." (amber, 0.9rem, bold "בדמו הבא")

---

## Section 7 - MODELS

**Purpose:** Quick reference for the 3 model tiers. Brief section - presenter mentions this in 2 minutes.

**Content:**

**Section label:** "יסודות"
**Section title:** "3 מודלים"
**Section subtitle:** "לא צריך לזכור עכשיו. רק לדעת שאפשר לשנות."

**3 cards in horizontal grid:**

**Card 1 (Purple top):**
- Big text: "Opus" (JetBrains Mono, 2rem, 800 weight, purple)
- Title: "החזק"
- Body: "לדברים מורכבים. יקר יותר, לוקח זמן. תוצאות מדהימות."

**Card 2 (Blue top, highlighted with 2px blue border all around):**
- Big text: "Sonnet" (JetBrains Mono, 2rem, 800 weight, blue)
- Title: "המאוזן" + badge "הכי נפוץ" (small pill, blue bg/border, 0.7rem)
- Body: "מהיר, חכם. מספיק טוב ל-90% מהמקרים."
- Emphasis: "בדמו נשתמש בזה." (bold white)

**Card 3 (Green top):**
- Big text: "Haiku" (JetBrains Mono, 2rem, 800 weight, green)
- Title: "הזריז"
- Body: "לדברים קטנים. זול ומהיר. שאלות מהירות."

---

## Section 8 - PARALLEL TERMINALS

**Purpose:** Visual tip about running multiple Claude Code instances. Quick visual, 30 seconds on screen.

**Content:**

**Section label:** "יסודות"
**Section title:** "טרמינלים מקבילים"
**Section subtitle:** "שני עוזרים שעובדים בו-זמנית."

**2 cards centered (max-width 600px):**

**Card 1 (Blue top, centered text):**
- Icon: &#x1F4CA; (chart emoji, 1.6rem)
- Title: "חלון 1"
- Body: "Claude בונה דשבורד"

**Card 2 (Green top, centered text):**
- Icon: &#x2709;&#xFE0F; (envelope emoji, 1.6rem)
- Title: "חלון 2"
- Body: "Claude כותב מייל"

---

## Section 9 - THREE TIPS

**Purpose:** Practical takeaways before Q&A. Summarizes the evening into actionable advice.

**Content:**

**Section label:** "סיכום"
**Section title:** "3 טיפים לדרך"
**Section subtitle:** "לפני שנעבור לשאלות."

**3 cards in horizontal grid:**

**Card 1 (Green top):**
- Number: "1" (JetBrains Mono, 2rem, 800 weight, green)
- Title: "תתחילו בקטן"
- Body: '"תסדר לי קבצים"
"תסכם לי מסמך"

אל תנסו דשבורד ביום הראשון. תרגישו את הכלי.'

**Card 2 (Blue top):**
- Number: "2" (JetBrains Mono, 2rem, 800 weight, blue)
- Title: "תהיו ספציפיים"
- Body: 'לא "תבנה משהו יפה"

כן "דשבורד עם ערכת נושא כהה וגרפים עגולים"' (the "yes" example in bold white)

**Card 3 (Purple top):**
- Number: "3" (JetBrains Mono, 2rem, 800 weight, purple)
- Title: "תשמרו מה שעובד"
- Body: 'סגנון שמתאים? → CLAUDE.md (bold white)
תהליך שחוזר? → Skill (bold white)

לא מתחילים מאפס כל פעם.'

---

## Section 10 - CTA

**Purpose:** Call to action. Displayed at the end before Q&A. Links will be shared in Teams chat.

**Content:**

**Section label:** "מה הלאה"
**Section title:** "המשיכו מפה"

**2 cards side by side, larger padding (32px):**

**Card 1 (Green top):**
- Icon: &#x1F4AC; (speech bubble emoji, 2.2rem)
- Title: "קבוצת ווצאפ" (1.3rem, 700 weight)
- Body: "טיפים שבועיים, שאלות, ומפגש המשך עם נושאים מתקדמים: Chrome Extension, יצירת Skills, ועוד דמואים."
- Link text: "הלינק בצ'אט ←" (JetBrains Mono, 0.8rem, green, 600 weight)

**Card 2 (Purple top):**
- Icon: &#x1F3E2; (office building emoji, 2.2rem)
- Title: "סדנאות בחברות" (1.3rem, 700 weight)
- Body: "אם אתם חושבים שהצוות שלכם צריך את זה - אני עושה סדנאות מותאמות בחברות.

דברו איתי אחרי."

**Background:** Section background slightly different: #0d0d0d (subtle distinction from main #0a0a0a)

---

## Footer

**Content:**
"חמי בן לביא | Claude Code for Product Ops | 25.3.2026"

**Style:**
- Padding: 32px 0
- Text-align: center
- Color: #555
- Font-size: 0.8rem

---

## Technical Requirements

- Single HTML file, self-contained
- Fonts loaded from Google Fonts CDN (Heebo + JetBrains Mono)
- All CSS inline in `<style>` tag
- All JS inline in `<script>` tag (Intersection Observer for animations only)
- No external dependencies
- RTL direction on `<html>` tag
- Responsive: works on presenter's 13" MacBook Pro screen
- Smooth scrolling: `scroll-behavior: smooth` on html
- Code blocks are LTR (`direction: ltr; text-align: left`)
