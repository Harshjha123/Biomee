let libPrefix = "BiomeeLib"

function connectApi(apiKey, secretKey) {
  if (!apiKey || !secretKey) { Bot.sendMessage("Biomee lib Error: Connection didn't happen, Api Keys are not in correct format.") }
  
  const data = JSON.stringify({API_KEY: apiKey, SECRET_KEY: secretKey})
  
  HTTP.get({
    url: 'http://192.168.29.34:3001/merchant/api-connection', 
    headers: {"Authorization": data}, 
    success: libPrefix + "onApiConnection",
    error: libPrefix + "onApiConnectionError"
  });
}

function onApiConnection() {
  return Bot.sendMessage('Content: \n' + content);
}

function onApiConnectionError() {
  return Bot.sendMessage('Content: \n' + content);
}

function connectUser() {
  Api.sendMessage({
  text: "*Error: Biomee account not connected.* You must connect it to send or receive payments with .",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "Connect Account", web_app: { url: 'https://biomee.web.app/connect' } }
      ]
    ]
  },
    parse_mode: "Markdown"
})
}

publish({
  connect: {
    key: connectApi,
    user: connectUser
  }
})
