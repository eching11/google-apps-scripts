function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('[Custom Menu Name]')
      .addItem('[Custom Item]', 'showSidebar')
      .addToUi();
//  Logger.log(e.authMode);
}

function showSidebar() {
 var html = HtmlService.createHtmlOutputFromFile('[html file name]')
      .setTitle('[Sidebar title]')
      .setWidth(300);
  SpreadsheetApp.getUi()
      .showSidebar(html);
}
