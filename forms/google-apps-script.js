/**
 * Google Apps Script - Form Submissions Backend
 * ================================================
 * This script receives POST requests from an HTML form
 * and saves each submission as a new row in the active Google Sheet.
 *
 * DEPLOYMENT INSTRUCTIONS: See setup-instructions.md
 */

// Handle POST requests from the form
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);

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
        'ניסיון עם AI',
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

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Form backend is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
