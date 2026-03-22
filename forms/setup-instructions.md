# חיבור טופס ל-Google Sheets - מדריך שלב אחר שלב

## שלב 1: יצירת Google Sheet חדש

1. היכנס ל-[Google Sheets](https://sheets.google.com)
2. לחץ על **"גיליון אלקטרוני ריק"** (Blank spreadsheet)
3. תן שם לגיליון, למשל: **"הרשמות וובינר Claude Code"**

## שלב 2: פתיחת עורך הסקריפט

1. בתפריט העליון של הגיליון, לחץ על **Extensions** (תוספים)
2. לחץ על **Apps Script**
3. ייפתח חלון חדש עם עורך קוד

## שלב 3: הדבקת הקוד

1. בעורך שנפתח, תראה קוד ברירת מחדל (משהו עם `myFunction`) - **מחק הכל**
2. פתח את הקובץ `google-apps-script.js` שנמצא באותה תיקייה
3. **העתק את כל התוכן** והדבק אותו בעורך
4. לחץ על **Ctrl+S** (או Cmd+S) לשמירה
5. אפשר לשנות את שם הפרויקט למעלה ל-"Form Backend"

## שלב 4: פריסה (Deploy)

1. לחץ על הכפתור הכחול **Deploy** (למעלה מימין)
2. בחר **New deployment**
3. ליד "Select type" לחץ על גלגל השיניים ובחר **Web app**
4. מלא את ההגדרות:
   - **Description:** Form submissions
   - **Execute as:** Me (החשבון שלך)
   - **Who has access:** Anyone
5. לחץ **Deploy**
6. Google יבקש הרשאות - לחץ **Authorize access**
   - אם מופיע מסך "Google hasn't verified this app" - לחץ **Advanced** ואז **Go to Form Backend (unsafe)**
   - לחץ **Allow**
7. יופיע **Web app URL** - **העתק אותו!** זה הכתובת שצריך להדביק בטופס

## שלב 5: חיבור הטופס

1. פתח את קובץ `registration.html`
2. חפש את השורה שמכילה `GOOGLE_SCRIPT_URL` או `YOUR_DEPLOYMENT_URL` או שורה עם fetch/submit
3. הדבק את ה-URL שהעתקת במקום המתאים
4. שמור את הקובץ

## שלב 6: בדיקה

1. פתח את הטופס בדפדפן
2. מלא פרטים לדוגמה ושלח
3. חזור ל-Google Sheet ובדוק שנוספה שורה חדשה

## פתרון בעיות

| בעיה | פתרון |
|-------|--------|
| הטופס לא שולח | בדוק שה-URL הודבק נכון, בלי רווחים |
| שגיאת CORS | ודא שבחרת "Anyone" בהגדרות הגישה |
| שגיאת הרשאות | פרוס מחדש: Deploy > Manage deployments > Edit > Version: New > Deploy |
| השורות לא מופיעות | בדוק שאתה מסתכל בגיליון הנכון (Sheet1) |

## עדכון הסקריפט בעתיד

אם תרצה לשנות את הקוד:
1. ערוך את הקוד ב-Apps Script
2. לחץ Deploy > **Manage deployments**
3. לחץ על אייקון העריכה (עיפרון)
4. שנה את Version ל-**New version**
5. לחץ **Deploy**

> חשוב: כל שינוי בקוד דורש יצירת version חדש כדי שייכנס לתוקף!
