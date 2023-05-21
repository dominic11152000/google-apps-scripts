function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Assign ID')
      .addItem('Assign ID', 'assignID')
      .addToUi();
}

function assignID() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var idNumber = 1;

  for (var row = 2; row <= lastRow; row++) {
    var isPopulated = false;

    for (var col = 2; col <= 12; col++) {
      if (sheet.getRange(row, col).getValue() !== "") {
        isPopulated = true;
        break;
      }
    }

    if (isPopulated) {
      sheet.getRange(row, 1).setValue(idNumber);
      idNumber++;
    } else {
      sheet.getRange(row, 1).setValue("");
    }
  }
}
