const fs = require("fs");
module.exports.config = {
  name: "gappi",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("golgappe") ||
     react.includes("Golgappe") || react.includes("gol gappi") || react.includes("Gol gappi") ||
react.includes("Golgappa") ||
react.includes("Panipuri") ||     
react.includes("Golgappe")) {
    var msg = {
        body: `${name} 𝐋𝐨 𝐛𝐚𝐛𝐲 𝐩à𝐧𝐢 𝐩𝐮𝐫𝐢 𝐤𝐡𝐚𝐨 💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Gappi.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
