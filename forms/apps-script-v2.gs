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
      sheet.appendRow(['Timestamp','Full Name','Email','Company','Role','Cohort','LinkedIn','Claude Installed','Experience','Pain Point','Expectations','Webinar','Email Sent']);
    }

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
      'no'
    ]);

    if (data.email) {
      try {
        sendConfirmationEmail(data.fullName, data.email);
        var lastRow = sheet.getLastRow();
        sheet.getRange(lastRow, 13).setValue('yes');
      } catch(emailErr) {
        Logger.log('Email error: ' + emailErr.toString());
      }
    }

    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(fullName, email) {
  var firstName = fullName.split(' ')[0];
  var subject = 'Claude Code - Confirmation';

  var html = '<html dir="rtl"><head><meta charset="UTF-8"></head>';
  html += '<body style="font-family:Calibri,Arial,sans-serif;direction:rtl;text-align:right;max-width:600px;margin:0 auto;padding:20px;color:#1a1a2e;line-height:1.8;">';
  html += '<div style="background:linear-gradient(135deg,#064e3b,#0d9373);padding:24px;border-radius:12px;text-align:center;margin-bottom:24px;">';
  html += '<h1 style="color:#fff;margin:0;font-size:24px;">Claude Code</h1>';
  html += '<p style="color:#f5e642;margin:8px 0 0;font-size:16px;font-weight:600;">15.4 | 21:00</p>';
  html += '</div>';
  html += '<p style="font-size:16px;">' + firstName + ' ,</p>';
  html += '<p style="font-size:16px;">!Thanks for registering</p>';
  html += '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:20px 0;">';
  html += '<p style="margin:4px 0;">Date: Wed, April 15 2026</p>';
  html += '<p style="margin:4px 0;">Time: 21:00 (1.5 hours)</p>';
  html += '<p style="margin:4px 0;">Platform: Zoom</p>';
  html += '</div>';
  html += '<div style="text-align:center;margin:24px 0;">';
  html += '<a href="https://us04web.zoom.us/j/77886571189?pwd=ggleb2CwCMvkBNh3ckdsxb4UZoZD6i.1" style="display:inline-block;padding:14px 32px;background:#2D8CFF;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">Zoom Link</a>';
  html += '</div>';
  html += '<div style="background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:16px;margin:20px 0;">';
  html += '<p style="margin:0 0 8px;font-weight:700;">Install before the meeting:</p>';
  html += '<p style="margin:12px 0 4px;text-align:center;"><a href="https://hemibl.github.io/claude-code-webinar/materials/installation-guide.html" style="display:inline-block;padding:10px 24px;background:#0d9373;color:#fff;text-decoration:none;border-radius:8px;font-weight:500;">Installation Guide</a></p>';
  html += '<p style="margin:8px 0 0;font-size:13px;color:#92400e;">Claude Pro account required ($20/month). You can also join as a viewer without an account.</p>';
  html += '</div>';
  html += '<p style="font-size:15px;"><a href="https://www.linkedin.com/in/hemibenlavi/" style="color:#0d9373;">LinkedIn</a> | <a href="tel:0544608119" style="color:#0d9373;">054-460-8119</a></p>';
  html += '</body></html>';

  GmailApp.sendEmail(email, subject, '', {htmlBody: html, name: 'Hemi Ben Lavi'});
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({status: 'ok'})).setMimeType(ContentService.MimeType.JSON);
}
