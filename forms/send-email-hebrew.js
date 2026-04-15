function sendConfirmationEmail(fullName, email) {
  var firstName = fullName.split(' ')[0];
  var subject = '\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E8\u05E9\u05DE\u05D4 - Claude Code \u05DC\u05E0\u05DE\u05E8\u05D9\u05DD \u05DE\u05E2\u05D5\u05E4\u05E4\u05D9\u05DD';

  var html = '<html dir="rtl"><head><meta charset="UTF-8"></head>';
  html += '<body style="font-family:Calibri,Arial,sans-serif;direction:rtl;text-align:right;max-width:600px;margin:0 auto;padding:20px;color:#1a1a2e;line-height:1.8;">';
  html += '<div style="background:linear-gradient(135deg,#064e3b,#0d9373);padding:24px;border-radius:12px;text-align:center;margin-bottom:24px;">';
  html += '<h1 style="color:#fff;margin:0;font-size:24px;">Claude Code \u05DC\u05E0\u05DE\u05E8\u05D9\u05DD \u05DE\u05E2\u05D5\u05E4\u05E4\u05D9\u05DD</h1>';
  html += '<p style="color:#f5e642;margin:8px 0 0;font-size:16px;font-weight:600;">\u05DE\u05DE\u05E8\u05D9\u05D0\u05D9\u05DD \u05D1\u05D9\u05D7\u05D3 - \u05E8\u05D1\u05D9\u05E2\u05D9 15.4 | 21:00</p>';
  html += '</div>';
  html += '<p style="font-size:16px;">\u05D4\u05D9\u05D9 ' + firstName + ',</p>';
  html += '<p style="font-size:16px;">\u05EA\u05D5\u05D3\u05D4 \u05E9\u05E0\u05E8\u05E9\u05DE\u05EA! \u05E9\u05DE\u05E8\u05E0\u05D5 \u05DC\u05DA \u05DE\u05E7\u05D5\u05DD</p>';
  html += '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:20px 0;">';
  html += '<p style="margin:0 0 8px;font-weight:700;font-size:15px;">\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9:</p>';
  html += '<p style="margin:4px 0;">\u05E8\u05D1\u05D9\u05E2\u05D9, 15 \u05D1\u05D0\u05E4\u05E8\u05D9\u05DC 2026</p>';
  html += '<p style="margin:4px 0;">21:00 (\u05E9\u05E2\u05D4 \u05D5\u05D7\u05E6\u05D9)</p>';
  html += '<p style="margin:4px 0;">Zoom</p>';
  html += '</div>';
  html += '<div style="text-align:center;margin:24px 0;">';
  html += '<a href="https://us04web.zoom.us/j/77886571189?pwd=ggleb2CwCMvkBNh3ckdsxb4UZoZD6i.1" style="display:inline-block;padding:14px 32px;background:#2D8CFF;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">\u05DC\u05D9\u05E0\u05E7 \u05DC\u05DE\u05E4\u05D2\u05E9 \u05D1\u05D6\u05D5\u05DD</a>';
  html += '</div>';
  html += '<div style="background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:16px;margin:20px 0;">';
  html += '<p style="margin:0 0 8px;font-weight:700;font-size:15px;">\u26A1 \u05D7\u05E9\u05D5\u05D1 - \u05DC\u05D4\u05EA\u05E7\u05D9\u05DF \u05DC\u05E4\u05E0\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9:</p>';
  html += '<p style="margin:4px 0;">\u05DC\u05D0 \u05E0\u05E7\u05D3\u05D9\u05E9 \u05D6\u05DE\u05DF \u05DC\u05D4\u05EA\u05E7\u05E0\u05D4 \u05D1\u05DE\u05E4\u05D2\u05E9 \u05E2\u05E6\u05DE\u05D5, \u05D0\u05D6 \u05E2\u05D3\u05D9\u05E3 \u05DE\u05D0\u05D5\u05D3 \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD.</p>';
  html += '<p style="margin:4px 0;">\u05D4\u05DB\u05E0\u05EA\u05D9 \u05DE\u05D3\u05E8\u05D9\u05DA \u05D4\u05EA\u05E7\u05E0\u05D4 \u05E4\u05E9\u05D5\u05D8 \u05D2\u05DD \u05DC-Windows \u05D5\u05D2\u05DD \u05DC-Mac:</p>';
  html += '<p style="margin:12px 0 4px;text-align:center;"><a href="https://hemibl.github.io/claude-code-webinar/materials/installation-guide.html" style="display:inline-block;padding:10px 24px;background:#0d9373;color:#fff;text-decoration:none;border-radius:8px;font-weight:500;">\u05DE\u05D3\u05E8\u05D9\u05DA \u05D4\u05EA\u05E7\u05E0\u05D4</a></p>';
  html += '<p style="margin:8px 0 0;font-size:13px;color:#92400e;">\u05E9\u05D9\u05DE\u05D5 \u05DC\u05D1: \u05E0\u05D3\u05E8\u05E9 \u05D7\u05E9\u05D1\u05D5\u05DF Claude Pro ($20/\u05D7\u05D5\u05D3\u05E9). \u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05DC\u05D4\u05E9\u05EA\u05EA\u05E3 \u05DB\u05E6\u05D5\u05E4\u05D9\u05DD \u05DE\u05D4\u05E6\u05D3 \u05D5\u05DC\u05D4\u05D7\u05DC\u05D9\u05D8 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05DE\u05E4\u05D2\u05E9.</p>';
  html += '</div>';
  html += '<p style="font-size:15px;">\u05D4\u05DE\u05E4\u05D2\u05E9 \u05DC\u05D0 \u05D9\u05D4\u05D9\u05D4 \u05DE\u05D5\u05E7\u05DC\u05D8 - \u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05D9\u05D4\u05E0\u05D5\u05EA, \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA \u05E9\u05DD</p>';
  html += '<p style="font-size:15px;">\u05E0\u05EA\u05E8\u05D0\u05D4!<br><strong>\u05D7\u05DE\u05D9 \u05D1\u05DF \u05DC\u05D1\u05D9\u05D0</strong><br>';
  html += '<a href="https://www.linkedin.com/in/hemibenlavi/" style="color:#0d9373;">LinkedIn</a> | ';
  html += '<a href="tel:0544608119" style="color:#0d9373;">054-460-8119</a></p>';
  html += '</body></html>';

  GmailApp.sendEmail(email, subject, '', {htmlBody: html, name: '\u05D7\u05DE\u05D9 \u05D1\u05DF \u05DC\u05D1\u05D9\u05D0'});
}
