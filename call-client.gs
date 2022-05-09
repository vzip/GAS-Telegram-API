
const token = "ХХХХХ";

function atEdit(e) {
  sendTelegram(e)
}

function sendTelegram(e){

var row = e.range.getRow();
var col = e.range.getColumn();

var startRow = 1; // начальная строка
var targetColumn = 4; // столбец, изменения в котором заставляют сработать триггер для отправки в телеграмм

// let ss = SpreadsheetApp.openById('идентификатор таблицы'); //используем идентификатор для обращеня к внешней таблице

var ws1 = "Sheet1"; //имя листа

var ws2 = "Sheet2"; //имя листа

let param1 = e.source.getSheetByName(ws1).getRange(row,3).getValue();
let param2 = "7хххххххххх";//e.source.getActiveSheet().getRange(row,2).getValue();
let param4 = "&startparam4=7хххххххххх&async=1";
// let param3 = e.source.getActiveSheet().getRange(row,4).getValue();

// var currentDate = new Date();
var status = "нет"

var url = "https://хххххх.vats-on.ru/execsvcscriptplain?name=s-web-calls&startparam1=" + param1 + "&startparam2=" + param2 + param4;
 // " + token + "@

if (col === targetColumn && row >= startRow && e.source.getActiveSheet().getName() === ws2){
  if(e.source.getActiveSheet().getRange(row,4).getValue() === "да"){ 

// var response = UrlFetchApp.fetch(url);
var response = UrlFetchApp.fetch(url, {
            "method": "get",
            "headers": {
                "Authorization": "Basic ХХХХХХХХХХХ"
                }
            });
Logger.log(response.getAllHeaders());
// Logger.log(response.getContentText());

       e.source.getActiveSheet().getRange(row,4).setValue(status);
    }
  }
}




  

