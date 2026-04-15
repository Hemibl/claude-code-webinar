function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch(parseErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'שם מלא',
        'אימייל',
        'חברה / מוסד',
        'תפקיד / תחום',
        'מחזור גיוס',
        'לינקדאין',
        'Claude מותקן?',
        'ניסיון',
        'מה לשפר',
        'ציפיות',
        'Webinar',
        'מייל נשלח?'
      ]);
    }

    var emailSent = 'no';

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('he-IL'),
      data.fullName || '',
      data.email || '',
      data.company || '',
      data.role || '',
      data.cohort || '',
      data.linkedin || '',
      data.claudeInstalled || '',
      data.experience || '',
      data.frustration || '',
      data.expectations || '',
      data.webinar || 'webinar-2-hanemr',
      emailSent
    ]);

    // Send confirmation email
    if (data.email) {
      try {
        sendConfirmationEmail(data.fullName, data.email);
        emailSent = 'yes';
        // Update the last row with email status
        var lastRow = sheet.getLastRow();
        sheet.getRange(lastRow, 13).setValue('yes');
      } catch(emailErr) {
        Logger.log('Email error: ' + emailErr.toString());
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(fullName, email) {
  var firstName = fullName.split(' ')[0];

  var subject = 'אישור הרשמה - Claude Code לנמרים מעופפים 🐆';

  var htmlBody = '<!DOCTYPE html>' +
    '<html dir="rtl" lang="he">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="font-family: Calibri, Arial, sans-serif; direction: rtl; text-align: right; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a2e; line-height: 1.8;">' +
    '<div style="background: linear-gradient(135deg, #064e3b, #0d9373); padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 24px;">' +
    '<h1 style="color: #fff; margin: 0; font-size: 24px;">Claude Code לנמרים מעופפים</h1>' +
    '<p style="color: #f5e642; margin: 8px 0 0; font-size: 16px; font-weight: 600;">ממריאים ביחד - רביעי 15.4 | 21:00</p>' +
    '</div>' +
    '<p style="font-size: 16px;">היי ' + firstName + ',</p>' +
    '<p style="font-size: 16px;">תודה שנרשמת! שמרנו לך מקום 🎉</p>' +
    '<div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 20px 0;">' +
    '<p style="margin: 0 0 8px; font-weight: 700; font-size: 15px;">פרטי המפגש:</p>' +
    '<p style="margin: 4px 0;">📅 רביעי, 15 באפריל 2026</p>' +
    '<p style="margin: 4px 0;">🕘 21:00 (שעה וחצי)</p>' +
    '<p style="margin: 4px 0;">📍 Zoom</p>' +
    '</div>' +
    '<div style="text-align: center; margin: 24px 0;">' +
    '<a href="https://us04web.zoom.us/j/77886571189?pwd=ggleb2CwCMvkBNh3ckdsxb4UZoZD6i.1" style="display: inline-block; padding: 14px 32px; background: #2D8CFF; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">לינק למפגש בזום</a>' +
    '</div>' +
    '<div style="background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; margin: 20px 0;">' +
    '<p style="margin: 0 0 8px; font-weight: 700; font-size: 15px;">⚡ חשוב - להתקין לפני המפגש:</p>' +
    '<p style="margin: 4px 0;">לא נקדיש זמן להתקנה במפגש עצמו, אז עדיף מאוד להגיע מוכנים.</p>' +
    '<p style="margin: 4px 0;">הכנתי מדריך התקנה פשוט גם ל-Windows וגם ל-Mac:</p>' +
    '<p style="margin: 12px 0 4px; text-align: center;"><a href="https://hemibl.github.io/claude-code-webinar/materials/installation-guide.html" style="display: inline-block; padding: 10px 24px; background: #0d9373; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 500;">מדריך התקנה</a></p>' +
    '<p style="margin: 8px 0 0; font-size: 13px; color: #92400e;">שימו לב: נדרש חשבון Claude Pro ($20/חודש). אפשר גם להשתתף כ"צופים מהצד" ולהחליט אחרי המפגש.</p>' +
    '</div>' +
    '<p style="font-size: 15px;">המפגש לא יהיה מוקלט - מי שרוצה ליהנות, צריך להיות שם 😊</p>' +
    '<p style="font-size: 15px;">נתראה!<br><strong>חמי בן לביא</strong><br>' +
    '<a href="https://www.linkedin.com/in/hemibenlavi/" style="color: #0d9373;">LinkedIn</a> | ' +
    '<a href="tel:0544608119" style="color: #0d9373;">054-460-8119</a></p>' +
    '</body></html>';

  GmailApp.sendEmail(email, subject, '', {
    htmlBody: htmlBody,
    name: 'חמי בן לביא'
  });
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Form backend is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
