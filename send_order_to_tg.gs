const token = "XXXXXX:XXXXXX";

function onEdit(e) {
  sendTelegram(e)
}

function sendTelegram(e){

var row = e.range.getRow();
var col = e.range.getColumn();

var startRow = 2; // начальная строка
var targetColumn = 1; // столбец, изменения в котором заставляют сработать триггер для отправки в телеграмм
var ws = "Form responses 1"; //имя листа


let chatId = "-XXXXXXXXXX"; // id группового чата куда добавлен бот ( всю информацию можно получить здесь https://api.telegram.org/botXXXXXX:XXXXX/getUpdates )
let City = e.source.getActiveSheet().getRange(row,5).getValue();
let Category = e.source.getActiveSheet().getRange(row,8).getValue();
let Order_type = e.source.getActiveSheet().getRange(row,7).getValue();
var text = encodeURIComponent(Category + " новый заказ " + City)

// var currentDate = new Date();
// var status = "ожидает"

var url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + text;

if (col === targetColumn && row >= startRow && e.source.getActiveSheet().getName() === ws){
  if(e.source.getActiveSheet().getRange(row,1).getValue() > 0 && e.source.getActiveSheet().getRange(row,25).getValue() === "Заказ"){
    sendText(chatId,"Новый заказ " + Category + "в городе " + City);
    // e.source.getActiveSheet().getRange(row,12).setValue(status);

  }
}


}

function sendText(chatId, text, keyBoard) {
  let data = {
    method: 'post',
    payload: {
      method: 'sendMessage',
      chat_id: String(chatId),
      text: text,
      parse_mode: 'HTML',
      reply_markup: JSON.stringify(keyBoard)
    }
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  }
