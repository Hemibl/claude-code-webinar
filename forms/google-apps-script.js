/**
 * Google Apps Script - Form Submissions Backend
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse data - support both JSON and form data
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

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'שם מלא',
        'אימייל',
        'חברה',
        'תפקיד',
        'לינקדאין',
        'Claude מותקן?',
        'ניסיון',
        'מה גוזל זמן',
        'ציפיות'
      ]);
    }

    // Add the form data as a new row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('he-IL'),
      data.fullName || '',
      data.email || '',
      data.company || '',
      data.role || '',
      data.linkedin || '',
      data.claudeInstalled || '',
      data.experience || '',
      data.frustration || '',
      data.expectations || ''
    ]);

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

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Form backend is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
