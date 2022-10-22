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
  var webExample = 'https://biomee.web.app/connect';

Api.sendMessage({
  text: "It is example for BB Web App",

  reply_markup: {
    resize_keyboard: true,
    keyboard: [
      // line 1
      [
        { text: "🤑 Open Web App" },
        { text: "Open App", web_app: { url: webExample } }
      ]
    ]
  }
})
}

publish({
  connect: {
    key: connectApi,
    user: connectUser
  }
})
