function send() {
  let id = "ХХХХХХХХХ";
  let text = "TEXT";
  sendKeyboard(id, text, REMOVE_KEYBOARD); // REMOVE_KEYBOARD PHONE_No CUSTOM_KEYBOARD5
}

let CUSTOM_KEYBOARD = {
  "keyboard": [
    [{ "text": "start" }, { "text": "count" }]
  ]
};

let CUSTOM_KEYBOARD2 = {
  "keyboard": [
    [{ "text": "Button 1" }, { "text": "Button 2" }]
  ],
  "resize_keyboard": true
};

let CUSTOM_KEYBOARD3 = {
  "keyboard": [
    [{ "text": "Button 1" }, { "text": "Button 2" }],
    [{ "text": "Button 3" }, { "text": "Button 4" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let CUSTOM_KEYBOARD4 = {
  "keyboard": [
    [{ "text": "Button 1" }, { "text": "Button 2" }],
    [{ "text": "Button 3" }, { "text": "Button 4" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true,
  "input_field_placeholder": "Text - help"
};

let CUSTOM_KEYBOARD5 = {
  "keyboard": [
    [{ "text": "Button 1 ❤️" }, { "text": "Button 2 ✨" }],
    [{ "text": "Button 3 🆗" }, { "text": "Button 4 🔥" }, { "text": "Button 5 ✔️" }],
    [{ "text": "Button 6 ❤️‍🔥" }, { "text": "Button 7 🏁" }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true,
};

let REMOVE_KEYBOARD = {
  remove_keyboard: true
};

let PHONE_No = {
  "keyboard": [
    [{ "text": "Send phone number ☎️️", 'request_contact': true }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let LOCATION_KEYBOARD = {
  "keyboard": [
    [{ "text": "Send location 🗺️️", 'request_location': true }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let POLL_KEYBOARD = {
  "keyboard": [
    [{ "text": "Poll", 'request_poll': {} }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let POLL_KEYBOARD2 = {
  "keyboard": [
    [{ "text": "Poll Quiz", 'request_poll': { type: "quiz" } }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let POLL_KEYBOARD3 = {
  "keyboard": [
    [{ "text": "Poll", 'request_poll': { type: "regular" } }]
  ],
  "resize_keyboard": true,
  "one_time_keyboard": true
};

let INLINE = {
  "inline_keyboard": [
    [{ "text": "Button 1", 'callback_data': "/start" }, { "text": "Button 2", 'callback_data': "Button 2" }],
    [{ "text": "Button 3", 'callback_data': "Button 3" }, { "text": "Button 4", 'callback_data': "Button 4" }, { "text": "Button 5", 'callback_data': "Button 5" }],
    [{ "text": "Button 6", 'callback_data': "Button 6" }, { "text": "Button 7", 'callback_data': "Button 7" }]
  ]
};

let URL_KEYBOARD = {
  "inline_keyboard": [
    [{ "text": "Check mail", 'url': "mail.com" }]
  ]
};

let SWITCH_INLINE = {
  "inline_keyboard": [
    [{ "text": "Button 1", 'switch_inline_query_current_chat': 'my text' }, { "text": "Button 2", 'callback_data': "Button 2" }]
  ]
};

let FORCE_REPLY = {
  "force_reply": true,
  "input_field_placeholder": "Your text"
};




