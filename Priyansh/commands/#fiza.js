const fs = require("fs");
module.exports.config = {
  name: "FIZA",
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
  if(react.includes("PAGLI") ||
     react.includes("PAGAL") || react.includes("fiza") || react.includes("FIZA JI") ||
react.includes("FIZA KHAN") ||
react.includes("FIZA") ||     
react.includes("fiza khan")) {
    var msg = {
        body: `${name}𝐊𝐈𝐒 𝐍𝐄😜 𝐘𝐀𝐀𝐃 𝐊𝐈𝐘𝐀 𝐌𝐄𝐑𝐄 😳𝐍ÀSS𝐇3𝐃𝐈 𝐆𝐀𝐍𝐉𝐄𝐃𝐈 𝐊𝐎 𝐋𝐎😸 𝐀𝐆𝐀𝐘𝐈 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐒𝐮𝐡𝐞𝐛 🤫𝐊𝐈 𝐅𝐑𝐈𝐍𝐃 𝐍𝐀𝐒𝐇𝐄𝐃😎𝐈 𝐅𝐢𝐳𝐚💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/fiza.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
