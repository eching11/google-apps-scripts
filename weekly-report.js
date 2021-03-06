// Emails weekly review (every Sunday via trigger) with report on week's highlights and total hours read.
// Google Apps Script attached to a Spreadsheet

function weekly() {
  var ss = SpreadsheetApp.openById("[GoogleSpreadsheetID]");
  var sheet = ss.getSheets()[0];
  sheet.sort(1,false);
  

  // Lists highlights from this week, one on each new line
  var range = sheet.getRange("I2:I8");
  const numRows = 7;
  const numCols = 1;
  var highlights = "";
  
  for (var i = 1; i <= numCols; i++) {
    for (var j = 1; j <= numRows; j++) {
      if (range.getCell(j,i).getValue() !== ""){
        highlights += range.getCell(j,i).getValue() + "<br>";
      }          
    }
  }
  
  // Total hours read this week
  var cell = sheet.getRange("J2");
  cell.setFormula("=SUM(C2:C8)");
  var sum = cell.getValues();
  
   recipient = "[email]";
   subject = "Weekly Review";
  options = `Another week, another book (hopefully)!<br><br><b>Highlights:<\/b><br>${highlights}<br>Total hours read: ${sum}`;
   MailApp.sendEmail({
    to: recipient,
    subject: subject,
     htmlBody: options,});
}
