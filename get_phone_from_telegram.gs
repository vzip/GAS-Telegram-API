var token = "ХХХХ:ХХХХ";
var url = "https://api.telegram.org/bot" + token;
var webAppUrl = "https://script.google.com/macros/s/ХХХХХХХ/exec";
var ssId = "ХХХХХХХХХХ";
var chatid = "ХХХХХХХХ";
    
function getMe() {
  var response = UrlFetchApp.fetch(url + "/getMe");
  Logger.log(response.getContentText());
}

function getUpdates() {
  var response = UrlFetchApp.fetch(url + "/getUpdates");
  Logger.log(response.getContentText());
}

function setWebhook() {
  var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}

function sendText(id, text) {
   var response = UrlFetchApp.fetch(url + "/sendMessage?chat_id=" + id + "&text=" + encodeURIComponent(text)); //encodeURIComponent
  // Logger.log(response.getContentText());
}

function sendKeyboard(id, text, keyBoard) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(id),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyBoard)
    }
  };

  let PHONE_No = {
      "keyboard": [
        [{ "text": "Отправить номер ☎️️", 'request_contact': true }]
      ],
      "resize_keyboard": true,
      "one_time_keyboard": true
    };

  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + "/", data);
}


function answerCommand(command) {
  let sheetCommands = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Commands");
  let lastRow = sheetCommands.getLastRow();
  if (lastRow > 1) {
    let commandsArray = sheetCommands.getRange(2, 3, lastRow - 1).getValues().flat();
    let commandRow = commandsArray.indexOf(command) + 2;
    if (commandRow > 1) {
      let answer = sheetCommands.getRange(commandRow, 1, 1, 2).getValues();
      return answer;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function tmp() {
  let command = "/count";
  let answer = answerCommand(command);
  if (answer) {
    console.log(answer)
  }
  else {
    console.log("false")
  }
}

function doGet(e) {
  return HtmlService.createHtmlOutput("Hello " + JSON.stringify(e));
}

function doPost(e) {

    var contents = JSON.parse(e.postData.contents);
    var text = contents.message.text || contents.message.contact.phone_number;
    var id = contents.message.from.id;
    // var phone = contents.message.contact.phone_number;
    var name = contents.message.from.first_name + " " + contents.message.from.username;
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Debug").getRange(1, 1).setValue(JSON.stringify(contents, null, 5));
    if ((/^\//.exec(text))) {
      if (text === "/start"){
      sendKeyboard(id, "Your id " + id, PHONE_No);
      }
      else {
        let answer = answerCommand(text);
        if (answer) {
          sendText(id, `${answer[0][0]}: ${answer[0][1]}`);
        }
        else {
          sendText(id, `Command ${text} not found`);
        }
      }
    }
    // sendText(id, "Recorded " + text);
    
    else{
    sendKeyboard(id, "Received " + text, REMOVE_KEYBOARD);
    }

    var ss = SpreadsheetApp.openById(ssId);
    
    ss.appendRow([new Date(),id,name,text]); //add new row with data from webhook
    
    if(/^@/.test(text)) {
      var sheetName = text.slice(1).split(" ")[0]; // @todo text
      var newText = text.split(" ").slice(1).join(" ");
      var sheet =  ss.getSheetByName(sheetName) ? ss.getSheetByName(sheetName) : ss.insertSheet(sheetName);
      sheet.appendRow([new Date(),id,name,newText])
       sendText(id,"Your text " + newText + " added to table " + sheetName);
    }
    
} 
// the end
