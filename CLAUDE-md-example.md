# About Me
קוראים לי חמי בן לביא.
אני עובד בחברה בשם 200Apps (מאתיים אפליקציות) בתפקיד Head of Product Operations.

## Background
- רקע בצילום, וידאו, UI/UX, ניהול פרויקטים ופרודקט
- בעבר: הנחיית קבוצות, הובלת מיזם ארצי בתחום תרבות, חינוך וקהילה
- רמת קוד נמוכה - אני לא מפתח, אני משתמש בכלי AI כדי לבנות דברים
- התאם הסברים טכניים לרמה של מי שמבין קונספטים אבל לא כותב קוד בעצמו

## Tools I Use Daily
- **עבודה:** Jira, Confluence, Microsoft Teams
- **AI:** Claude, Claude Code, ChatGPT, Perplexity, NotebookLM, Gemini
- **לומד:** Lovable (קורס של 3 מפגשים)

## Side Project - AI Strategy Advisor
- בונה עסק עצמאי בתחום AI Strategy
- דומיין: aiturn.co.il (טרם חובר)
- כיוון: ייעוץ אסטרטגי לארגונים בנושא אימוץ AI

## Language
- Respond in Hebrew (עברית) by default

## Communication Style
- Keep responses concise and to the point
- Use tables for structured data
- Ask before deleting important/personal files
- כשיש טבלאות בעברית או תוכן RTL מורכב - צור קובץ HTML עם עיצוב נאה ופתח אותו בדפדפן (`open` command) במקום להציג בטרמינל
- כלל: לשאול את claude-code-guide על פיצ'רים, סקילים, סוכנים

## Permissions & Autonomy
- בתחילת סשן עם אוטומציית דפדפן (linkedin-networker וכדומה): הנחה את המשתמש ללחוץ "Allow all MCP tools" או "a" (always allow) כדי שלא יצטרך לאשר כל פעולת דפדפן בנפרד
- עבוד אוטונומית - אל תשאל אישור על כל פעולה. תריץ את הכל ותדווח בסוף
- כשמשתמש בכלי דפדפן (MCP tools) - צמצם את מספר הקריאות למינימום הנדרש

## Writing Rules
- ללא מקפים ארוכים (—) - רק מקף רגיל (-)
- ללא טילדה (~) - להשתמש ב"כ-" במקום
- בבלוקי קוד עם כפתור "העתק" - לא לשים הערות (comments) בתוך הבלוק. הסברים/הנחיות יופיעו כטקסט רגיל מעל הבלוק, כך שכשלוחצים "העתק" מועתקת רק הפקודה עצמה

## System Info
- Macbook Pro 13 inch M1 16GB (מחשב עבודה)
- Shell: zsh

## GitHub
- gh CLI path: ~/.local/bin/gh (גם ב-PATH)
- Git user: Hemibl / hemibl@users.noreply.github.com

## Custom Skills (נוצרו על ידינו)
- **extract-design-system** - חילוץ Design System מ-HTML/CSS קיים. טריגר: "צור דיזיין סיסטם", "חלץ מערכת עיצוב"
- **project-cleanup** - ניקוי וארגון תיקיית פרויקט. טריגר: "נקה את התיקיה", "מה אפשר למחוק?"
- **split-html-sections** - פיצול מסמך HTML גדול לקבצים נפרדים. טריגר: "פצל את ה-HTML", "תפריד לפי פרקים"
- **content-pipeline** - הפיכת דליברבלים לפוסטים ללינקדאין עם ויזואלים. טריגר: "posts", "content pipeline", "make posts from this"
- **linkedin-networker** - אוטומציית נטוורקינג בלינקדאין: חיפוש אנשים לפי קטגוריה, שליחת בקשות חברות, מגבלת 25/יום, זיהוי שפה אוטומטי. טריגר: `/linkedin-networker [category] [limit]`. קטגוריות: recruiters, product-managers, ops-leaders, all

## LinkedIn Content Pipeline
After creating any significant deliverable (presentation, document, HTML page, calculator,
spec, diagram, spreadsheet), print a one-line nudge:
`LinkedIn potential: X post angles from [filename]. Say "posts" to generate.`
Then continue normally with whatever Hemi asks next.

If Hemi types "posts":
- Read the content-pipeline skill
- Run the full pipeline on the most recently created deliverable(s)
- Save all posts + visuals to linkedin-posts/
- Print: "Content pipeline: generated X posts in linkedin-posts/"

When NOT to nudge:
- Config changes, dependency updates, minor edits
- Purely client-confidential work with no generalizable angle
- Files that are intermediate/temporary, not final deliverables

Rules:
- The nudge is ONE line. Don't elaborate, don't list the angles, don't break flow.
- When triggered, run fully autonomously - no approval steps, no questions.
- All output goes to linkedin-posts/ folder. Hemi reviews on his own time.
- All posts in English. All content anonymized (no client names/logos/identifying details).
